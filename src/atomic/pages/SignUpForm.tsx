import { useState } from "react";
import { navigate } from "astro:transitions/client";
import { EMPTY_USER } from "../../constants";
import { addUser } from "../../repository/user.repository";
import { validateUser } from "../../utils/validateUser.utils";
import type { FormUser } from "../../types";

export const SignUpForm = () => {
  const [newUser, setNewUser] = useState<FormUser>(EMPTY_USER);
  // const [newUser, setNewUser] = useState<FormUser>({
  //   email: "pu@gmail.com",
  //   password: "asdfghjk",
  // });

  const onCreateNewUser = async (e: any) => {
    try {
      e.preventDefault();
      validateUser(newUser);
      await addUser(newUser);
      setNewUser(EMPTY_USER);
      navigate("/signin");
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <form
      onSubmit={(e) => onCreateNewUser(e)}
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
          value={newUser.email}
          onChange={(e) => setNewUser((p) => ({ ...p, email: e.target.value }))}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="text"
          value={newUser.password}
          onChange={(e) =>
            setNewUser((p) => ({ ...p, password: e.target.value }))
          }
        />
      </label>
      <button>Create account</button>
    </form>
  );
};
