import SmoothScrollLink from "@/utils/SmoothScrollLink";
import DivGroup from "./DivGroup";
import { FaLocationDot } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { IoMdSpeedometer } from "react-icons/io";

function CommerceMenu({
  iconMenu = [],
  classNameAdditional = "",
  classNameText = "",
  scrolled = null,
}) {
  const iconMap = {
    FaLocationDot,
    GrContact,
    IoMdSpeedometer,
  };

  return (
    <DivGroup classNameAdditional={classNameAdditional} scrolled={scrolled}>
      {iconMenu.length > 0 &&
        iconMenu.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <SmoothScrollLink href={item.href || "#"} key={index}>
              <div
                className="flex flex-row items-center gap-1"
                style={{ display: item.show ? "flex" : "none" }}
              >
                {Icon && <Icon />}
                <span className={classNameText}>{item.nameMenu}</span>
              </div>
            </SmoothScrollLink>
          );
        })}
    </DivGroup>
  );
}

export default CommerceMenu;
