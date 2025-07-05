import type { ProductSchema } from "../../types";

type ProductProps = { data: ProductSchema };

export const Product = ({ data }: ProductProps) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <img src={data.imagePreview} alt="" />
    </div>
  );
};
