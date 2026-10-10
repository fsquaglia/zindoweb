/**
 * Componente de carga y edición de imágenes integrado con Cloudinary
 *
 * Proporciona una interfaz simple para que los usuarios carguen imágenes
 * a través de múltiples fuentes (local, URL, cámara) usando el widget
 * de Cloudinary. Las imágenes se almacenan en la carpeta "productos"
 * con un tamaño máximo de 1MB.
 *
 * @component
 * @example
 * function MyComponent() {
 *   const handleUploadSuccess = (imageUrl) => {
 *     console.log("Imagen cargada:", imageUrl);
 *     // Hacer algo con la URL de la imagen
 *   };
 *
 *   return <ImageEditUpload onUploadSuccess={handleUploadSuccess} />;
 * }
 *
 * @param {Object} props - Propiedades del componente
 * @param {Function} props.onUploadSuccess - Callback ejecutado cuando la carga es exitosa.
 *                                            Recibe como parámetro la URL segura (HTTPS)
 *                                            de la imagen cargada en Cloudinary.
 *                                            Tipo: (imageUrl: string) => void
 *
 * @returns {React.ReactElement} Un botón con icono de cámara que abre el widget
 *                                de carga de Cloudinary al hacer clic.
 *
 * @requires next-cloudinary - Librería para integración con Cloudinary
 *
 * @configuration
 * - **uploadPreset**: "tspeblqq" - Preset de carga configurado en tu cuenta de Cloudinary
 * - **folder**: "asignable" - Carpeta destino en Cloudinary donde se guardan las imágenes
 * - **multiple**: false - Solo permite subir una imagen a la vez
 * - **sources**: ["local", "url", "camera"] - Opciones disponibles para cargar:
 *   - local: Desde el dispositivo
 *   - url: Desde una URL externa
 *   - camera: Desde la cámara del dispositivo
 * - **maxFileSize**: 524.288 bytes (0.5MB) - Tamaño máximo permitido para las imágenes
 * - **resource_type**: "image" - Solo permite cargar archivos de imagen
 *
 * @styles
 * - **Button**: Fondo azul con hover azul oscuro, texto blanco, redondeado
 * - **Icon**: Icono SVG de cámara (24x24px, escalado a 20x20px)
 * - **Responsive**: El botón ocupa el 100% del ancho y alto de su contenedor
 *
 * @note El componente utiliza "use client" ya que requiere interactividad del lado cliente
 *
 * @note Se recomienda envolver este componente en un contenedor con dimensiones definidas
 *       (ancho y alto) para que el botón se renderice correctamente.
 *
 * @throws No lanza errores directamente, pero la carga puede fallar si:
 *         - El uploadPreset no es válido
 *         - La cuenta de Cloudinary no está configurada correctamente
 *         - El archivo excede el tamaño máximo de 1MB
 */

/**
 * @typedef {Object} ImageEditUploadProps
 * @property {Function} onUploadSuccess - Callback con la URL de la imagen cargada
 */

"use client";
import { CldUploadWidget } from "next-cloudinary";

function ImageEditUpload({ onUploadSuccess, folder = "zindo/BarbiniAutos" }) {
  return (
    <div>
      {/*** Widget de Cloudinary ***/}
      <CldUploadWidget
        uploadPreset="tspeblqq"
        options={{
          folder: folder,
          multiple: false,
          sources: ["local", "url", "camera"],
          maxFileSize: 0.5 * 1024 * 1024, // 0.5MB en bytes
          resource_type: "image",
        }}
        onSuccess={(result) => {
          // console.log(
          //   "✅ Imagen subida a Cloudinary:",
          //   result?.info?.secure_url,
          // );
          const url = result?.info?.secure_url || "";
          onUploadSuccess(url);
        }}
      >
        {({ open }) => {
          return (
            <button
              title="Cambiar imagen"
              onClick={() => open()}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-colors duration-200 w-full h-full flex items-center justify-center z-40 cursor-pointer p-3"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22a2 2 0 001.664.89H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          );
        }}
      </CldUploadWidget>
      {/*** Widget de Cloudinary ***/}
    </div>
  );
}

export default ImageEditUpload;
