import { Flex, HStack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import DiscoverTopPlacesCard from './DiscoverTopPlacesCard';

export default function DiscoverTopPlaces() {
	return (
		<VStack
			width='100%'
			bg='white'
			padding='10'
			spacing='4'
			alignItems='self-start'
		>
			<Text fontSize='3xl' fontWeight='bold'>
				Discover Top Places
			</Text>
			<HStack justifyContent='flex-start' spacing='5' width='100%'>
				<DiscoverTopPlacesCard />
				<DiscoverTopPlacesCard />
				<DiscoverTopPlacesCard />
				<DiscoverTopPlacesCard />
			</HStack>
		</VStack>
	);
}
