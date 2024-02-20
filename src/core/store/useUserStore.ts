import type {} from "@redux-devtools/extension";

import { devtools, persist } from "zustand/middleware";

import { create } from "zustand";
import { useUserStoreType } from "@MyTypes/UserStore/useUserStoreType";

export const useUsersStore = create<useUserStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        users: [],
        registrationUser: (email, username, password, id) => {
          const { users } = get();
          const userExists = users.some((user) => user.id === id);
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
        loginUser: (email: string, password: string) => {
          const user = get().users.find((user) => user.email === email);
          if (user && user.password === password) {
            const updatedUsers = [...get().users];
            const userIndex = updatedUsers.findIndex((u) => u.email === email);
            if (userIndex !== -1) {
              updatedUsers[userIndex] = {
                ...updatedUsers[userIndex],
                isLoggedIn: true,
              };
              set({ users: updatedUsers });
            }
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
            set({ users: updatedUsers });
          }
        },
      }),
      {
        name: "user-store",
      }
    )
  )
);
