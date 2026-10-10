export default function RearLights404() {
  return (
    <div className="flex flex-row gap-20 items-center justify-center h-48 bg-neutral-950">
      {/* Luz izquierda */}
      <LightContent>
        <LightGlow />
        <LightCircle />
      </LightContent>

      {/* Luz derecha */}
      <LightContent>
        <LightGlow />
        <LightCircle />
      </LightContent>
    </div>
  );
}

// Componente para el círculo de luz con animación de pulso
function LightCircle() {
  return (
    <div className="w-8 h-8 bg-red-600 rounded-full animate-pulse blur-xs" />
  );
}

function LightGlow() {
  return (
    <div className="absolute inset-0 bg-red-600/50 rounded-full blur-2xl animate-pulse" />
  );
}

function LightContent({ children }) {
  return (
    <div className="relative flex items-center justify-center w-24 h-24">
      {children}
    </div>
  );
}
