// Ver la información de los comercios que se van a agregar en
// initialBusinesses from "./data/dataSeedBusiness.mjs";

import { pathToFileURL } from "node:url";
import { db } from "./firebaseAdmin.mjs";
import { dataTypes } from "./data/dataTypes.mjs";

export async function seedTypes() {
  console.log("🌱 Insertando datos de tipos de agrupamiento en Firestore...");
  await db
    .collection("config")
    .doc("dataTypes")
    .set({ mappings: dataTypes }, { merge: true });
  console.log("✅ Tipos de datos actualizados correctamente.");
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  seedTypes().catch((error) => {
    console.error("❌ Error al insertar datos en Firestore:", error);
    process.exitCode = 1;
  });
}
