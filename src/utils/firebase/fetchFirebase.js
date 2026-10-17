import { v4 as uuidv4 } from "uuid";
// import Swal from "sweetalert2";
// TODO import bcrypt from "bcryptjs";
const commerceName = process.env.PSEUDONAME_COMMERCE;
const nameApp = process.env.NAME_APP;

import {
  firestoreDB,
  // realtimeDB,
} from "@/utils/firebase/firebaseConfig";
import {
  collection,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  doc,
  setDoc,
  addDoc,
  runTransaction,
  startAfter,
  getCountFromServer,
  updateDoc,
  arrayUnion,
  arrayRemove,
  increment,
  writeBatch,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";

import {
  ref as realtimeRef,
  set,
  get as realtimeGet,
  child,
} from "firebase/database";

import { revalidateSomePath } from "../actions/actions";
import {initialBusinesses} from "../SettingInitialData";

//!REALTIME
//?Traer datos de un nodo específico de realtime
export async function getNodoRealtime(nodo) {
  try {
    const snapShot = await realtimeGet(
      child(realtimeRef(realtimeDB), `/${nodo}`),
    );
    if (snapShot.exists()) {
      //console.log(snapShot.val());
      return snapShot.val();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

//?Almacena datos en un nodo específico de Realtime.
export async function setNodoRealtime(nodo, dataNodo) {
  try {
    const refNodo = realtimeRef(realtimeDB, nodo);
    await set(refNodo, dataNodo);
    // console.log(`Información almacenada en ${nodo}`);
  } catch (e) {
    console.error(`Error almacenando en ${nodo}. `, e);
    throw e;
  }
}

//? almacenar todos los datos iniciales para la página
export async function loadDataInitFirebase() {
  try {
    // Ejecutar funciones en paralelo
    await Promise.all([
      setNodoRealtime("about", aboutInitialData),
      setNodoRealtime("historia", historyInitialData),
      setNodoRealtime("team", teamInitialData),
      setNodoRealtime("main", mainInitialData),
      setNodoRealtime("eslogan", sloganInitialData),
      setNodoRealtime("footer", footerInitialData),
      setNodoRealtime("contacto", contactInitialData),
      setNodoRealtime("variaciones", variationsInitialData1),
      setTipsCategoryFirestore(),
      setTipsFirestore(),
      setProductsCategoryFirestore(),
      createDocConfig(), //documento de Firestore
    ]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Funciones ejecutadas con éxito",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (e) {
    console.error("Error! ", error);
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Algo está mal...",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

//! ESCRIBIR DATOS EN FIRESTORE
//Agregar un nuevo CONTACTO/CLIENTE/USUARIO
export async function addNewContactFirestore(dataObject) {
  /*dataObject debe ser
  {nombreContacto:"Nombre Apellido",
  sobrenombre: "tucho",
  direccion: "",
  localidad:"",
  provincia:"",
  email:"",
  password:"",
  celTE:"",
  saldo: 0,...
  }
  */
  try {
    // Agrega un nuevo doc a la colección "contactos"
    const docRef = await addDoc(
      collection(firestoreDB, "usuarios"),
      dataObject,
    );
    //Agregar también la colección de likes inicializada en [], de aquí podremos mostrar los productos que le gustan al usuario
    await setDoc(
      doc(firestoreDB, `usuarios/${docRef.id}/LikesProduct/documentoDeLikes`),
      { likesProductos: [], misLikesCount: 0, likes: [] },
    );

    //Agregar evento de registro en el historial
    await addEventToHistory(
      docRef.id,
      `${dataObject.nombreContacto || "Anónimo"} - (${dataObject.email})`,
      "Registro",
      "Se registró en la app",
      docRef.id,
    );
    //Agregar el nuevo email a la lista de emailsPromocionales
    await addEmailPromotional(dataObject.email, dataObject.nombreContacto);

    //revalidar la ruta de userManagement para que se revaliden los cambios
    // revalidateSomePath("/dashboard/userManagement");

    console.log("Contacto agregado: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error al agregar contacto: ", error);
    throw error;
  }
}

//obtener un usuario o contacto por el email
export async function getUserByEmail(email) {
  const q = query(
    collection(firestoreDB, "usuarios"),
    where("email", "==", email),
  );

  const querySnapshot = await getDocs(q);
  const users = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    users.push({ id: doc.id, ...doc.data() });
  });

  return users;
}

// Agregar un evento al historial general del comercio y al historial del usuario
// Función para obtener la fecha en la zona horaria del usuario
const getFechaLocal = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset()); // Ajusta a la zona horaria local
  return now.toISOString().split("T")[0]; // "2025-01-28"
};
// Función para obtener la hora en la zona horaria del usuario
const getHoraLocal = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset()); // Ajusta a la zona horaria local
  return now.toISOString(); // "2025-01-28T15:30:00.123Z"
};

export const addEventToHistory = async (
  usuarioID,
  nameEmail,
  tipo,
  detalles,
  refID,
) => {
  const fechaHoy = getFechaLocal(); // Fecha local del usuario
  const horaLocal = getHoraLocal(); // Hora local del usuario

  const dataEvent = {
    nameEmail,
    tipo,
    fecha: horaLocal,
    detalles,
    refID,
  };

  try {
    const docRef = doc(firestoreDB, "historial", fechaHoy);
    // Usamos setDoc con merge: true para agregar el campo si no existe o actualizarlo si ya está.

    // Actualizar el historial de acciones general para el administrador
    await setDoc(
      docRef,
      {
        [usuarioID]: arrayUnion(dataEvent),
      },
      { merge: true }, // Garantiza que no se sobrescriba el documento existente.
    );

    //Actualizar el historial de acciones del usuario
    const docRefUser = doc(
      firestoreDB,
      `/usuarios/${usuarioID}/historialAcciones/${fechaHoy}`,
    );
    await setDoc(
      docRefUser,
      {
        historialDiario: arrayUnion(dataEvent),
      },
      { merge: true },
    );
  } catch (error) {
    console.error("Error al registrar la acción:", error);
  }
};

// Agregar un nuevo usuario al listado de emailsPromocionales
export async function addEmailPromotional(email, nombre) {
  try {
    const docRef = doc(firestoreDB, "emailsPromocionales", "emailsActive");

    // Construimos el objeto de actualización manualmente
    const updateData = {};
    updateData["users"] = {};
    updateData["users"][email] = nombre;

    await setDoc(docRef, updateData, { merge: true });
    console.log("Email agregado con éxito.");
  } catch (error) {
    console.error("Error al agregar el email: ", error);
    throw error;
  }
}

// CATALOGO de productos. Crear un batch de escritura para agregar múltiples productos a Firestore (si mandamos un array de un sólo producto, también funciona)
export async function createCatalogItemsFirestore(items, commerceName) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Debés enviar un array con al menos un artículo.");
  }

  if (!commerceName) {
    throw new Error("commerceName es obligatorio para crear artículos.");
  }

  // Firestore permite hasta 500 operaciones por batch.
  if (items.length > 500) {
    throw new Error("No podés crear más de 500 artículos por vez.");
  }

  try {
    const batch = writeBatch(firestoreDB);
    const catalogCollection = collection(firestoreDB, "catalogItems");

    const createdIds = items.map((item) => {
      // doc(collection) crea una referencia con ID automático de Firestore.
      const catalogItemRef = doc(catalogCollection);

      batch.set(catalogItemRef, {
        ...item,
        commerceName,
        creadoEn: serverTimestamp(),
        actualizadoEn: serverTimestamp(),
      });

      return catalogItemRef.id;
    });

    await batch.commit();

    console.log("Artículos de catálogo creados:", createdIds);

    return createdIds;
  } catch (error) {
    console.error("Error al crear artículos del catálogo:", error);
    throw error;
  }
}

