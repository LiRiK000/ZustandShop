import { ContextMenu } from "@layout/Menu/MenuContext/MenuContext";
import { useUsersStore } from "@Store/useUserStore";

export const MainTemp = () => {
  const { users } = useUsersStore();
  console.log(users);
  return <ContextMenu isAuthenticated={true} />;
};
