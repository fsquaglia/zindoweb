import Link from "next/link";

export default async function layout({ children }) {
  return (
    <div className="layout">
      <div className="sidebar">
        <Link href="/">Ir al inicio</Link>
      </div>
      <div className="">{children}</div>
    </div>
  );
}
