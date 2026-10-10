import Link from "next/link";
import DivGroup from "./DivGroup";

function CategoryMenu({
  textMenu = [],
  classNameAdditional = "",
  classNameText = "",
  scrolled = null,
}) {
  return (
    <DivGroup classNameAdditional={classNameAdditional} scrolled={scrolled}>
      {textMenu.map((item) => {
        const categorySlug = item.categorySlug?.trim();

        return categorySlug ? (
          <Link
            key={item.id}
            href={`/catalogo?categoria=${encodeURIComponent(categorySlug)}`}
            className={classNameText}
          >
            {item.nameMenu}
          </Link>
        ) : (
          <span
            key={item.id}
            className={`${classNameText} cursor-not-allowed opacity-50`}
            title="Esta categoría todavía no tiene una ruta configurada"
          >
            {item.nameMenu}
          </span>
        );
      })}
    </DivGroup>
  );
}

export default CategoryMenu;
