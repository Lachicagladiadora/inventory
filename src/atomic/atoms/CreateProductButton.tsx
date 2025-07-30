import { navigate } from "astro/virtual-modules/transitions-router.js";

export const CreateProductButton = () => {
  return (
    <button
      className="p-6 bg-amber-200"
      onClick={() => navigate("/product/create")}
    >
      Create Product
    </button>
  );
};