// obtener todos los artículos del catálogo de un comercio específico
export async function getCatalogItemsFirestore({
  commerceName,
  categorySlugs = [],
}) {
  if (!commerceName) {
    throw new Error("commerceName es obligatorio.");
  }

  try {
    const constraints = [
      where("commerceName", "==", commerceName),
      where("estado", "==", "disponible"),
    ];

    // Permite una o varias categorías:
    // ?categoria=automotores&categoria=motocicletas
    if (categorySlugs.length > 0) {
      constraints.push(where("categorySlug", "in", categorySlugs));
    }

    const catalogQuery = query(
      collection(firestoreDB, "catalogItems"),
      ...constraints,
    );

    const querySnapshot = await getDocs(catalogQuery);

    return querySnapshot.docs.map((catalogItemDoc) => ({
      id: catalogItemDoc.id,
      ...catalogItemDoc.data(),
    }));
  } catch (error) {
    console.error("Error obteniendo artículos del catálogo:", error);
    throw error;
  }
}

// obtener un documento específico de Firestore por su ID y colección
export async function getDocument(collectionName, documentId) {
  if (!collectionName || !documentId) {
    throw new Error("collectionName y documentId son obligatorios.");
  }

  try {
    const documentRef = doc(firestoreDB, collectionName, documentId);
    const documentSnapshot = await getDoc(documentRef);

    return documentSnapshot.exists() ? documentSnapshot.data() : null;
  } catch (error) {
    console.error("Error al obtener el documento de Firestore:", error);
    throw error;
  }
}

