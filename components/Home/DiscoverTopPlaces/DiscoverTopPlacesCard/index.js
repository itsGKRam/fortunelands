import { Image } from '@chakra-ui/image';
import { Center, Text, HStack, VStack, Flex } from '@chakra-ui/layout';
import { BiBuildingHouse } from 'react-icons/bi';

export default function DiscoverTopPlacesCard() {
	return (
		<Flex
			rounded='lg'
			overflow='hidden'
			padding='3'
			display='flex'
			_hover={{ cursor: 'pointer', background: '#BEDDFF50' }}
		>
			<HStack>
				<Image
					src='https://i.ibb.co/t43PJd2/Sample.png'
					alt='Sample'
					objectFit='cover'
					rounded='lg'
					width='75px'
					height='75px'
				/>
				<VStack spacing='1' alignItems='flex-start'>
					<Text fontSize='lg' fontWeight='bold'>
						Place Name
					</Text>
					<Text fontSize='xs' fontWeight='medium'>
						30+ Properties
					</Text>
				</VStack>
			</HStack>
		</Flex>
	);
}
