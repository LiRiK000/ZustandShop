import { ContextMenu } from '@layout/Menu/MenuContext/MenuContext';
import FeatureForm from '@features/Form/Form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsersStore } from '@Store/useUserStore';

export const RegTemp = () => {
	const { users } = useUsersStore();
	const isLoggedIn = users.some((user) => user.isLoggedIn);
	const navigate = useNavigate();

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/profile');
		}
	}, [isLoggedIn]);

	return (
		<>
			<ContextMenu isAuthenticated={isLoggedIn} />
			<FeatureForm isReg={true} />
		</>
	);
};
