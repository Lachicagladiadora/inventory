import { React, useEffect, useState } from "react";
import type { ProductSchema } from "../../types";
import { Product } from "../molecules/Product";
import { getProducts } from "../../repository/products.repository";

export const Products = () => {
  const [productList, setProductList] = useState<
    ProductSchema[] | "Loading" | null
  >();

  const onGetProducts = async () => {
    try {
      const data = await getProducts();
      setProductList(data);
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    onGetProducts();
  }, []);
  return (
    <>
      <a href="/" class="bg-pink-600">
        create new product or new stock
      </a>
      {!productList && <p>You don't have access</p>}
      {productList === "Loading" && <div>{productList}</div>}
      {productList && productList !== "Loading" && productList.length > 0 && (
        <div className="flex gap-3 flex-wrap">
          {productList.map((c) => (
            <Product data={c} key={c.id} />
          ))}
        </div>
      )}
    </>
  );
};
