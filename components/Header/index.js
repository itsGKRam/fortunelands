import { Flex } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { CgShoppingCart } from 'react-icons/cg';
import { Divider, Link, Stack, Text, HStack, VStack } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import CartCard from '../../components/Header/CartCard';
import Global from '../Global';

import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
} from '@chakra-ui/modal';

function Header() {
	const {
		isOpen: isOpenMenu,
		onOpen: onOpenMenu,
		onClose: onCloseMenu,
	} = useDisclosure();
	const {
		isOpen: isOpenCart,
		onOpen: onOpenCart,
		onClose: onCloseCart,
	} = useDisclosure();
	const global = Global();

	return (
		<Flex
			justifyContent={[
				'space-between',
				'space-between',
				'space-evenly',
				'space-evenly',
			]}
			padding='10px'
			paddingX={['15px', '20px', '25px', '50px']}
			color='black'
		>
			<Flex flex='1' alignItems='center' justifyContent='flex-start'>
				<Text fontSize='20px' fontWeight='bold'>
					{global.webName}
				</Text>
			</Flex>
			<HStack
				display={['none', 'none', 'flex', 'flex']}
				spacing='2'
				alignItems='center'
				justifyContent='flex-end'
			>
				<VStack
					spacing='0'
					alignItems='flex-end'
					justifyContent='center'
				>
					<Text fontWeight='bold'>Hello Guest</Text>
					<Text fontWeight='semibold'>Sign In</Text>
				</VStack>
				<Avatar
					onClick={onOpenCart}
					bg='white'
					_hover={{ cursor: 'pointer' }}
					icon={<CgShoppingCart size='25px' />}
				/>
			</HStack>
			<Flex
				display={['flex', 'flex', 'none', 'none']}
				flex='1'
				alignItems='center'
				justifyContent='flex-end'
			>
				<Button
					_hover={{ bg: '#94C8FF66', color: '#1684F8' }}
					rounded='lg'
					color='black'
					background='#F2F2F2'
				>
					<HStack>
						<Flex onClick={onOpenMenu}>
							<FiMenu size='25px' />
						</Flex>
						<Flex onClick={onOpenCart}>
							<CgShoppingCart size='25px' />
						</Flex>
					</HStack>
				</Button>
				<Drawer
					placement={'top'}
					onClose={onCloseMenu}
					isOpen={isOpenMenu}
				>
					<DrawerOverlay />
					<DrawerContent
						padding='10px'
						roundedBottomLeft='xl'
						roundedBottomRight='xl'
					>
						<Flex
							paddingRight={['15px', '20px', '25px', '50px']}
							justifyContent='space-between'
						>
							<Flex
								flex='1'
								alignItems='center'
								justifyContent='flex-start'
							>
								<Text fontSize='20px' fontWeight='bold'>
									FortuneLands
								</Text>
							</Flex>
							<Flex
								flex='1'
								alignItems='center'
								justifyContent='flex-end'
							>
								<Button
									_hover={{
										bg: '#94C8FF66',
										color: '#1684F8',
									}}
									colorScheme='blue'
									rounded='100%'
									width='40px'
									height='40px'
									background={'#1684F8'}
									onClick={onCloseMenu}
								>
									<Flex>
										<IoClose size='25px' />
									</Flex>
								</Button>
							</Flex>
						</Flex>
						<DrawerBody
							w='100%'
							textAlign='center'
							fontSize='20px'
							fontWeight='bold'
						>
							<Stack>
								<Text
									color='#5C7282'
									_hover={{
										textDecor: 'none',
										color: 'black',
									}}
								>
									Hello Guest
								</Text>
								<Divider
									margin='10px'
									border='1px'
									borderColor='#C8CBCD'
									bg='#C8CBCD'
								/>
								<Text
									color='#5C7282'
									_hover={{
										textDecor: 'none',
										color: 'black',
									}}
								>
									Sign In
								</Text>
								<Divider
									margin='10px'
									border='1px'
									borderColor='#C8CBCD'
									bg='#C8CBCD'
								/>
								<Text
									color='#5C7282'
									_hover={{
										textDecor: 'none',
										color: 'black',
									}}
								>
									Home
								</Text>
							</Stack>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
				<Drawer
					size='md'
					placement={'right'}
					onClose={onCloseCart}
					isOpen={isOpenCart}
				>
					<DrawerOverlay />
					<DrawerContent padding='10px' rounded='xl' margin='10px'>
						<Flex
							paddingX={['15px', '20px', '25px', '50px']}
							justifyContent='space-between'
							alignItems='center'
							width='100%'
						>
							<Text fontSize='xl' fontWeight='bold'>
								My Cart
							</Text>
							<Button
								_hover={{
									bg: '#94C8FF66',
									color: '#1684F8',
								}}
								colorScheme='blue'
								rounded='100%'
								width='40px'
								height='40px'
								background={'#1684F8'}
								onClick={onCloseCart}
							>
								<Flex>
									<IoClose size='25px' />
								</Flex>
							</Button>
						</Flex>
						<DrawerBody
							w='100%'
							textAlign='center'
							fontSize='20px'
							fontWeight='bold'
						>
							<VStack width='100%' paddingY='3'>
								<CartCard
									url='https://i.ibb.co/t43PJd2/Sample.png'
									title='Sample Title 1'
									address='Sample Address 1'
								/>
								<CartCard
									url='https://i.ibb.co/t43PJd2/Sample.png'
									title='Sample Title 2'
									address='Sample Address 2'
								/>
							</VStack>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</Flex>
		</Flex>
	);
}

export default Header;
