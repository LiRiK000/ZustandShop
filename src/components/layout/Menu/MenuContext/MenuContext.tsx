import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import {
	Box,
	Button,
	Flex,
	Heading,
	Spacer,
	Stack,
	Text,
} from '@chakra-ui/react';
import { FC, useState } from 'react';

import { Link } from 'react-router-dom';
import { useCartStore } from '@Store/useCartStore';

interface ContextMenuProps {
	isAuthenticated: boolean;
}

export const ContextMenu: FC<ContextMenuProps> = ({ isAuthenticated }) => {
	const { cartItems, increaseQuantity, decreaseQuantity, deleteAll } =
		useCartStore();
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleCart = () => {
		setIsCartOpen((prev) => !prev);
	};

	return (
		<Flex
			bg='purple.800'
			p='4'
			color='white'
			alignItems='center'
			justifyContent='space-between'
			position='relative'
			boxShadow='md'
			zIndex='10'
		>
			<Box m='4'>
				<Link to='/'>
					<Heading as='h1' size='xl' fontWeight='semi'>
						Home
					</Heading>
				</Link>
			</Box>
			<Spacer />
			<Box m='4'>
				{isAuthenticated ? (
					<Stack direction={['column', 'column', 'row']} alignItems='center'>
						<Box
							cursor='pointer'
							display='inline-flex'
							alignItems='center'
							onClick={toggleCart}
						>
							<AiOutlineShoppingCart size={34} />
							<Text ml='1' fontSize='lg'>
								{cartItems.reduce(
									(totalQuantity, item) => totalQuantity + item.quantity,
									0,
								)}
							</Text>
						</Box>
						<Link to='/profile'>
							<AiOutlineUser size={34} />
						</Link>
						{isCartOpen && (
							<Box
								position='absolute'
								top='100%'
								right='0'
								zIndex='999'
								bgColor='gray.800'
								boxShadow='lg'
								borderRadius='md'
								p='4'
								minW='200px'
								w={['100%', '100%', '100%', '25vw']}
							>
								<Heading as='h2' size='md' mb='4'>
									Корзина
								</Heading>
								{cartItems.length > 0 ? (
									<>
										{cartItems.map((item) => (
											<Flex
												key={item.id}
												alignItems='center'
												justifyContent='space-between'
												p='4'
											>
												<Box>
													<Text fontSize='lg' fontWeight='bold'>
														{item.name}
													</Text>
													<Text fontSize='md'>
														Price: ${item.price.toFixed(2)}
													</Text>
												</Box>
												<Flex alignItems='center' m='4'>
													<Button
														onClick={() => decreaseQuantity(item.id)}
														colorScheme='green'
														size='sm'
													>
														-
													</Button>
													<Text fontSize='lg' fontWeight='bold' mx='2'>
														{item.quantity}
													</Text>
													<Button
														onClick={() => increaseQuantity(item.id)}
														colorScheme='green'
														size='sm'
													>
														+
													</Button>
												</Flex>
											</Flex>
										))}
										<Box mt='2' w='100%'>
											<Button
												onClick={deleteAll}
												colorScheme='red'
												size='md'
												w='100%'
											>
												Очистить корзину
											</Button>
										</Box>
										<Box mt='2' w='100%'>
											<Link to='/cart'>
												<Button colorScheme='purple' size='md' w='100%'>
													Оформить заказ
												</Button>
											</Link>
										</Box>
									</>
								) : (
									<Text fontSize='md' color='gray.400'>
										Корзина пуста
									</Text>
								)}
							</Box>
						)}
					</Stack>
				) : (
					<Stack direction={['column', 'column', 'row']}>
						<Link to='/login'>
							<Heading as='h2' size='lg' fontWeight='semi' mr='4'>
								Войти
							</Heading>
						</Link>
						<Link to='/reg'>
							<Heading as='h2' size='lg' fontWeight='semi'>
								Регистрация
							</Heading>
						</Link>
					</Stack>
				)}
			</Box>
		</Flex>
	);
};
