import type { Category } from "./types";

/**
 * Product categories. Add a new category by adding an object here —
 * then reference its `id` from a product in products.ts.
 */
export const categories: Category[] = [
  {
    id: "maquinas-herramientas",
    name: "Máquinas y herramientas",
    description: "Máquinas de afeitar, cortadoras y equipos profesionales.",
  },
  {
    id: "repuestos",
    name: "Repuestos",
    description: "Piezas y repuestos para máquinas de afeitar.",
  },
  {
    id: "accesorios-barberia",
    name: "Accesorios de barbería",
    description: "Accesorios para organizar y equipar tu espacio de trabajo.",
  },
  {
    id: "higiene-desechables",
    name: "Higiene y desechables",
    description: "Productos para la bioseguridad y correcto desecho de insumos.",
  },
  {
    id: "cuidado-personal",
    name: "Cuidado personal",
    description: "Productos de cuidado facial y personal.",
  },
];
