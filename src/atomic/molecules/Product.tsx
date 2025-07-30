import "../../styles/global.css";
import React, { useEffect, useState } from "react";

import type { Color, ProductSchema } from "../../types";
import { COLORS } from "../../constants";
import { getProductConfigs } from "../../repository/productConfig.repository";

type ProductProps = { data: ProductSchema };

export const Product = ({ data }: ProductProps) => {
  const [colors, setColors] = useState<Color[]>([]);

  const getColorSinceProduct = async () => {
    const productConfigsData = await getProductConfigs();
    const productConfigs = productConfigsData.filter(
      (c) => c.productId === data.id
    );
    const colorsByConfigs = productConfigs.map((c) =>
      COLORS.find((cur) => cur.id === c.colorId)
    ) as Color[];
    setColors([...new Set(colorsByConfigs)]);
    // return colorsByConfigs;
  };

  useEffect(() => {
    getColorSinceProduct();
  }, []);
  console.log({ colors });

  return (
    <div className="p-4 border rounded-xl">
      <h1>{data.title}</h1>
      <div className="flex gap-2">
        {colors.map((c) => (
          <div
            key={c.id}
            className="size-6 rounded-full border"
            style={{ background: `${c.rgb}` }}
          ></div>
        ))}
      </div>
      <p>{data.description}</p>
      <img
        style={{ height: "100px", width: "100px" }}
        src={data.imagePreview}
        alt=""
      />
    </div>
  );
};
