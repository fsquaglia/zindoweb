import { cert, initializeApp } from "firebase-admin/app";
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

export const db = getFirestore();
