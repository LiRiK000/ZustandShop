import { Game } from '@MyTypes/GameStore/GameType';
import axios from 'axios';
import { useEffect } from 'react';
import { useGameStore } from '@Store/useGameStore';

export const GameRequest = () => {
	const { games, addGame } = useGameStore();

	const isGameExist = (id: number) => games.some((game) => game.id === id);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://zippy-seahorse-2b0f43.netlify.app/db.json',
				);
				const data = response.data;

				data.forEach((gameData: Game, index: number) => {
					const { title, description, price, image } = gameData;
					const id = index;

					if (!isGameExist(id)) {
						addGame({ id, title, description, price, image });
					}
				});
			} catch (error) {
				console.error('Ошибка при получении данных:', error);
			}
		};

		fetchData();
	}, []);

	return null;
};
