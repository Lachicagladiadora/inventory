import { navigate } from "astro/virtual-modules/transitions-router.js";
import React from "react";

export const CreateStockProductButton = () => {
  return (
    <button
      className="p-6 bg-pink-300"
      onClick={() => navigate("/product/stock")}
    >
      Create Stock Product
    </button>
  );
};
