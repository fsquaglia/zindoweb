"use client";
import { useState } from "react";
import { TbDatabaseImport, TbDatabaseLeak } from "react-icons/tb";
import {
  dataAboutUs,
  dataHeroMain,
  dataFeatures,
  dataLogosMarcas,
  dataHistory,
  dataTextCarouselLogos,
  dataTeamMembers,
  dataTeamTextTitle,
  dataLegalCommerce,
  dataImageCommerce,
  dataWeb,
  dataFooter,
  dataContact,
  dataCategoriesInitialData,
  dataMapCommerceSRCIframe,
  commerceMenuInitialData,
  catalogInitialData,
} from "@/utils/SettingInitialData";
import { IoMdClose } from "react-icons/io";
import DashboardPanelSection from "@/ui/DashboardPanelSection";
import ButtonUIDashboard from "@/ui/ButtonUIDashboard";
import { menuDefinition } from "@/utils/SettingInitialData";

const { manageBDD } = menuDefinition;
const { titlePanel, descriptionPanel } = manageBDD;

function ManageBDD() {
  const [loading, setLoading] = useState(false);
  const [loadingCatalog, setLoadingCatalog] = useState(false);
  const [status, setStatus] = useState("");
  const [statusCatalog, setStatusCatalog] = useState("");

  const handleClickSetNodo = async () => {
    setLoading(true);
    setStatus("Escribiendo todos los nodos de la Base de datos...");

    const nodosData = [
      { nodo: "dataAboutUs", data: { ...dataAboutUs } },
      { nodo: "dataHeroMain", data: { ...dataHeroMain } },
      { nodo: "dataFeatures", data: { ...dataFeatures } },
      { nodo: "dataLogosMarcas", data: { ...dataLogosMarcas } },
      { nodo: "dataHistory", data: { ...dataHistory } },
      { nodo: "dataTextCarouselLogos", data: { ...dataTextCarouselLogos } },
      { nodo: "dataTeamMembers", data: { ...dataTeamMembers } },
      { nodo: "dataTeamTextTitle", data: { ...dataTeamTextTitle } },
      { nodo: "dataLegalCommerce", data: { ...dataLegalCommerce } },
      { nodo: "dataImageCommerce", data: { ...dataImageCommerce } },
      { nodo: "dataWeb", data: { ...dataWeb } },
      { nodo: "dataFooter", data: { ...dataFooter } },
      { nodo: "dataContact", data: { ...dataContact } },
      {
        nodo: "dataCategoriesInitialData",
        data: { ...dataCategoriesInitialData },
      },
      {
        nodo: "dataMapCommerceSRCIframe",
        data: { ...dataMapCommerceSRCIframe },
      },
      { nodo: "commerceMenuInitialData", data: { ...commerceMenuInitialData } },
    ];

    try {
      const promises = nodosData.map((nodeConfig) =>
        fetch("/api/realtime/setNode", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nodeConfig),
        }).then(async (response) => {
          const result = await response.json();
          if (!response.ok) {
            throw new Error(`Error en ${nodeConfig.nodo}: ${result.error}`);
          }
          return result;
        }),
      );

      await Promise.all(promises);
      setStatus("✓ Todos los datos se escribieron correctamente");
    } catch (error) {
      console.error("Error:", error);
      setStatus(`✗ Error en ManageBDD.jsx: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClickSetCatalogo = async () => {
    setLoadingCatalog(true);
    setStatusCatalog(
      "Escribiendo datos de prueba del catálogo de productos...",
    );
    try {
      const response = await fetch("/api/firestore/addDoc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [...catalogInitialData],
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(
          result.error || "Error al crear artículos del catálogo.",
        );
      }
      setStatusCatalog("✓ Datos de prueba del catálogo creados correctamente");
    } catch (error) {
      console.error("Error:", error);
      setStatusCatalog(`✗ Error en ManageBDD.jsx: ${error.message}`);
    } finally {
      setLoadingCatalog(false);
    }
  };

  return (
    <DashboardPanelSection title={titlePanel} description={descriptionPanel}>
      <div className="flex flex-col gap-4 items-center my-4">
        <div className="flex flex-col gap-4 items-center justify-between w-full max-w-md sm:flex-row sm:items-center">
          <span className="flex-1 text-center sm:text-left">
            Inicializar Landing Page:{" "}
          </span>
          <ButtonUIDashboard
            handleClick={handleClickSetNodo}
            loading={loading}
            icon={TbDatabaseImport}
          />
        </div>
        {/* Estado */}
        {status && (
          <div
            className={`flex flex-row items-center justify-around p-4 rounded-lg w-full max-w-md text-center ${
              status.includes("✓")
                ? "bg-green-100 text-green-800"
                : status.includes("✗")
                  ? "bg-red-100 text-red-800"
                  : "bg-blue-100 text-blue-800"
            }`}
          >
            <div>
              {loading && <span className="animate-pulse">⏳ </span>}
              {status}
            </div>
            <button
              className="cursor-pointer"
              title="Close"
              onClick={() => setStatus("")}
            >
              <IoMdClose />
            </button>
          </div>
        )}
        {/* insertar una línea horizontal para separar el botón del estado */}
        <hr className="w-full max-w-md border-t border-gray-300" />

        {/* Botón para inicializar datos de prueba de productos en el catálogo en Firestore */}
        <div className="flex flex-col gap-4 items-center justify-between w-full max-w-md sm:flex-row sm:items-center">
          <span className="flex-1 text-center sm:text-left">
            Inicializar Catálogo de productos:{" "}
          </span>
          <ButtonUIDashboard
            handleClick={handleClickSetCatalogo}
            loading={loadingCatalog}
            icon={TbDatabaseLeak}
          />
        </div>
        {/* Estado cargando catálogo */}
        {statusCatalog && (
          <div
            className={`flex flex-row items-center justify-around p-4 rounded-lg w-full max-w-md text-center ${
              statusCatalog.includes("✓")
                ? "bg-green-100 text-green-800"
                : statusCatalog.includes("✗")
                  ? "bg-red-100 text-red-800"
                  : "bg-blue-100 text-blue-800"
            }`}
          >
            <div>
              {loadingCatalog && <span className="animate-pulse">⏳ </span>}
              {statusCatalog}
            </div>
            <button
              className="cursor-pointer"
              title="Close"
              onClick={() => setStatusCatalog("")}
            >
              <IoMdClose />
            </button>
          </div>
        )}
      </div>
    </DashboardPanelSection>
  );
}

export default ManageBDD;
