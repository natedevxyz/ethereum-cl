import React from 'react';
import NextLink from 'next/link';
import {
	Flex,
	Image,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
	Text,
	Link,
} from '@chakra-ui/react';
import '@fontsource/roboto/100.css';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

export default function Container({ children }) {
	return (
		<Flex minH={'100vh'} flexDirection="column">
			<Flex
				py={2}
				px={5}
				justifyContent="space-between"
				alignItems="center"
				h={'8vh'}
				position="sticky"
				zIndex={10}
				top={0}
				bg="white"
				boxShadow="xs"
			>
				<Link
					as={NextLink}
					href="/"
					_focus={{ 'text-decoration': 'none' }}
					_hover={{ 'text-decoration': 'none' }}
				>
					<Flex alignItems="center">
						<Image src="/logo.png" boxSize={'2rem'} mr={1} />
						<Text fontFamily="Roboto" fontSize="4xl" fontWeight="100">
							Ξthereum.cl
						</Text>
					</Flex>
				</Link>
				<Menu>
					{({ isOpen }) => (
						<>
							<MenuButton
								isActive={isOpen}
								as={IconButton}
								icon={
									isOpen ? (
										<CloseIcon boxSize={4} color="black" />
									) : (
										<HamburgerIcon boxSize={6} color="black" />
									)
								}
								pt={1}
								colorScheme="white"
							/>
							<MenuList>
								<MenuItem justifyContent="end">Artículos</MenuItem>
								<MenuItem justifyContent="end">Comunidad</MenuItem>
								<MenuItem justifyContent="end">Conocimiento</MenuItem>
								<MenuItem justifyContent="end">Desarrolladores</MenuItem>
							</MenuList>
						</>
					)}
				</Menu>
			</Flex>
			{children}
		</Flex>
	);
}
