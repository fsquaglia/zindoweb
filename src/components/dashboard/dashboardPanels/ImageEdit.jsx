import Image from "next/image";
import ImageEditUpload from "./ImageEditUpload";

function ImageEdit({
  urlImage = null,
  titleImage = "Imagen",
  onChangeImage = () => {},
  imageCircle = false,
}) {
  // Función para manejar el cambio de imagen desde el componente hijo
  const handleChangeImage = (newImageUrl) => {
    onChangeImage(newImageUrl);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="text-md font-medium text-gray-800">{titleImage}</h2>

      <div className="relative w-full max-w-2xl">
        {!urlImage ? (
          <div className="bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg p-12 flex items-center justify-center min-h-96">
            <p className="text-gray-500 text-center">
              No hay imagen disponible
            </p>
          </div>
        ) : (
          <>
            <Image
              src={urlImage}
              alt={titleImage}
              className={
                imageCircle
                  ? "w-full h-[400px] rounded-full shadow-md object-cover"
                  : "w-full h-[400px] rounded-lg shadow-md object-cover"
              }
              width={600}
              height={400}
              priority
            />
            <div className="absolute bottom-4 right-4  flex items-center justify-center w-10 h-10 z-20">
              <ImageEditUpload
                onUploadSuccess={handleChangeImage}
                folder="zindo/BarbiniAutos"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ImageEdit;
