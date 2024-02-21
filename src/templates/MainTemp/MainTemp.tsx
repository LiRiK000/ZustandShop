import { ContextMenu } from '@layout/Menu/MenuContext/MenuContext';
import { Shop } from '@independent/Shop/shop';
import { useUsersStore } from '@Store/useUserStore';

export const MainTemp = () => {
	const { users } = useUsersStore();
	const isLoggedIn = users.some((user) => user.isLoggedIn);

	return (
		<>
			<ContextMenu isAuthenticated={isLoggedIn} />
			<Shop />
		</>
	);
};
