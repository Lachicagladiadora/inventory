import "../../styles/global.css";
import React from "react";

import { useEffect, useState } from "react";
import {
  type Color,
  type Material,
  type ProductConfigSchema,
  type ProductSchema,
  type ProductStockForm,
  type Size,
} from "../../types";
import { navigate } from "astro/virtual-modules/transitions-router.js";
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
      // await addProductStock(currentProduct);

      navigate("/product");
    } catch (error) {
      console.error({ error });
    }
  };

  const onChangeProduct = (e: any) => {
    try {
      const newValue = e.target.value;
      // setCurrentProduct((p) => ({ ...p, productId: newValue }));
    } catch (error) {
      console.error({ error });
    }
  };

  const onChangeProductConfig = (e: any) => {
    try {
      const newValue = e.target.value;
      setCurrentProduct((p) => ({ ...p, productConfigId: newValue }));
    } catch (error) {
      console.error({ error });
    }
  };

  const onChangeConfigByColor = (e: any) => {
    // change config by color selected, show color in the side
  };
  // use effect para traer el product, product config, color,material,size
  const onChangeConfigByMaterial = (e: any) => {};
  const onChangeConfigBySize = (e: any) => {};

  const getAllProducts = async () => {
    try {
      const productsData = await getProducts();
      console.log({ productsData });
      setProducts(productsData);
    } catch (error) {
      console.error({ error });
    }
  };

  const getConfigsByProduct = async (productId: string) => {
    try {
      const productConfigsData = await getProductConfigs();
      console.log({ productConfigsData });
      const configsByProducts = productConfigsData.filter(
        (c) => c.productId === productId
      );

      setConfigs(configsByProducts);
      console.log({ configsByProducts });
      setCurrentConfig(configsByProducts[0]);

      // const materialsByConfig = configsByProducts.map((c) =>
      //   MATERIALS.find((cur) => cur.id === c.colorId)
      // ) as Material[];

      // setMaterials([...new Set(materialsByConfig)]);
      // console.log({ colorsByConfig, colors });
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    if (configs.length === 0) {
      console.log("don't exist configs");
      return;
    }
    const colorsByConfig = configs.map((c) =>
      COLORS.find((cur) => cur.id === c.colorId)
    ) as Color[];
    console.log({ colorsByConfig });
    setColors([...new Set(colorsByConfig)]);
  }, [configs]);

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    getConfigsByProduct(currentProduct?.id);
  }, [currentProduct]);

  // console.log({
  //   products,
  //   config,
  //   productConfigs,
  //   currentProduct,
  // });

  useEffect(() => {
    // filtrar las configuraciones con cierto color
    if (!currentConfig) {
      console.log("don't exist currentConfig");
      return;
    }
    const oldConfig = configs.find((c) => c.id === currentConfig.id);
    console.log({ oldConfig });
    if (!oldConfig) return;
    if (oldConfig.colorId !== currentConfig.colorId) {
      console.log("jiji");
    }
    if (oldConfig.materialId !== currentConfig.materialId) {
      console.log("jojo");
    }
    if (oldConfig.sizeId !== currentConfig.sizeId) {
      console.log("jaja");
    }
    console.log("juju");
  }, [currentConfig]);
  console.log({ currentConfig });
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
          // onChange={(e) =>
          //   setCurrentConfig((p) => ({ ...p, colorId: e.target.value }))
          // }
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
