import { useEffect, useState } from "react";
import type { ProductConfigData } from "../../types";
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

  type onChangeMoneyInput = {
    e: any;
    id: string;
  };

  const onChangePrice = ({ e, id }: onChangeMoneyInput) => {
    const newValue = e.target.value;
    if (!RE_CHANGE_NUMBER.test(newValue)) return;
    // if (newValue.at(-1) === ".") {
    //   return;
    // }
    setProductConfig((p) => {
      const updatedList = p.map((c) => {
        if (c.id !== id) return c;
        return { ...c, price: newValue };
      });
      return updatedList;
    });
  };

  const onChangeDiscount = ({ e, id }: onChangeMoneyInput) => {
    const newValue = e.target.value;
    if (!RE_CHANGE_NUMBER.test(newValue)) return;
    // if (newValue.at(-1) === ".") {
    //   return;
    // }
    setProductConfig((p) => {
      const updatedList = p.map((c) => {
        if (c.id !== id) return c;
        return { ...c, discount: newValue };
      });
      return updatedList;
    });
  };

  useEffect(() => {
    const newConfig = generateProductConfig({ colors, materials, sizes });
    console.log({ newConfig });
    setProductConfig(newConfig);
  }, [colors, materials, sizes]);

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
            <tr key={c.id}>
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
                  onChange={(e) =>
                    onChangePrice({
                      e: e,
                      id: c.id,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="0.00"
                  onChange={(e) =>
                    onChangeDiscount({
                      e: e,
                      id: c.id,
                    })
                  }
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
