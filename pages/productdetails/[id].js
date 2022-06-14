import {
	Box,
	Center,
	Container,
	Flex,
	HStack,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/layout';
import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Image } from '@chakra-ui/image';
import Head from 'next/head';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

export default function ProductDetails() {
	const router = useRouter();
	SwiperCore.use([Pagination, Navigation]);
	const { id } = router.query;
	return (
		<Flex flexDirection='column'>
			<Head>
				<title>Product : {id}</title>
			</Head>
			<Header />
			<Container maxW='container.xl'>
				<VStack>
					<Text fontWeight='bold' fontSize='xl'>
						Product Details
					</Text>
					<VStack width='100%'>
						<Stack
							direction='row'
							alignItems='flex-start'
							width='100%'
							height='250px'
						>
							<Swiper
								navigation={true}
								loop={true}
								// slidesPerView={1}
								// spaceBetween={30}
								style={{
									width: '100%',
									height: '100%',
									flex: '1',
									'--swiper-navigation-color': '#000',
									'--swiper-pagination-color': '#fff',
								}}
								pagination={{
									clickable: true,
								}}
							>
								<SwiperSlide>
									<Image
										alt={id}
										src='https://i.ibb.co/t43PJd2/Sample.png'
										width='100%'
										height='100%'
										objectFit='contain'
									/>
								</SwiperSlide>
								<SwiperSlide>
									<Image
										alt={id}
										src='https://i.ibb.co/t43PJd2/Sample.png'
										width='100%'
										height='100%'
										objectFit='contain'
									/>
								</SwiperSlide>
								<SwiperSlide>
									<Image
										alt={id}
										src='https://i.ibb.co/t43PJd2/Sample.png'
										width='100%'
										height='100%'
										objectFit='contain'
									/>
								</SwiperSlide>
								<SwiperSlide>
									<Image
										alt={id}
										src='https://i.ibb.co/t43PJd2/Sample.png'
										width='100%'
										height='100%'
										objectFit='contain'
									/>
								</SwiperSlide>
								<SwiperSlide>
									<Image
										alt={id}
										src='https://i.ibb.co/t43PJd2/Sample.png'
										width='100%'
										height='100%'
										objectFit='contain'
									/>
								</SwiperSlide>
								<SwiperSlide>
									<Image
										alt={id}
										src='https://i.ibb.co/t43PJd2/Sample.png'
										width='100%'
										height='100%'
										objectFit='contain'
									/>
								</SwiperSlide>
							</Swiper>
							<VStack flex='1' alignItems='flex-start'>
								<HStack>
									<Text>Name :</Text>
									<Text>Product Name</Text>
								</HStack>
								<HStack>
									<Text>Location :</Text>
									<Text>Product Location</Text>
								</HStack>
								<HStack>
									<Text>Area :</Text>
									<Text>Product Area</Text>
								</HStack>
								<HStack>
									<Text>Date :</Text>
									<Text>Product Date</Text>
								</HStack>
							</VStack>
						</Stack>
						<VStack alignItems='flex-start' width='100%'>
							<Text>Description</Text>
							<Text>Description</Text>
						</VStack>
					</VStack>
				</VStack>
			</Container>
			<Footer />
		</Flex>
	);
}
