import { useState } from "react";
import { navigate } from "astro:transitions/client";
import { EMPTY_USER } from "../../constants";
import { signIn } from "../../repository/user.repository";
import type { FormProduct, FormUser } from "../../types";
import { validateUser } from "../../utils/validateUser.utils";

export const SignInForm = () => {
  // const [user, setUser] = useState<FormUser>(EMPTY_USER);
  const [user, setUser] = useState<FormProduct>({
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
      await signIn(user);
      // setUser(EMPTY_USER);
      navigate("/");
    } catch (error) {
      console.error({ error });
    }
  };

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
        Email:{" "}
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser((p) => ({ ...p, email: e.target.value }))}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="text"
          value={user.password}
          onChange={(e) => setUser((p) => ({ ...p, password: e.target.value }))}
        />
      </label>
      {/* <label>
        Confirm password: <input type="text" />
      </label> */}
      <button>Sign in</button>
    </form>
  );
};
