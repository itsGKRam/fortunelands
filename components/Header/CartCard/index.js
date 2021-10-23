import { Image } from '@chakra-ui/image';
import { Divider, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';

import { MdDelete } from 'react-icons/md';
export default function CartCard(props) {
	return (
		<Stack width='100%'>
			<Flex
				color='#5C7282'
				_hover={{
					textDecor: 'none',
					color: 'black',
				}}
				rounded='lg'
				padding='2'
			>
				<HStack spacing='2' width='100%'>
					<Image
						src={props.url}
						alt='name'
						objectFit='contain'
						width='10vw'
						rounded='lg'
					/>
					<Flex flex='1'>
						<VStack
							spacing='2'
							alignItems='flex-start'
							color='black'
						>
							<Text fontSize='lg' fontWeight='bold'>
								{props.title}
							</Text>
							<Text fontSize='sm' fontWeight='bold'>
								{props.address}
							</Text>
						</VStack>
					</Flex>
					<Flex
						alignItems='center'
						justifyContent='center'
						color='black'
						_hover={{
							color: 'red',
							cursor: 'pointer',
						}}
					>
						<MdDelete size='25px' />
					</Flex>
				</HStack>
			</Flex>
			<Divider
				margin='10px'
				border='1px'
				borderColor='#C8CBCD'
				bg='#C8CBCD'
			/>
		</Stack>
	);
}
