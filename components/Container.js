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
					_focus={{ textDecoration: 'none' }}
					_hover={{ textDecoration: 'none' }}
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
										<CloseIcon boxSize={4} color="#4D81F7" />
									) : (
										<HamburgerIcon boxSize={6} color="#4D81F7" />
									)
								}
								pt={1}
								colorScheme="white"
							/>
							<MenuList>
								<MenuItem
									_focus={{
										bgGradient: 'linear(to-r, #ffecd2 0%, #fcb69f 100%)',
									}}
									justifyContent="end"
								>
									Artículos
								</MenuItem>
								<MenuItem
									_focus={{
										bgGradient: 'linear(to-r, #ffecd2 0%, #fcb69f 100%)',
									}}
									justifyContent="end"
								>
									Comunidad
								</MenuItem>
								<MenuItem
									_focus={{
										bgGradient: 'linear(to-r, #ffecd2 0%, #fcb69f 100%)',
									}}
									justifyContent="end"
								>
									Conocimiento
								</MenuItem>
								<MenuItem
									_focus={{
										bgGradient: 'linear(to-r, #ffecd2 0%, #fcb69f 100%)',
									}}
									justifyContent="end"
								>
									Desarrolladores
								</MenuItem>
							</MenuList>
						</>
					)}
				</Menu>
			</Flex>
			{children}
		</Flex>
	);
}
