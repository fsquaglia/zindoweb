import Image from "next/image";
import { dataWeb } from "../../utils/SettingInitialData";

export default function ImageColumn() {
  return (
    <div className="text-center w-3/5 mx-auto flex flex-col justify-center items-center">
      <Image
        src={dataWeb[0].urlLogo}
        alt={dataWeb[0].altLogo}
        width={100}
        height={100}
        className=""
      />
      <h2 className="text-lg font-semibold">{dataWeb[0].title}</h2>
      <p className="text-sm">{dataWeb[0].description}</p>
    </div>
  );
}
