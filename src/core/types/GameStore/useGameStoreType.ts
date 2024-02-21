import { Game } from '@MyTypes/GameStore/GameType';

export type useGameStoreType = {
	games: Game[];
	addGame: (game: Game) => void;
	deleteGame: (id: number) => void;
	deleteAll: () => void;
};
