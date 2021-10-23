import { Image } from '@chakra-ui/image';
import { Center, Text, VStack } from '@chakra-ui/layout';
import { BiBuildingHouse } from 'react-icons/bi';

function PropertytypeCard() {
	return (
		<Center
			width='100%'
			rounded='lg'
			maxWidth='2xs'
			overflow='hidden'
			shadow='xl'
			padding='10'
			display='flex'
			_hover={{ cursor: 'pointer', background: '#BEDDFF50' }}
			flexDirection='column'
		>
			<VStack>
				<BiBuildingHouse size='75px' />
				<Text fontSize='xl' fontWeight='bold'>
					House
				</Text>
				<Text fontSize='md' fontWeight='semibold'>
					30 Properties
				</Text>
			</VStack>
		</Center>
	);
}

export default PropertytypeCard;
