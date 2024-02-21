import { User } from '@MyTypes/UserStore/UserType';

export type useUserStoreType = {
	users: User[];
	registrationUser: (
		email: string,
		username: string,
		password: string,
		id: number,
	) => void;
	loginUser: (email: string, password: string) => void;
	logoutUser: () => void;
	removeAllUsers: () => void;
};
