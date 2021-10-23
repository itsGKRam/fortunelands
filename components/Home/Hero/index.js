import React from 'react';
import { Flex, Text, Center, Stack, VStack, HStack } from '@chakra-ui/layout';
import Image from 'next/image';
import { BsBuilding } from 'react-icons/bs';
import LP_Image1 from '../../../assets/LP_Image1.png';
import { Button } from '@chakra-ui/button';

export default function Home() {
	return (
		<Flex width='100%' height='100vh'>
			<Flex direction='row' width='100%' display='flex' overflow='hidden'>
				<Center flex='1' width='100%'>
					<VStack
						width='60%'
						padding='3'
						spacing='3'
						rounded='lg'
						alignItems='self-start'
						fontSize='lg'
						fontWeight='semibold'
					>
						<Text fontSize='5xl' fontWeight='bold'>
							Find the Greatest places to live
						</Text>
						<Text>Find the Greatest places to live</Text>
						<Button fontWeight='bold'>Get Property</Button>
						<HStack>
							<BsBuilding size='25px' />
							<Text>100+ Properties</Text>
						</HStack>
					</VStack>
				</Center>
				<Flex
					flex='1'
					width='100%'
					justifyContent='center'
					alignItems='center'
					overflow='hidden'
				>
					<Image
						src={LP_Image1}
						alt='FL_Image1'
						quality={100}
						width='600'
						height='800'
						objectPosition='50% 100%'
						objectFit=' cover'
					/>
				</Flex>
			</Flex>
		</Flex>
	);
}
