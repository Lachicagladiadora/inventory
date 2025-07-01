export const getProtected = async () => {
  const response = await fetch("http://localhost:4321/api/protected", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.status !== 200) {
    throw Error(response.statusText);
  }
  return response;
};
