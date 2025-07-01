import type { FormUser } from "../types";
import { IS_EMAIL } from "./regex.utils";

export const validateUser = (user: FormUser): boolean => {
  if (!IS_EMAIL.test(user.email)) {
    throw Error("Email invalid");
  }
  if (user.password.length !== 8) {
    throw Error("The password will have 8 characters");
  }
  return true;
};
