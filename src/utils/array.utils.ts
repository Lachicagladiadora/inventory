import type { Color, Material, Size, ProductConfigData } from "../types";

export type GenerateProductConfigInput = {
  colors: Color[];
  materials: Material[];
  sizes: Size[];
};
export const generateProductConfig = ({
  colors,
  materials,
  sizes,
}: GenerateProductConfigInput): ProductConfigData[] => {
  const newConfig: ProductConfigData[] = [];

  colors.forEach((current) => {
    materials.forEach((cur) => {
      sizes.forEach((c) => {
        const newValue: ProductConfigData = {
          id: current.id + cur.id + c.id,
          colorId: current.id,
          materialId: cur.id,
          sizeId: c.id,
          price: "0",
          discount: "0",
        };
        newConfig.push(newValue);
      });
    });
  });

  return newConfig;
};
