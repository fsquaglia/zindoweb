// Necesitas ver la información en
//* singleBusiness from "./data/dataSeedBusiness.mjs";
// y modificar de acuerdo al comercio que se quiere agregar

import { singleBusiness } from "./data/dataSeedBusiness.mjs";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "zindo-2027";

if (process.env.NEXT_PUBLIC_FIREBASE_EMULATORS === "emulators") {
  process.env.FIRESTORE_EMULATOR_HOST = "127.0.0.1:8080";
  console.log(
    "🔌 Script enrutado al Emulador Local de Firestore (127.0.0.1:8080)",
  );
  initializeApp({ projectId });
} else {
  initializeApp({
    credential: cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
    projectId,
  });
}

const db = getFirestore();

async function addOneBusiness() {
  console.log(`🌱 Insertando negocio: ${singleBusiness.id}...`);
  try {
    const { id, devDomain, currentDomain, ...dataToSave } = singleBusiness;

    await db
      .collection("businesses")
      .doc(id)
      .set({ id, currentDomain, ...dataToSave });
    console.log(`✅ Negocio insertado: ${id}`);

    await db
      .collection("config")
      .doc("domainDictionary")
      .set(
        { mappings: { [currentDomain]: id, [devDomain]: id } },
        { merge: true },
      );
    console.log("✅ Diccionario de dominios actualizado.");
  } catch (error) {
    console.error("❌ Error al insertar el negocio:", error);
    process.exit(1);
  }
}

addOneBusiness();
