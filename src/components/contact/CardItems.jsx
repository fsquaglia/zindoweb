function CardItems({ color = "#4b5563", icon = "Ico", onClick, title }) {
  return (
    <div
      className={`cursor-pointer size-14 sm:size-24 rounded-full hover:scale-105 transition-transform duration-300 ${""} flex justify-center items-center`}
      style={{
        background: `linear-gradient(to bottom, ${color}cc 0%, ${color} 70%, ${color}bb 100%)`,
        boxShadow: `0 8px 16px rgba(0,0,0,0.4), inset 0 4px 6px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.3)`,
      }}
      onClick={() => onClick && onClick(title)}
    >
      <p className="text-center text-gray-600 text-slate-200 text-2xl">
        {icon}
      </p>
    </div>
  );
}

export default CardItems;
