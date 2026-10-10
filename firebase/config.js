// firebase/config.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const databaseURL_Realtime = process.env.NEXT_PUBLIC_LOCAL_EMULATOR_databaseURL;

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app;

// 1. Inicialización segura evitando duplicados en Next.js
if (process.env.NEXT_PUBLIC_FIREBASE_EMULATORS === "emulators") {
  const localConfig = {
    ...firebaseConfig,
    databaseURL: databaseURL_Realtime,
  };
  app = getApps().length === 0 ? initializeApp(localConfig) : getApp();

  // Conectar emuladores si no se conectaron previamente
  const dbFirestore = getFirestore(app);
  // Un pequeño chequeo interno para evitar reconexiones del emulador en caliente
  if (!dbFirestore._settings.host?.includes("localhost")) {
    connectFirestoreEmulator(dbFirestore, "localhost", 8080);
    connectDatabaseEmulator(getDatabase(app), "localhost", 9000); // Puerto por defecto de Realtime
  }
  console.log("Conectado con emuladores locales");
} else {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  console.log("Conectado a producción sin Emuladores");
}

// 2. Inicializar los servicios
const realtimeDB = getDatabase(app);
const firestoreDB = getFirestore(app);

// 3. Inicializar Analytics de forma segura para SSR de Next.js
const analytics =
  typeof window !== "undefined"
    ? () =>
        isSupported().then((supported) =>
          supported ? getAnalytics(app) : null,
        )
    : null;

// Exportamos de forma limpia (quitamos imagesDB que no usaremos por Cloudinary)
export { app, realtimeDB, firestoreDB, analytics };
