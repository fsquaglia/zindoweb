import { GiThink } from "react-icons/gi";

function ErrorThinkHuman({ errorData = null, componentName = null }) {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8 text-center">
      <GiThink size={40} />
      <p>Ha ocurrido un error.</p>
      {errorData && <p>{errorData}</p>}
      {componentName && (
        <p className="text-sm font-medium text-gray-700 font-mono">
          Componente: {componentName}
        </p>
      )}
      <p>
        Intenta recargar la página. Si el error persiste, contacta al
        administrador del sistema.
      </p>
    </div>
  );
}

export default ErrorThinkHuman;
