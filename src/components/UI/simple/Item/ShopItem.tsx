import { Box, Button, Image, Text } from '@chakra-ui/react';

import { FC } from 'react';
import { IShopItem } from '@MyTypes/ComponentsTypes/ShopItemType';

export const ShopItem: FC<IShopItem> = ({
	title,
	description,
	price,
	imageUrl,
}) => {
	return (
		<Box
			maxW='md'
			borderWidth='1px'
			borderRadius='lg'
			overflow='hidden'
			boxShadow='md'
		>
			{imageUrl && <Image src={imageUrl} alt={title} />}
			<Box p='6'>
				<Box display='flex' alignItems='baseline'>
					<Text fontWeight='semibold' fontSize='lg' mr='2'>
						{title}
					</Text>
					<Text color='gray.500' fontSize='sm'>
						${price}
					</Text>
				</Box>

				<Text mt='2' color='gray.600'>
					{description}
				</Text>

				<Button mt='2' colorScheme='blue'>
					Добавить в корзину
				</Button>
			</Box>
		</Box>
	);
};
