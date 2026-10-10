// Componente para agrupar los elementos del navbar
export default function DivGroup({ children, classNameAdditional, scrolled }) {
  return (
    <div
      className={`
    flex-col lg:flex-row items-center gap-4
    ${classNameAdditional ?? ""}
    ${
      scrolled
        ? "lg:text-slate-700"
        : "lg:text-slate-100 lg:drop-shadow-[0_0_3px_black]"
    }
  `}
    >
      {children}
    </div>
  );
}
