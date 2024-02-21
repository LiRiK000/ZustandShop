import { ContextMenu } from "@layout/Menu/MenuContext/MenuContext";
import FeatureForm from "@features/Form/Form";
import { useUsersStore } from "@Store/useUserStore";

export const RegTemp = () => {
  const { users } = useUsersStore();
  const isLoggedIn = users.some((user) => user.isLoggedIn);
  return (
    <>
      <ContextMenu isAuthenticated={isLoggedIn} />
      <FeatureForm isReg={true} />
    </>
  );
};