import { Box, Button, Text } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';

import { useCartStore } from '@Store/useCartStore';
import { useGameStore } from '@Store/useGameStore';
import { useUsersStore } from '@Store/useUserStore';

export const Game = () => {
	const { id } = useParams<{ id: string }>();
	const { games } = useGameStore();
	const { users } = useUsersStore();
	const { addToCart } = useCartStore();

	const gameId = id ? parseInt(id) : undefined;

	const game = games.find((game) => game.id === gameId);
	if (!game) return <div>Game not found</div>;

	const isLoggedIn = users.some((user) => user.isLoggedIn);
	const newGame = {
		id: game.id,
		name: game.title,
		price: game.price,
		quantity: 1,
	};

	return (
		<Box
			maxW='800px'
			mx='auto'
			mt='20'
			bgColor='#eee'
			p='8'
			borderRadius='20px'
		>
			<Text fontSize='2xl' fontWeight='semibold' mb='4'>
				{game.title}
			</Text>
			<Text fontSize='lg' mb='4'>
				Price: ${game.price}
			</Text>
			<Text fontSize='lg' mb='4' maxW='800px'>
				{game.description}
			</Text>
			<Box display='flex' flexDirection='column' gap='4'>
				{isLoggedIn && (
					<Button
						colorScheme='green'
						width='100%'
						onClick={() => {
							addToCart(newGame);
						}}
					>
						Add to Cart
					</Button>
				)}
				<Link to='/shop'>
					<Button colorScheme='blue' width='100%'>
						Back to Shop
					</Button>
				</Link>
			</Box>
		</Box>
	);
};
