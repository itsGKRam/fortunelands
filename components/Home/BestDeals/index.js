import { Flex, HStack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import BestDealsCard from './BestDealsCard';

export default function BestDeals() {
	return (
		<VStack
			width='100%'
			bg='white'
			padding='10'
			spacing='4'
			alignItems='self-start'
		>
			<Text fontSize='3xl' fontWeight='bold'>
				Best Deals
			</Text>
			<HStack justifyContent='start' spacing='5' width='100%'>
				<BestDealsCard />
				<BestDealsCard />
				<BestDealsCard />
			</HStack>
		</VStack>
	);
}