// Esta función agrega un documento a la colección especificada con un ID generado automáticamente por Firestore.
export async function addDocIdRandom(collectionName, datosAgencia) {
  if (!collectionName || !datosAgencia) {
    throw new Error(
      "collectionName y datosAgencia son obligatorios para agregar un documento.",
    );
  }
  try {
    // 1. Apuntamos a la colección
    const coleccionRef = collection(db, collectionName);
    // 2. Guardamos y Firestore genera el ID automáticamente
    const docRef = await addDoc(coleccionRef, datosAgencia);

    console.log("¡Doc creado con ID automático! ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error al guardar el documento:", error);
    throw error;
  }
}

// * Agrega un componente al array landingConfig.components del documento indicado.
export async function addComponentToBusiness(collectionName, docId, dataComponent) {
  if (!collectionName || !docId || !dataComponent) {
    throw new Error(
      "collectionName, docId y dataComponent son obligatorios para guardar con ID manual.",
    );
  }

  try {
    // 1. Apuntamos al documento exacto combinando colección e ID
    const docRef = doc(firestoreDB, collectionName, docId);

    // arrayUnion conserva los componentes existentes y agrega el nuevo de forma atómica.
    await setDoc(
      docRef,
      { landingConfig: { components: arrayUnion(dataComponent) } },
      { merge: true },
    );

    console.log(`¡Doc guardado con éxito bajo el ID manual: ${docId}!`);
    return docId;
  } catch (error) {
    console.error("Error al guardar el documento con ID manual:", error);
    throw error; // Relanzamos para capturarlo en la interfaz (UI)
  }
}

// TODO Esta función busca un documento en la colección "business" por el campo "idNameBusiness" y devuelve su ID si existe, o null si no.
export async function searchBusiness(dataBusiness) {
  // Validamos que venga el campo clave para el control de duplicados
  if (!dataBusiness.idNameBusiness) {
    throw new Error(
      "El campo idNameBusiness es obligatorio para verificar duplicados.",
    );
  }

  try {
    const coleccionRef = collection(db, "business");

    // 1. Creamos la consulta para buscar si ya existe ese idNameBusiness
    const q = query(
      coleccionRef,
      where("idNameBusiness", "==", dataBusiness.idNameBusiness),
    );

    // 2. Ejecutamos la búsqueda en Firestore
    const querySnapshot = await getDocs(q);

    // 3. Verificamos si trajo algún resultado
    if (!querySnapshot.empty) {
      // Tomamos el ID del que ya existe
      const docExistente = querySnapshot.docs[0];
      console.log(
        `⚠️ La agencia '${dataBusiness.idNameBusiness}' ya existe con el ID: ${docExistente.id}. No se duplica.`,
      );
      return docExistente.id;
    }

    // 4. Si el snapshot está vacío, devolvemos null para indicar que no existe y se puede crear
    return null;
  } catch (error) {
    console.error("Error en la búsqueda:", error);
    throw error;
  }
}

// Esta función recorre el array initialBusinesses y crea los documentos en Firestore, además de actualizar el diccionario de dominios.
export async function seedBusinesses() {
  const dictRef = doc(firestoreDB, "config", "domainDictionary");
  const nuevosMapeosDominios = {};

  for (const business of initialBusinesses) {
    const { id, devDomain, currentDomain, ...dataToSave } = business;
    const businessRef = doc(firestoreDB, "businesses", id);

    await setDoc(businessRef, { id, currentDomain, ...dataToSave });

    nuevosMapeosDominios[currentDomain] = id;
    nuevosMapeosDominios[devDomain] = id;
  }

  await setDoc(
    dictRef,
    { mappings: nuevosMapeosDominios },
    { merge: true }
  );
}