import { ShopItem } from '@simple/Item/ShopItem';
import { SimpleGrid } from '@chakra-ui/react';

export const Shop = () => {
	return (
		<SimpleGrid m='6' columns={[1, 2, 2, 3]} gap='10px'>
			<ShopItem title='test' description='test' price={23} imageUrl='' />
			<ShopItem title='test' description='test' price={23} imageUrl='' />
			<ShopItem title='test' description='test' price={23} imageUrl='' />
			<ShopItem title='test' description='test' price={23} imageUrl='' />
			<ShopItem title='test' description='test' price={23} imageUrl='' />
			<ShopItem title='test' description='test' price={23} imageUrl='' />
			<ShopItem title='test' description='test' price={23} imageUrl='' />
			<ShopItem title='test' description='test' price={23} imageUrl='' />
			<ShopItem title='test' description='test' price={23} imageUrl='' />
			<ShopItem title='test' description='test' price={23} imageUrl='' />
		</SimpleGrid>
	);
};
