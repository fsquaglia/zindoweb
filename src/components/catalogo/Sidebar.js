"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Sidebar({ categories = [], selectedCategories = [] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function toggleCategory(slug) {
    const nextCategories = new Set(selectedCategories);

    if (nextCategories.has(slug)) {
      nextCategories.delete(slug);
    } else {
      nextCategories.add(slug);
    }

    // Conserva otros filtros futuros, como precio, marca o año.
    const params = new URLSearchParams(searchParams.toString());

    // Reconstruye únicamente los parámetros de categoría.
    params.delete("categoria");

    nextCategories.forEach((category) => {
      params.append("categoria", category);
    });

    const query = params.toString();

    router.push(query ? `${pathname}?${query}` : pathname);
  }

  return (
    <aside className="flex flex-col gap-4 p-4 w-full border border-gray-300 rounded-md lg:w-1/4">
      <h2>Filtros</h2>
      <h2>Categorías</h2>

      {categories.map((category) => {
        const slug = category.categorySlug;

        return (
          <label key={category.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(slug)}
              onChange={() => toggleCategory(slug)}
            />
            {category.nameMenu}
          </label>
        );
      })}

      <hr className="my-4 border-gray-300" />
      <h2>Tipo</h2>

      {/* Botón para limpiar filtros */}
      <button
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={() => alert("Función de limpiar filtros aún no implementada")}
      >
        Limpiar filtros
      </button>
    </aside>
  );
}
