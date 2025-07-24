import React, { useEffect, useState } from "react";
import {
  type ProductConfigSchema,
  type ProductSchema,
  type ProductStockForm,
} from "../../types";
import { navigate } from "astro/virtual-modules/transitions-router.js";
import { addProductStock } from "../../repository/productStock.repository";
import { getProducts } from "../../repository/products.repository";

export const CreateStockProduct = () => {
  const [product, setProduct] = useState<ProductSchema[]>([]);
  const [productConfig, setProductConfig] = useState<ProductConfigSchema[]>([]);

  const [currentProduct, setCurrentProduct] = useState<ProductStockForm>({
    productId: "022a6a51-0270-4be0-bda6-0a8dbf04129d",
    productConfigId: "b8c87230-bf96-4c99-8619-11d10e818ba7",
    location: [],
    state: "good",
  });

  const onCreateProductStock = async (e: any) => {
    // request
    try {
      e.preventDefault();
      // const productId = crypto.randomUUID();
      // console.log({ productId });
      // await addProduct({ ...product, id: productId });

      // const newConfigs = generateProductConfig({
      //   colors,
      //   materials,
      //   sizes,
      // }).map((c) => ({ ...c, productId: productId }));
      await addProductStock(currentProduct);

      navigate("/product");
    } catch (error) {
      console.error({ error });
    }
  };

  const onChangeProduct = (e: any) => {
    try {
      const newValue = e.target.value;
      setCurrentProduct((p) => ({ ...p, productId: newValue }));
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
  // use effect para traer el product, product config, color,material,size
  // use effect para inicializar los estados

  const onGetProducts = async () => {
    try {
      const data = await getProducts();
      setProduct(data);
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    onGetProducts();
  }, []);

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
        <label>
          Product:{" "}
          <select name="" id="" onChange={onChangeProduct} multiple>
            {product.map((c) => (
              <option value={c.id} key={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </label>
        <label>
          Product config:{" "}
          <select name="" onChange={onChangeProductConfig} multiple>
            {productConfig.map((c) => (
              <option value={c.id} key={c.id}>
                {/* config en un componente */}
              </option>
            ))}
          </select>
        </label>
        {/* <ProductConfig colors={colors} materials={materials} sizes={sizes} /> */}
        <button>Save</button>
      </form>
    </div>
  );
};
