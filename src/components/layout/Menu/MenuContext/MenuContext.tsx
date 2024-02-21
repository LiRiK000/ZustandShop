import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import {
	Box,
	Button,
	Flex,
	HStack,
	Heading,
	Text,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react';

import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@Store/useCartStore';

interface ContextMenuProps {
	isAuthenticated: boolean;
}

export const ContextMenu: FC<ContextMenuProps> = ({ isAuthenticated }) => {
	const { cartItems, increaseQuantity, decreaseQuantity } = useCartStore();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const isMobile = useBreakpointValue({ base: true, sm: false });

	const toggleCart = () => {
		isOpen ? onClose() : onOpen();
	};

	const handleBurgerMenuClick = () => {
		onOpen();
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
			flexDirection={isMobile ? 'column' : 'row'}
		>
			<Box mb={isMobile ? '4' : '0'}>
				<Link to='/'>
					<Heading as='h1' size='xl' fontWeight='semi' textDecoration='none'>
						Home
					</Heading>
				</Link>
			</Box>
			{!isMobile && <Box flex='1' />}
			<Box>
				{isAuthenticated ? (
					<HStack spacing={isMobile ? '4' : '0'}>
						<Box
							cursor='pointer'
							display='inline-flex'
							alignItems='center'
							onClick={toggleCart}
						>
							<AiOutlineShoppingCart size={isMobile ? 28 : 34} />{' '}
							<Text ml='1' fontSize={isMobile ? 'md' : 'lg'}>
								{cartItems.reduce(
									(totalQuantity, item) => totalQuantity + item.quantity,
									0,
								)}
							</Text>
						</Box>
						{isMobile && (
							<Box
								position='absolute'
								top='0'
								right='0'
								onClick={handleBurgerMenuClick}
								cursor='pointer'
								p='4'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h16m-7 6h7'
									/>
								</svg>
							</Box>
						)}
						{isMobile && isOpen && (
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
													<Text
														fontSize={isMobile ? 'md' : 'lg'}
														fontWeight='bold'
													>
														{item.name}
													</Text>
													<Text fontSize={isMobile ? 'sm' : 'md'}>
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
													<Text
														fontSize={isMobile ? 'md' : 'lg'}
														fontWeight='bold'
													>
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
							<AiOutlineUser size={isMobile ? 28 : 34} color='white' />{' '}
						</Link>
					</HStack>
				) : (
					<HStack spacing={isMobile ? '4' : '0'}>
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
