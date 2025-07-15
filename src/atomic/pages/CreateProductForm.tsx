import { useEffect, useState } from "react";
import { navigate } from "astro:transitions/client";
import { BRANDS, CATEGORIES, COLORS, MATERIALS, SIZES } from "../../constants";
import type {
  Color,
  FormProduct,
  Material,
  ProductConfigData,
  Size,
} from "../../types";
import { addProduct } from "../../repository/product.repository";
import { RE_CHANGE_NUMBER } from "../../utils/regex.utils";
import { getCurrentDate } from "../../utils/date.utils";
import { ProductConfig } from "../molecules/ProductConfig";

type CreateProductFormProps = { userId: string };

export const CreateProductForm = ({ userId }: CreateProductFormProps) => {
  const [sizes, setSizes] = useState<Size[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [productConfigList, setProductConfigList] = useState<
    ProductConfigData[]
  >([]);
  const [product, setProduct] = useState<FormProduct>({
    // id: "022a6a51-0270-4be0-bda6-0a8dbf04129d",
    title: "Thunderbolt sneakers",
    description:
      "for fly for fly for fly for fly for fly for fly v vvfor flyvv for flyfor flyfor flyfor fly for flyfor flyfor fly",
    categoryId: "76a1d615-1b55-4332-afe7-ec5c635ff7ea",
    brand: "haven",
    genre: "female",
    imagePreview:
      "https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0407/users/c1fff615136a2fcf4b5e8fc23bc24acaf926e085/i-img1118x1200-16881753160owdym15.jpg",
  });

  // const createConfigs

  const onCreateProduct = async (e: any) => {
    try {
      e.preventDefault();
      // validateUser(user);
      await addProduct(product);
      // setUser(EMPTY_USER);
      navigate("/product");
    } catch (error) {
      console.error({ error });
    }
  };

  const onChangeSizeMultiple = (e: any) => {
    try {
      const values = e.target.selectedOptions;
      const selectedValues = [...values].map((c) => c.value);
      const newValues = SIZES.filter((cur) =>
        selectedValues.find((c) => c === cur.id)
      );
      setSizes(newValues);
    } catch (error) {
      console.error({ error });
    }
  };

  const onChangeColorMultiple = (e: any) => {
    try {
      const values = e.target.selectedOptions;
      const selectedValues = [...values].map((c) => c.value);
      const newValues = COLORS.filter((cur) =>
        selectedValues.find((c) => c === cur.id)
      );
      setColors(newValues);
    } catch (error) {
      console.error({ error });
    }
  };

  const onChangeMaterialMultiple = (e: any) => {
    try {
      const values = e.target.selectedOptions;
      const selectedValues = [...values].map((c) => c.value);
      const newValues = MATERIALS.filter((cur) =>
        selectedValues.find((c) => c === cur.id)
      );
      setMaterials(newValues);
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <form
      onSubmit={(e) => onCreateProduct(e)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        gap: "20px",
      }}
    >
      <label>
        Title:{" "}
        <input
          type="title"
          value={product.title}
          onChange={(e) => setProduct((p) => ({ ...p, title: e.target.value }))}
        />
      </label>
      <label>
        Description:{" "}
        <textarea
          value={product.description}
          onChange={(e) =>
            setProduct((p) => ({ ...p, description: e.target.value }))
          }
        />
      </label>
      <label>
        Category:{" "}
        <select name="" id="">
          {CATEGORIES.map((c) => (
            <option value={c.id} key={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Brands:{" "}
        <select name="" id="">
          {BRANDS.map((c) => (
            <option value={c.id} key={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Genre:{" "}
        <input
          type="genre"
          value={product.genre}
          onChange={(e) => setProduct((p) => ({ ...p, genre: e.target.value }))}
        />
      </label>
      <label>
        URL Image:{" "}
        <input
          type="imagePreview"
          value={product.imagePreview}
          onChange={(e) =>
            setProduct((p) => ({ ...p, imagePreview: e.target.value }))
          }
        />
      </label>
      <label>
        Size:{" "}
        <select name="" onChange={onChangeSizeMultiple} multiple>
          {SIZES.map((c) => (
            <option value={c.id} key={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Color:{" "}
        <select name="" onChange={onChangeColorMultiple} multiple>
          {COLORS.map((c) => (
            <option value={c.id} key={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Material:{" "}
        <select name="" id="" onChange={onChangeMaterialMultiple} multiple>
          {MATERIALS.map((c) => (
            <option value={c.id} key={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
      <ProductConfig colors={colors} materials={materials} sizes={sizes} />
      <button>Save</button>
    </form>
  );
};
