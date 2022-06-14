import { Flex, HStack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import FeaturedPropertiesCard from './FeaturedPropertiesCard';

export default function FeaturedProperties() {
	return (
		<VStack
			width='100%'
			bg='white'
			padding='10'
			spacing='4'
			alignItems='self-start'
		>
			<Text fontSize='3xl' fontWeight='bold'>
				Featured Property
			</Text>
			<HStack justifyContent='start' spacing='5' width='100%'>
				<FeaturedPropertiesCard />
				<FeaturedPropertiesCard />
				<FeaturedPropertiesCard />
			</HStack>
		</VStack>
	);
}
