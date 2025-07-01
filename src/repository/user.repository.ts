import type { FormUser } from "../types";

export const addUser = async (
  params: FormUser
): Promise<{ message: string }> => {
  const response = await fetch("http://localhost:4321/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...params,
      id: crypto.randomUUID(),
      role: "seller",
    }),
  });
  if (response.status !== 200) {
    throw Error("Email or password invalid");
  }
  return await response.json();
};

export const signIn = async (params: FormUser) => {
  const response = await fetch("http://localhost:4321/api/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  if (response.status !== 200) {
    throw Error("Email or password invalid");
  }
  return response;
};

export const signOut = async () => {
  const response = await fetch("http://localhost:4321/api/signout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.status !== 200) {
    throw Error(response.statusText);
  }
  return response;
};
