import { devtools, persist } from 'zustand/middleware';

import { Game } from '@MyTypes/GameStore/GameType';
import { create } from 'zustand';
import { useGameStoreType } from '@MyTypes/GameStore/useGameStoreType';

export const useGameStore = create<useGameStoreType>()(
	devtools(
		persist(
			(set, get) => ({
				games: [],
				addGame: (game: Game) => {
					const ExistGame = get().games.find((g) => g.id === game.id);
					if (ExistGame) {
						console.log('Game already exist');
						return;
					} else {
						set((state) => ({
							games: [...state.games, game],
						}));
					}
				},
				deleteGame: (id: number) => {
					const { games } = get();
					set({
						games: games.filter((game) => game.id !== id),
					});
				},
				deleteAll: () => {
					set({
						games: [],
					});
				},
			}),
			{
				name: 'game-store',
			},
		),
	),
);
