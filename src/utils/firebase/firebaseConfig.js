// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// import { getStorage, connectStorageEmulator } from "firebase/storage"; //almacenamiento de imágenes
// import { getDatabase, connectDatabaseEmulator } from "firebase/database"; //realtime database para los Servicios
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"; //firestore como BD de colecciones y documentos
const databaseURL_Realtime = process.env.NEXT_PUBLIC_LOCAL_EMULATOR_databaseURL;

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase with dynamic configuration
let app;
let firestoreDB; // 👈 Declaramos la variable acá arriba

if (process.env.NEXT_PUBLIC_FIREBASE_EMULATORS === "emulators") {
  // Use local emulator settings
  const localConfig = {
    ...firebaseConfig,
    databaseURL: databaseURL_Realtime,
  };

  // Inicializar la app de forma segura evitando duplicados
  app = getApps().length === 0 ? initializeApp(localConfig) : getApp();

  // OBTENER LA INSTANCIA PRIMERO (Requisito de Firebase)
  firestoreDB = getFirestore(app);

  // CONECTAR AL EMULADOR UNA SOLA VEZ
  if (!global.firestoreEmulatorConnected) {
    connectFirestoreEmulator(firestoreDB, "127.0.0.1", 8080);
    global.firestoreEmulatorConnected = true;
    console.log("Conectado con emuladores");
  }
} else {
  // Use production settings
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  firestoreDB = getFirestore(app); // 👈 En producción se inicializa directo sin emulador
  console.log("Conectado sin Emuladores");
}

// Exportamos exactamente lo que tus componentes y APIs ya están esperando recibir
export { app, firestoreDB };
// export { app, imagesDB, realtimeDB, firestoreDB };
