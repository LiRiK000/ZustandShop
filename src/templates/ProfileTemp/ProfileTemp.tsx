import { ContextMenu } from '@layout/Menu/MenuContext/MenuContext';
import { Profile } from '@independent/UserProfile/UserProfile';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsersStore } from '@Store/useUserStore';

export const ProfileTemp = () => {
	const { users } = useUsersStore();
	const isLoggedIn = users.some((user) => user.isLoggedIn);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoggedIn) {
			navigate('/');
		}
	}, [isLoggedIn]);

	return (
		<>
			<ContextMenu isAuthenticated={isLoggedIn} />
			<Profile />
		</>
	);
};
