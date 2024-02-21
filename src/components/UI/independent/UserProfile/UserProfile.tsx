import { Avatar, Badge, Box, Button, Text } from '@chakra-ui/react';

import { useUsersStore } from '@Store/useUserStore';

export const Profile = () => {
	const currentUser = useUsersStore((state) =>
		state.users.find((u) => u.isLoggedIn === true),
	);

	const handleLogout = () => {
		// Реализация вашей функции logout
	};

	if (!currentUser) return null;

	return (
		<Box
			p='6'
			mt='10'
			mx='auto'
			maxW='lg'
			bg='white'
			borderWidth='1px'
			borderRadius='xl'
			boxShadow='lg'
		>
			<Box textAlign='center'>
				<Avatar as='picture' size='2xl' name={currentUser.username} />
				<Text mt={6} fontSize='3xl'>
					{currentUser.username}
				</Text>
				<Text mt={2} fontSize='lg' color='gray.500'>
					{currentUser.email}
				</Text>
				<Badge
					mt={4}
					fontSize='lg'
					variant='subtle'
					colorScheme={currentUser.isAdmin ? 'red' : 'green'}
				>
					{currentUser.isAdmin ? 'Администратор' : 'Пользователь'}
				</Badge>
				{currentUser.isLoggedIn && (
					<Text mt={4} fontSize='md' color='blue.500'>
						В сети
					</Text>
				)}
				<Button
					mt={6}
					colorScheme='red'
					onClick={handleLogout}
					p='30px 40px'
					fontSize='4xl'
				>
					Выйти
				</Button>
			</Box>
		</Box>
	);
};
