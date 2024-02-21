import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import {
	Box,
	Button,
	Flex,
	HStack,
	Heading,
	Spacer,
	Text,
} from '@chakra-ui/react';
import { FC, useState } from 'react';

import { Link } from 'react-router-dom';
import { useCartStore } from '@Store/useCartStore';

interface ContextMenuProps {
	isAuthenticated: boolean;
}

export const ContextMenu: FC<ContextMenuProps> = ({ isAuthenticated }) => {
	const { cartItems, increaseQuantity, decreaseQuantity } = useCartStore();
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleCart = () => {
		setIsCartOpen((prev) => !prev);
	};

	return (
		<Flex
			bg='purple.800'
			p='4'
			color='#EEE'
			alignItems='center'
			justifyContent='space-between'
			position='relative'
			zIndex='10'
			boxShadow='md'
		>
			<Box>
				<Link to='/'>
					<Heading as='h1' size='xl' fontWeight='semi' textDecoration='none'>
						Home
					</Heading>
				</Link>
			</Box>
			<Spacer />
			<Box>
				{isAuthenticated ? (
					<HStack p='4'>
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
								w='15vw'
								minW='200px'
							>
								{cartItems.length > 0 ? (
									<>
										{cartItems.map((item) => (
											<Flex
												key={item.id}
												alignItems='center'
												justify='space-between'
											>
												<Box mb='2'>
													<Text fontSize='lg' fontWeight='bold'>
														{item.name}
													</Text>
													<Text fontSize='md'>
														Price: ${item.price.toFixed(2)}
													</Text>
												</Box>
												<HStack spacing='4'>
													<Button
														onClick={() => decreaseQuantity(item.id)}
														colorScheme='red'
														size='sm'
													>
														-
													</Button>
													<Text fontSize='lg' fontWeight='bold'>
														{item.quantity}
													</Text>
													<Button
														onClick={() => increaseQuantity(item.id)}
														colorScheme='red'
														size='sm'
													>
														+
													</Button>
												</HStack>
											</Flex>
										))}
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
						<Link to='/profile'>
							<AiOutlineUser size={34} color='white' />
						</Link>
					</HStack>
				) : (
					<HStack p='4'>
						<Link to='/login'>
							<Heading
								as='h2'
								size='lg'
								fontWeight='semi'
								textDecoration='none'
								mr='4'
							>
								Войти
							</Heading>
						</Link>
						<Link to='/reg'>
							<Heading
								as='h2'
								size='lg'
								fontWeight='semi'
								textDecoration='none'
							>
								Регистрация
							</Heading>
						</Link>
					</HStack>
				)}
			</Box>
		</Flex>
	);
};
