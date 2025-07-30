import "../../styles/global.css";
import React from "react";

import { useEffect, useState } from "react";
import {
  type Color,
  type Material,
  type ProductConfigSchema,
  type ProductSchema,
  type Size,
} from "../../types";
import { navigate } from "astro/virtual-modules/transitions-router.js";
import { addProductStock } from "../../repository/productStock.repository";
import { getProducts } from "../../repository/products.repository";
import { getProductConfigs } from "../../repository/productConfig.repository";
import { COLORS, MATERIALS, SIZES } from "../../constants";

export const CreateStockProduct = () => {
  const [products, setProducts] = useState<ProductSchema[]>([]);
  const [configs, setConfigs] = useState<ProductConfigSchema[]>([]);

  const [colors, setColors] = useState<Color[]>(COLORS);
  const [materials, setMaterials] = useState<Material[]>(MATERIALS);
  const [sizes, setSizes] = useState<Size[]>(SIZES);

  const [currentProduct, setCurrentProduct] = useState<ProductSchema>();
  const [currentConfig, setCurrentConfig] = useState<ProductConfigSchema>({
    id: "3fabbf8f-8acf-4a9c-96ff-1a99605269ed",
    productId: "3ecd9571-4014-4106-8621-c4e6642f9a9e",
    colorId: "aa92c1f3-c0ed-41fc-baeb-323478ac0ac6",
    materialId: "b1ebd01e-bf48-422c-b48e-644ba4bc3f1a",
    sizeId: "0b10e812-e0dc-4b10-94e6-289f11a17b48",
    price: "54.90",
    discount: "0.00",
    createAt: "Mon Jul 28 2025 19:15:33 GMT-0500 (Peru Standard Time)",
    updatedAt: "Mon Jul 28 2025 19:15:33 GMT-0500 (Peru Standard Time)",
    createdBy: "admin",
    updatedBy: "admin",
  });

  const onCreateProductStock = async (e: any) => {
    try {
      e.preventDefault();
      if (!currentProduct) return;
      await addProductStock({
        productId: currentProduct.id,
        location: [
          { id: "91fa1595-463d-49d0-9f42-a622d33d7363", label: "Main local" },
        ],
        productConfigId: currentConfig.id,
        state: "good",
      });
      navigate("/product");
    } catch (error) {
      console.error({ error });
    }
  };

  const getAllProducts = async () => {
    try {
      const productsData = await getProducts();
      console.log({ productsData });
      setProducts(productsData);
    } catch (error) {
      console.error({ error });
    }
  };

  const getConfigsByProduct = async () => {
    try {
      const productConfigsData = await getProductConfigs();
      const configsByProducts = productConfigsData.filter(
        (c) => c.productId === currentProduct?.id
      );
      setConfigs(configsByProducts);
      setCurrentConfig(configsByProducts[-1]);
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    if (configs.length === 0) return;
    const colorsByConfig = configs.map((c) =>
      COLORS.find((cur) => cur.id === c.colorId)
    ) as Color[];
    setColors([...new Set(colorsByConfig)]);
  }, [configs]);

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    setCurrentProduct(products[-1]);
  }, [products]);

  useEffect(() => {
    getConfigsByProduct();
  }, [currentProduct]);

  useEffect(() => {
    const newValue = configs.at(-1);
    if (!newValue) return;
    setCurrentConfig(newValue);
  }, [configs]);

  useEffect(() => {
    if (!currentConfig) return;
    const oldConfig = configs.find((c) => c.id === currentConfig.id);

    if (!oldConfig) return;
    if (oldConfig.colorId !== currentConfig.colorId) {
      const materialsByConfig = configs.map((c) =>
        MATERIALS.find((cur) => cur.id === c.materialId)
      ) as Material[];
      setMaterials([...new Set(materialsByConfig)]);

      const sizesByConfig = configs.map((c) =>
        SIZES.find((cur) => cur.id === c.sizeId)
      ) as Size[];
      setSizes([...new Set(sizesByConfig)]);
    }
    if (oldConfig.materialId !== currentConfig.materialId) {
      const colorsByConfig = configs.map((c) =>
        COLORS.find((cur) => cur.id === c.colorId)
      ) as Color[];
      setColors([...new Set(colorsByConfig)]);
      const sizesByConfig = configs.map((c) =>
        SIZES.find((cur) => cur.id === c.sizeId)
      ) as Size[];
      setSizes([...new Set(sizesByConfig)]);
    }
    if (oldConfig.sizeId !== currentConfig.sizeId) {
      const materialsByConfig = configs.map((c) =>
        MATERIALS.find((cur) => cur.id === c.materialId)
      ) as Material[];
      setMaterials([...new Set(materialsByConfig)]);
      const colorsByConfig = configs.map((c) =>
        COLORS.find((cur) => cur.id === c.colorId)
      ) as Color[];
      setColors([...new Set(colorsByConfig)]);
    }
  }, [currentConfig]);

  return (
    <div>
      <h2>Update stock</h2>
      <form
        onSubmit={(e) => onCreateProductStock(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          gap: "20px",
        }}
      >
        <label className="flex gap-2">
          Product:
          <select
            onChange={(e) =>
              setCurrentProduct(products.find((c) => c.id === e.target.value))
            }
          >
            {products.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </label>
        <div className="flex gap-3 items-center justify-center">
          <div
            className="h-6 w-6 rounded-full border"
            style={{
              background: `${
                COLORS.find((c) => c.id === currentConfig?.colorId)?.rgb
              }`,
            }}
          ></div>
          <label className="flex gap-2">
            Color:
            <select
              onChange={(e) =>
                setCurrentConfig((p) => ({ ...p, colorId: e.target.value }))
              }
            >
              {colors.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex gap-2">
            Material:
            <select
              onChange={(e) =>
                setCurrentConfig((p) => ({ ...p, materialId: e.target.value }))
              }
            >
              {materials.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex gap-2">
            Size:
            <select
              onChange={(e) =>
                setCurrentConfig((p) => ({ ...p, sizeId: e.target.value }))
              }
            >
              {sizes.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};
