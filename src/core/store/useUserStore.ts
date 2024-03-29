import type {} from '@redux-devtools/extension';

import { devtools, persist } from 'zustand/middleware';

import { create } from 'zustand';
import { useUserStoreType } from '@MyTypes/UserStore/useUserStoreType';

export const useUsersStore = create<useUserStoreType>()(
	devtools(
		persist(
			(set, get) => ({
				users: [],
				registrationUser: (email, username, password, id) => {
					const { users } = get();
					const userExists = users.some((user) => user.email === email);
					if (userExists) {
						return;
					}
					const newUser = {
						email,
						username,
						password,
						isAdmin: false,
						id,
						isLoggedIn: false,
					};
					set({
						users: [...users, newUser],
					});
				},
				// В файле useUserStore.ts

				loginUser: (
					email: string,
					password: string,
					onLoginSuccess: () => void,
				) => {
					const { users } = get();
					const user = users.find((user) => user.email === email);
					if (!user) {
						console.error('User not found');
						return;
					}
					if (user.isLoggedIn) {
						console.error('User is already logged in');
						return;
					}
					if (user.password === password) {
						const updatedUsers = [...users];
						const userIndex = updatedUsers.findIndex((u) => u.email === email);
						if (userIndex !== -1) {
							updatedUsers[userIndex] = {
								...updatedUsers[userIndex],
								isLoggedIn: true,
							};
							set({
								users: updatedUsers,
							});
							onLoginSuccess();
						}
					} else {
						console.error('Incorrect email or password');
					}
				},
				logoutUser: () => {
					const updatedUsers = [...get().users];
					const userIndex = updatedUsers.findIndex((u) => u.isLoggedIn);
					if (userIndex !== -1) {
						updatedUsers[userIndex] = {
							...updatedUsers[userIndex],
							isLoggedIn: false,
						};
						set({
							users: updatedUsers,
						});
					}
				},
				removeAllUsers: () => {
					set({
						users: [],
					});
				},
			}),
			{
				name: 'user-store',
			},
		),
	),
);
