import { useState } from "react";
import { navigate } from "astro:transitions/client";
import { BRANDS, CATEGORIES, COLORS, MATERIALS, SIZES } from "../../constants";
import type { FormProduct, Size } from "../../types";
import { addProduct } from "../../repository/product.repository";

export const CreateProductForm = () => {
  const [sizes, setSizes] = useState<Size[]>(SIZES);
  // const [category, setCategory] = useState<CategoryData[]>(CATEGORIES);
  // const [category, setCategory] = useState<CategoryData[]>(CATEGORIES);
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

  const onSignIn = async (e: any) => {
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

  const onChangeSelectMultiple = (e: any) => {
    try {
      const newValues: HTMLCollection = e.target.selectedOptions.pop();
      setSizes((p) => {
        return [newValues.map((c) => sizes.find((cur) => cur.id === c.value))];
        // if (!p || p.length === 0) return SIZES.filter((c) => c.id === newValue);
        // if (p.some((c) => c.id === newValue)) return p;
        // return [...p, SIZES.filter((c) => c.id === newValue)[0]];
      });
    } catch (error) {
      console.error({ error });
    }
  };
  console.log({ sizes });

  return (
    <form
      onSubmit={(e) => onSignIn(e)}
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
        <select
          name=""
          onChange={(e) => {
            console.log("jiji");
            onChangeSelectMultiple(e);
            console.log({ e });
            console.log(e.target.value);
            setSizes(SIZES.filter((c) => c.id === e.target.value));
          }}
          multiple
        >
          {SIZES.map((c) => (
            <option
              value={c.id}
              key={c.id}
              // onChange={(e) => {
              //   onChangeSelectMultiple(e);
              // }}
            >
              {c.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Color:{" "}
        <select name="" id="" multiple>
          {COLORS.map((c) => (
            <option value={c.id} key={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Material:{" "}
        <select name="" id="" multiple>
          {MATERIALS.map((c) => (
            <option value={c.id} key={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      <table>
        <thead>
          <tr>
            <th colSpan={3}>Properties</th>
            <th>Price</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {COLORS.map((current) => {
            return MATERIALS.map((cur) => {
              return sizes.map((c) => {
                return (
                  <tr>
                    <td key={current.id}>
                      <input type="color" name="" id="" value={current.rgb} />
                    </td>
                    <td key={cur.id}>
                      <input type="text" name="" id="" value={cur.label} />
                    </td>
                    <td key={c.id}>
                      <input type="text" name="" id="" value={c.label} />
                    </td>
                    <td>
                      <input type="text" placeholder="0.00" />
                    </td>
                    <td>
                      <input type="text" placeholder="0.00" />
                    </td>
                  </tr>
                );
              });
            });
          })}
          <tr></tr>
        </tbody>
      </table>

      <button>Save</button>
    </form>
  );
};
