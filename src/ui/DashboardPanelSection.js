function DashboardPanelSection({
  title = "Título del panel",
  description = "Descripción breve del panel",
  children,
}) {
  return (
    <>
      <div className="w-full bg-slate-200 py-4">
        <h2 className="text-base sm:text-lg text-center">{title}</h2>
        <hr className="my-2 max-w-md mx-auto" />
        <p className="text-sm mb-4 max-w-2xl mx-auto text-center">
          {description}
        </p>
      </div>
      {children}
    </>
  );
}

export default DashboardPanelSection;
