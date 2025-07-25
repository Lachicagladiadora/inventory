import { useEffect, useState } from "react";
import {
  type ProductConfigSchema,
  type ProductSchema,
  type ProductStockForm,
} from "../../types";
import { navigate } from "astro/virtual-modules/transitions-router.js";
import { addProductStock } from "../../repository/productStock.repository";
import { getProducts } from "../../repository/products.repository";
import { getProductConfigs } from "../../repository/productConfig.repository";
import { COLORS, MATERIALS, SIZES } from "../../constants";

export const CreateStockProduct = () => {
  const [products, setProducts] = useState<ProductSchema[]>([]);
  const [productConfigs, setProductConfigs] = useState<ProductConfigSchema[]>(
    []
  );

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
  const getConfigsByProduct = async () => {
    try {
      const productConfigsData = await getProductConfigs();
      console.log({ productConfigsData });
      const newConfig = productConfigsData.filter(
        (c) => c.productId === currentProduct.productId
      );
      setProductConfigs(newConfig);
    } catch (error) {
      console.error({ error });
    }
  };

  const getAllProducts = async () => {
    try {
      const productsData = await getProducts();
      setProducts(productsData);
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    getConfigsByProduct();
  }, [currentProduct]);

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log({
    products,
    productConfigs,
    currentProduct,
  });

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
          <select name="" id="" onChange={onChangeProduct}>
            {products.map((c) => (
              <option value={c.id} key={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </label>
        <label>
          Product config:{" "}
          {productConfigs.map((c) => (
            <select
              onChange={onChangeProductConfig}
              style={{
                height: "10px",
                width: "100px",
                background: `${
                  COLORS.find((cur) => cur.id === c.colorId)?.rgb ?? "#fff"
                }`,
                border: "solid 1px #999DA0",
              }}
            >
              <option value={c.id} key={c.id}>
                {COLORS.find((cur) => cur.id === c.colorId)?.label}
              </option>
            </select>
          ))}
          {productConfigs.map((c) => (
            <select onChange={onChangeProductConfig}>
              <option value={c.id} key={c.id}>
                {MATERIALS.find((cur) => cur.id === c.materialId)?.label}
              </option>
            </select>
          ))}
          {productConfigs.map((c) => (
            <select onChange={onChangeProductConfig}>
              <option value={c.id} key={c.id}>
                {SIZES.find((cur) => cur.id === c.sizeId)?.label}
              </option>
            </select>
          ))}
        </label>
        {/* <ProductConfig colors={colors} materials={materials} sizes={sizes} /> */}
        <button>Save</button>
      </form>
    </div>
  );
};
