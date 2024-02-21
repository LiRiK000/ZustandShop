import { Game } from '@MyTypes/GameStore/GameType';
import axios from 'axios';
import { useGameStore } from '@Store/useGameStore';

export const Blog = () => {
	const { games, addGame } = useGameStore();

	const isGameExist = (id: number) => games.some((game) => game.id === id);

	axios
		.get('https://zippy-seahorse-2b0f43.netlify.app/db.json')
		.then((response) => {
			const data = response.data;

			data.forEach((gameData: Game, index: number) => {
				const { title, description, price, image } = gameData;
				const id = index;

				if (!isGameExist(id)) {
					addGame({ id, title, description, price, image });
				}
			});
		})
		.catch((error) => {
			console.error('Ошибка при получении данных:', error);
		});

	return null;
};
