import { Box, Button, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

import { FC } from 'react';
import { IShopItem } from '@MyTypes/ComponentsTypes/ShopItemType';
import { useCartStore } from '@Store/useCartStore';
import { useUsersStore } from '@Store/useUserStore';

export const ShopItem: FC<IShopItem> = ({ id, title, description, price }) => {
	const { addToCart } = useCartStore();
	const Item = {
		id: id,
		name: title,
		price: price,
		quantity: 1,
	};
	const { users } = useUsersStore();
	const isLoggedIn = users.some((user) => user.isLoggedIn);
	const navigate = useNavigate();
	const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (!isLoggedIn) {
			navigate('/login');
		}
		addToCart(Item);
	};

	return (
		<Box
			maxW='md'
			borderWidth='1px'
			borderRadius='lg'
			overflow='hidden'
			boxShadow='md'
		>
			<Link to={`/game/${id}`}>
				<Box p='6'>
					<Box display='flex' alignItems='baseline'>
						<Text fontWeight='semibold' fontSize='lg' mr='2'>
							{title}
						</Text>
						<Text color='gray.500' fontSize='sm'>
							${price}
						</Text>
					</Box>

					<Text
						mt='2'
						color='gray.600'
						maxW='100%'
						overflow='hidden'
						textOverflow='ellipsis'
						whiteSpace='nowrap'
					>
						{description}
					</Text>
				</Box>
			</Link>
			<Box w='80%' mx='auto'>
				<Box margin='4'>
					<Button mt='2' colorScheme='blue' w='100%' onClick={handleAddToCart}>
						Добавить в корзину
					</Button>
				</Box>
			</Box>
		</Box>
	);
};
