import { Flex, HStack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import PropertyTypeCard from './PropertyTypeCard';

export default function PropertyType() {
	return (
		<VStack
			width='100%'
			bg='white'
			padding='10'
			spacing='4'
			alignItems='self-start'
		>
			<Text fontSize='3xl' fontWeight='bold'>
				Property Type
			</Text>
			<HStack justifyContent='space-evenly' spacing='5' width='100%'>
				<PropertyTypeCard />
				<PropertyTypeCard />
				<PropertyTypeCard />
				<PropertyTypeCard />
			</HStack>
		</VStack>
	);
}
