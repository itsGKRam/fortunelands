import React from 'react';
import { Flex } from '@chakra-ui/layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Home/Hero';
import FeaturedProperties from '../../components/Home/FeaturedProperties';
import PropertyType from '../../components/Home/PropertyType';
import DiscoverTopPlaces from '../../components/Home/DiscoverTopPlaces';
import BestDeals from '../../components/Home/BestDeals';

export default function Home() {
	return (
		<Flex flexDirection='column' height='100%' width='100%' bg='#cadce6'>
			<Header />
			<Hero />
			<FeaturedProperties />
			<PropertyType />
			<DiscoverTopPlaces />
			<BestDeals />
			<Footer />
		</Flex>
	);
}
