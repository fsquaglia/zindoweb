// Ver la información de los comercios que se van a agregar en
// initialBusinesses from "./data/dataSeedBusiness.mjs";

import { pathToFileURL } from "node:url";
import { db } from "./firebaseAdmin.mjs";
import { initialBusinesses } from "./data/dataSeedBusiness.mjs";

export async function seedBusinesses() {
  console.log("🌱 Insertando datos de agencias en Firestore...");
  const nuevosMapeosDominios = {};

  for (const business of initialBusinesses) {
    const { id, devDomain, currentDomain, ...dataToSave } = business;
    await db
      .collection("businesses")
      .doc(id)
      .set({ id, currentDomain, devDomain, ...dataToSave });
    console.log(`✅ Negocio insertado: ${id}`);

    nuevosMapeosDominios[currentDomain] = id;
    nuevosMapeosDominios[devDomain] = id;
  }

  await db
    .collection("config")
    .doc("domainDictionary")
    .set({ mappings: nuevosMapeosDominios }, { merge: true });
  console.log("✅ Diccionario de dominios actualizado correctamente.");
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  seedBusinesses().catch((error) => {
    console.error("❌ Error al insertar datos en Firestore:", error);
    process.exitCode = 1;
  });
}
