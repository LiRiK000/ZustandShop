import { ContextMenu } from '@layout/Menu/MenuContext/MenuContext';
import { Game } from '@independent/Game/Game';
import { useUsersStore } from '@Store/useUserStore';

export const GameTemp = () => {
	const { users } = useUsersStore();
	const isLoggedIn = users.some((user) => user.isLoggedIn);
	return (
		<>
			<ContextMenu isAuthenticated={isLoggedIn} />
			<Game />
		</>
	);
};
