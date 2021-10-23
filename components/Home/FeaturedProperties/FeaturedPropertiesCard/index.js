import { Image } from '@chakra-ui/image';
import { Flex, HStack, Stack, Text, VStack } from '@chakra-ui/layout';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { HiStar } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import { RiBuilding2Line } from 'react-icons/ri';
import { useState } from 'react';
import { Avatar, Divider } from '@chakra-ui/react';

function FeaturedPropertiesCard() {
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
				height='150px'
				background='white'
			/>
			<VStack
				alignItems='flex-start'
				spacing='2'
				padding='3'
				width='100%'
			>
				<Text fontSize='sm' fontWeight='bold'>
					Property Name
				</Text>
				<Flex
					display='flex'
					flexDir='row'
					width='100%'
					justifyContent='space-between'
					alignItems='center'
				>
					<Text
						fontSize='sm'
						fontWeight='semibold'
						textTransform='uppercase'
						maxWidth='50%'
						noOfLines='1'
					>
						Selling
					</Text>
					<Stack
						direction='row'
						flex='1'
						spacing='1'
						justifyContent='flex-end'
						alignItems='center'
					>
						<AiOutlineClockCircle />
						<Text fontSize='xs' fontWeight='bold'>
							Time
						</Text>
					</Stack>
				</Flex>
				<Flex
					display='flex'
					flexDir='row'
					width='100%'
					justifyContent='space-between'
					alignItems='center'
				>
					<Stack direction='row' spacing='1' alignItems='center'>
						<Text
							fontSize='lg'
							fontWeight='bold'
							textTransform='uppercase'
						>
							5000/sqft
						</Text>
					</Stack>
					<Stack direction='row' spacing='1' alignItems='center'>
						<RiBuilding2Line />
						<Text fontSize='xs' fontWeight='bold'>
							150 sqft
						</Text>
					</Stack>
				</Flex>
				<Flex
					display='flex'
					flexDir='row'
					width='100%'
					justifyContent='space-between'
					alignItems='center'
				>
					<Text
						fontSize='sm'
						fontWeight='semibold'
						textTransform='uppercase'
						maxWidth='50%'
						noOfLines='1'
					>
						Addressd fdkvk;l nfvhoe invflk nejvuhe mfnvjehr vnkejrh
					</Text>
					<Stack
						direction='row'
						flex='1'
						spacing='1'
						justifyContent='flex-end'
						alignItems='center'
					>
						<IoLocationOutline />
						<Text fontSize='xs' fontWeight='bold'>
							Location
						</Text>
					</Stack>
				</Flex>
			</VStack>
			<Divider />
			<Flex
				display='flex'
				paddingX='3'
				paddingBottom='2'
				justifyContent='space-between'
				alignItems='center'
			>
				<HStack>
					<Avatar size='xs' />
					<Text>Property Holder</Text>
				</HStack>
			</Flex>
		</Stack>
	);
}

export default FeaturedPropertiesCard;
