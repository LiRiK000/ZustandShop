import { ContextMenu } from '@layout/Menu/MenuContext/MenuContext';
import { useUsersStore } from '@Store/useUserStore';

export const ProfileTemp = () => {
	const { users } = useUsersStore();
	const isLoggedIn = users.some((user) => user.isLoggedIn);
	return (
		<>
			<ContextMenu isAuthenticated={isLoggedIn} />
		</>
	);
};
