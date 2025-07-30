import { useState } from "react";
import { getProtected } from "../../repository/protected.repository";
import { navigate } from "astro/virtual-modules/transitions-router.js";

export const Protected = () => {
  const [protectedData, setProtectedData] = useState(
    "Press button for access to content"
  );

  const getProtectedData = async () => {
    try {
      const res = await getProtected();
      const response = await res.json();
      setProtectedData(response.message);
    } catch (error) {
      console.error({ error });
      navigate("/signin");
    }
  };

  return (
    <div>
      {protectedData}
      <button
        onClick={async () => await getProtectedData()}
        className="bg-emerald-600"
      >
        get protected contend
      </button>
    </div>
  );
};
