import { ContextMenu } from '@layout/Menu/MenuContext/MenuContext';
import { Profile } from '@independent/UserProfile/UserProfile';
import { useUsersStore } from '@Store/useUserStore';

export const ProfileTemp = () => {
	const { users } = useUsersStore();
	const isLoggedIn = users.some((user) => user.isLoggedIn);
	return (
		<>
			<ContextMenu isAuthenticated={isLoggedIn} />
			<Profile />
		</>
	);
};
