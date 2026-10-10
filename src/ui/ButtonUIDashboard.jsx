// Botón UI para el Dashboard
function ButtonUIDashboard({ handleClick, loading, icon: Icon, title = "" }) {
  return (
    <button
      onClick={handleClick}
      className={`bg-blue-500 rounded-full hover:bg-blue-600 shadow-lg transition-colors duration-200 text-white p-3  ${
        !loading && "cursor-pointer"
      }`}
      disabled={loading}
      title={title}
    >
      <Icon size={20} className="w-5 h-5" />
    </button>
  );
}

export default ButtonUIDashboard;
