import { Blog } from '@features/Blog/Blog';
import { ContextMenu } from '@layout/Menu/MenuContext/MenuContext';
import { useUsersStore } from '@Store/useUserStore';

export const MainTemp = () => {
	const { users } = useUsersStore();
	const isLoggedIn = users.some((user) => user.isLoggedIn);

	return (
		<>
			<ContextMenu isAuthenticated={isLoggedIn} />
			<Blog />
		</>
	);
};
