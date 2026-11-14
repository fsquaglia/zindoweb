import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import dotenv from "dotenv";
import { allowedComponents } from "./data/dataSeedComponent.mjs";

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

async function addComponentsToBusiness(collectionName, docId, components) {
  if (!collectionName || !docId || !Array.isArray(components) || components.length === 0) {
    throw new Error("collectionName, docId y components (array) son obligatorios.");
  }

  console.log(`🌱 Agregando ${components.length} componente(s) a ${docId}...`);
  try {
    await db
      .collection(collectionName)
      .doc(docId)
      .update({
        "landingConfig.components": FieldValue.arrayUnion(...components),
      });
    console.log(`✅ Componentes agregados correctamente a: ${docId}`);
  } catch (error) {
    console.error("❌ Error al agregar los componentes:", error);
    process.exit(1);
  }
}

addComponentsToBusiness(
  "businesses",
  "biz_centroMotos_004",
  allowedComponents,
);
