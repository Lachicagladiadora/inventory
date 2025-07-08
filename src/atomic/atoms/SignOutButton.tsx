import { navigate } from "astro/virtual-modules/transitions-router.js";
import { signOut } from "../../repository/user.repository";

export const SignOutButton = () => {
  const onSignOut = async () => {
    try {
      const response = await signOut();
      await response.json();
      navigate("/signin");
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <button className="p-6 bg-blue-300" onClick={onSignOut}>
      SignOutButton
    </button>
  );
};
