import { Image } from '@chakra-ui/image';
import { Flex, HStack, Stack, Text, VStack } from '@chakra-ui/layout';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { HiStar } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import { RiBuilding2Line } from 'react-icons/ri';
import { useState } from 'react';
import { Avatar, Divider } from '@chakra-ui/react';

export default function BestDealsCard() {
	return (
		<Stack
			width='100%'
			rounded='lg'
			maxWidth='2xs'
			overflow='hidden'
			shadow='xl'
			display='flex'
			_hover={{ cursor: 'pointer', background: '#BEDDFF50' }}
			flexDirection='column'
		>
			<Image
				src='https://i.ibb.co/t43PJd2/Sample.png'
				alt='EC_Image'
				objectFit='cover'
				height='50vh'
				background='white'
			/>

			<Divider />
			<Flex
				display='flex'
				paddingX='3'
				paddingBottom='2'
				justifyContent='space-between'
				alignItems='center'
			>
				<VStack spacing='1' alignItems='flex-start'>
					<Text fontSize='lg' fontWeight='bold'>
						3 bhk, Hyderabad
					</Text>
					<Text fontSize='xs' fontWeight='medium'>
						500sqft,Landmark
					</Text>
				</VStack>
			</Flex>
		</Stack>
	);
}
