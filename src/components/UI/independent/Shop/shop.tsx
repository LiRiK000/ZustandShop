import { ShopItem } from '@simple/Item/ShopItem';
import { SimpleGrid } from '@chakra-ui/react';
import { useGameStore } from '@Store/useGameStore';

export const Shop = () => {
	const { games } = useGameStore();
	return (
		<SimpleGrid m='6' columns={[1, 2, 2, 3]} gap='10px'>
			{games.map((game) => (
				<ShopItem
					key={game.id}
					id={game.id}
					title={game.title}
					description={game.description}
					price={game.price}
					imageUrl={game.image}
				/>
			))}
		</SimpleGrid>
	);
};
