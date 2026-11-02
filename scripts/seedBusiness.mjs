import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import dotenv from "dotenv";
import { initialBusinesses } from "./data/dataSeedBusiness.mjs";

dotenv.config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "zindo-2027";

// Emulador: no requiere credenciales
// Producción: requiere GOOGLE_APPLICATION_CREDENTIALS apuntando al Service Account JSON
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

async function seedBusinesses() {
  console.log("🌱 Insertando datos de agencias en Firestore...");
  try {
    const nuevosMapeosDominios = {};

    for (const business of initialBusinesses) {
      const { id, devDomain, currentDomain, ...dataToSave } = business;
      await db
        .collection("businesses")
        .doc(id)
        .set({ id, currentDomain, ...dataToSave });
      console.log(`✅ Negocio insertado: ${id}`);

      nuevosMapeosDominios[currentDomain] = id;
      nuevosMapeosDominios[devDomain] = id;
    }

    await db
      .collection("config")
      .doc("domainDictionary")
      .set({ mappings: nuevosMapeosDominios }, { merge: true });
    console.log("✅ Diccionario de dominios actualizado correctamente.");
  } catch (error) {
    console.error("❌ Error al insertar datos en Firestore:", error);
    process.exit(1);
  }
}

seedBusinesses();
