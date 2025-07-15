import { useEffect, useState } from "react";
import type { Color, Material, ProductConfigData, Size } from "../../types";
import {
  generateProductConfig,
  type GenerateProductConfigInput,
} from "../../utils/array.utils";
import { RE_CHANGE_NUMBER } from "../../utils/regex.utils";

type ProductConfigProps = GenerateProductConfigInput;
export const ProductConfig = ({
  colors,
  materials,
  sizes,
}: ProductConfigProps) => {
  const [productConfig, setProductConfig] = useState<ProductConfigData[]>([]);

  const onChangeMoney = (e: any) => {
    const newValue = e.target.value;
    if (!RE_CHANGE_NUMBER.test(newValue)) return;
    if (newValue.at(-1) === ".") {
      return;
    }
  };

  useEffect(() => {
    const newConfig = generateProductConfig({ colors, materials, sizes });
    console.log({ newConfig });
    setProductConfig(newConfig);
  }, [colors, materials, sizes]);
  console.log({ productConfig });
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3}>Properties</th>
          <th>Price</th>
          <th>Discount</th>
        </tr>
      </thead>
      <tbody>
        {productConfig.map((c) => {
          return (
            <tr key={c.colorId + c.materialId + c.sizeId}>
              <td className="">
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    background: `${
                      colors.find((cur) => cur.id === c.colorId)?.rgb ?? "#fff"
                    }`,
                    border: "solid 1px #999DA0",
                  }}
                ></div>
              </td>
              <td>
                <p>{materials.find((cur) => cur.id === c.materialId)?.label}</p>
              </td>
              <td>
                <p>{sizes.find((cur) => cur.id === c.sizeId)?.label}</p>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="0.00"
                  onChange={onChangeMoney}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="0.00"
                  onChange={onChangeMoney}
                />
              </td>
            </tr>
          );
        })}
        <tr></tr>
      </tbody>
    </table>
  );
};
