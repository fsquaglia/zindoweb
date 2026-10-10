"use client";
import { useState } from "react";
import InputDashboard from "@/ui/InputDashboard";
import ButtonUIDashboard from "@/ui/ButtonUIDashboard";
import { FaRegSave } from "react-icons/fa";
import ImageEdit from "./ImageEdit";
import { ToastContainer, toast } from "react-toastify";
import ErrorThinkHuman from "./ErrorThinkHuman";

export default function DashboardPanelBaseClient({
  initialData,
  nodeRealtimeName,
}) {
  const [data, setData] = useState(initialData); // array de objetos
  const [loading, setLoading] = useState(false);

  if (!initialData || initialData.length === 0)
    return (
      <ErrorThinkHuman
        errorData={"No se recibió información inicial"}
        componentName={"DashboardPanelBaseClient.jsx"}
      />
    );

  // Handler para cambiar un campo de texto en un item del array
  const handleInputChange = (itemIndex, key, newValue) => {
    // console.log(`Changing input for item ${itemIndex}, key ${key}:`, newValue);

    setData((prevData) =>
      prevData.map((item, i) =>
        i === itemIndex
          ? { ...item, [key]: { ...item[key], value: newValue } }
          : item,
      ),
    );
  };

  // Handler para cambiar la imagen de un item del array
  const handleImageChange = (itemIndex, newImageUrl) => {
    if (!newImageUrl) return;
    setData((prevData) =>
      prevData.map((item, i) =>
        i === itemIndex
          ? { ...item, urlImage: { ...item.urlImage, value: newImageUrl } }
          : item,
      ),
    );
  };

  // Handler para guardar los cambios en la base de datos
  const handleSaveChanges = async () => {
    console.log("Saving changes with data:", data);
    return;

    try {
      setLoading(true);

      // Validar que todos los campos visibles tengan valor
      for (const item of data) {
        for (const [key, field] of Object.entries(item)) {
          if (field.showInputEdit && !field.value) {
            toast.error(
              `El campo "${field.textInputEdit || "<Sin nombre>"}" no tiene valor. Por favor, completa todos los campos.`,
              {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              },
            );
            return;
          }
        }
      }

      const response = await fetch("/api/realtime/setNode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodo: nodeRealtimeName, data }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Error al guardar los cambios");
      }

      toast.success("✅ Cambios guardados correctamente", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
      toast.error(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center w-full py-4">
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <ObjectComponent
            key={index}
            data={item}
            index={index}
            onInputChange={(key, newValue) =>
              handleInputChange(index, key, newValue)
            }
            onImageChange={(newImageUrl) =>
              handleImageChange(index, newImageUrl)
            }
          />
        ))}

      <ToastContainer />

      <ButtonUIDashboard
        handleClick={handleSaveChanges}
        loading={loading}
        icon={FaRegSave}
        title="Guardar cambios"
      />

      <details className="mt-4 w-full max-w-3xl px-4">
        <summary className="cursor-pointer text-sm text-gray-600">
          Ver JSON completo
        </summary>
        <pre className="p-4 rounded overflow-x-auto mt-2 text-xs">
          {JSON.stringify(data, null, 2)}
        </pre>
      </details>
    </div>
  );
}

const ObjectComponent = ({ data, index, onInputChange, onImageChange }) => {
  const sortedEntries = data
    ? Object.entries(data)
        .filter(([_, field]) => field.showInputEdit)
        .sort((entryA, entryB) =>
          entryA[1].inputEditOrder > entryB[1].inputEditOrder ? 1 : -1,
        )
    : [];

  return (
    <div
      className={`flex flex-col items-center w-full p-4 ${
        index % 2 === 0 ? "" : "bg-gray-200"
      }`}
    >
      {data?.urlImage?.value && (
        <ImageEdit
          urlImage={data.urlImage.value}
          titleImage={data.urlImage.textInputEdit || "Imagen seleccionada"}
          onChangeImage={onImageChange}
          imageCircle={data.urlImage.imageCircle ?? false}
        />
      )}

      <div className="space-y-4 w-full my-8">
        {sortedEntries.map(([key, field]) => (
          <div key={key} className="flex flex-col w-full max-w-2xl mx-auto">
            <InputDashboard
              textLabel={field.textInputEdit || "Sin etiqueta"}
              value={field.value ?? ""}
              limitCharacters={field.limitCharacters}
              onChange={(newValue) => onInputChange(key, newValue)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
