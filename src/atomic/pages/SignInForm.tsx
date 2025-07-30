import { useState } from "react";
import { navigate } from "astro:transitions/client";
import { EMPTY_USER } from "../../constants";
import { signIn } from "../../repository/user.repository";
import type { FormUser } from "../../types";
import { validateUser } from "../../utils/validateUser.utils";

export const SignInForm = () => {
  // const [user, setUser] = useState<FormUser>(EMPTY_USER);
  const [user, setUser] = useState<FormUser>({
    email: "pu@gmail.com",
    password: "asdfghjk",
  });

  const onSignIn = async (e: any) => {
    try {
      e.preventDefault();
      if(!validateUser(user)) return
      await signIn(user);
      setUser(EMPTY_USER);
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
