import { Flex, Stack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import Global from '../Global';

export default function index(props) {
	const global = Global();

	return (
		<Flex padding='10' width='100%' bg='#9d9d9d'>
			<Stack
				alignItems='flex-start'
				direction='row'
				justifyContent='space-evenly'
				width='100%'
			>
				<VStack flex='1' spacing='1' alignItems='flex-start'>
					<Text fontSize='2xl' fontWeight='bold'>
						{global.webName}
					</Text>
					<Text fontSize='sm' fontWeight='semibold'>
						Place Name
					</Text>
				</VStack>
				<VStack flex='1' spacing='1' alignItems='flex-start'>
					<Text fontSize='2xl' fontWeight='bold'>
						Quick Links
					</Text>
					<Text fontSize='sm' fontWeight='semibold'>
						Link 1
					</Text>
					<Text fontSize='sm' fontWeight='semibold'>
						Link 1
					</Text>
					<Text fontSize='sm' fontWeight='semibold'>
						Link 1
					</Text>
					<Text fontSize='sm' fontWeight='semibold'>
						Link 1
					</Text>
					<Text fontSize='sm' fontWeight='semibold'>
						Link 1
					</Text>
					<Text fontSize='sm' fontWeight='semibold'>
						Link 1
					</Text>
				</VStack>
				<VStack flex='1' spacing='1' alignItems='flex-start'>
					<Text fontSize='2xl' fontWeight='bold'>
						Get in Touch
					</Text>
				</VStack>
			</Stack>
		</Flex>
	);
}
