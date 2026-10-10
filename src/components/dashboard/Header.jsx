import SessionComponent from "../navbar/SessionComponent";
import CommerceLogo from "../commerceData/CommerceLogo";

function Header() {
  return (
    <div className="flex flex-row items-center justify-between w-full bg-slate-700 h-full py-4 px-6">
      <CommerceLogo mode="dashboard" />
      <SessionComponent prefixForName="Hola" />
    </div>
  );
}

export default Header;
