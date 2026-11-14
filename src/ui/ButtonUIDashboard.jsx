// Botón UI para el Dashboard
function ButtonUIDashboard({ handleClick, loading, icon: Icon, title = "" }) {
  return (
    <button
      onClick={handleClick}
      className={`flex flex-row bg-blue-500 rounded-full hover:bg-blue-600 shadow-lg transition-colors duration-200 text-white p-3 md:rounded-md md:px-4 md:py-2 ${
        !loading && "cursor-pointer"
      }`}
      disabled={loading}
      title={title}
    >
      <Icon size={20} className="w-5 h-5" />
      <span className="hidden md:inline md:ml-2">Guardar</span>
    </button>
  );
}

export default ButtonUIDashboard;
