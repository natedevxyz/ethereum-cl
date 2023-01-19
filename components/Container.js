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
	Hide,
	Show,
	Button,
	HStack,
} from '@chakra-ui/react';
import '@fontsource/roboto/100.css';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

export default function Container({ children }) {
	return (
		<Flex minH={'100vh'} flexDirection="column">
			<Flex
				py={2}
				px={{ base: 5, md: 12 }}
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
				<Hide above="lg">
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
										as={NextLink}
										href="/wip"
										_focus={{
											bgGradient: 'linear(to-r, #ffecd2 0%, #fcb69f 100%)',
										}}
										justifyContent="end"
									>
										Artículos
									</MenuItem>
									<MenuItem
										as={NextLink}
										href="/wip"
										_focus={{
											bgGradient: 'linear(to-r, #ffecd2 0%, #fcb69f 100%)',
										}}
										justifyContent="end"
									>
										Comunidad
									</MenuItem>
									<MenuItem
										as={NextLink}
										href="/wip"
										_focus={{
											bgGradient: 'linear(to-r, #ffecd2 0%, #fcb69f 100%)',
										}}
										justifyContent="end"
									>
										Conocimiento
									</MenuItem>
									<MenuItem
										as={NextLink}
										href="/wip"
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
				</Hide>
				<Show above="lg">
					<HStack>
						<Button
							as={NextLink}
							href="/wip"
							bgGradient="linear(to-r, #c2e9fb 0%, #a1c4fd 100%)"
							fontWeight="normal"
							borderRadius="full"
							_hover={{
								bgGradient: 'linear(to-r, #ffecd2 0%, #fcb69f 100%)',
								color: 'black',
							}}
						>
							Artículos
						</Button>
						<Button
							as={NextLink}
							href="/wip"
							bgGradient="linear(to-r, #c2e9fb 0%, #a1c4fd 100%)"
							fontWeight="normal"
							borderRadius="full"
							_hover={{
								bgGradient: 'linear(to-r, #ffecd2 0%, #fcb69f 100%)',
								color: 'black',
							}}
						>
							Comunidad
						</Button>
						<Button
							as={NextLink}
							href="/wip"
							bgGradient="linear(to-r, #c2e9fb 0%, #a1c4fd 100%)"
							fontWeight="normal"
							borderRadius="full"
							_hover={{
								bgGradient: 'linear(to-r, #ffecd2 0%, #fcb69f 100%)',
								color: 'black',
							}}
						>
							Conocimiento
						</Button>
						<Button
							as={NextLink}
							href="/wip"
							bgGradient="linear(to-r, #c2e9fb 0%, #a1c4fd 100%)"
							fontWeight="normal"
							borderRadius="full"
							_hover={{
								bgGradient: 'linear(to-r, #ffecd2 0%, #fcb69f 100%)',
								color: 'black',
							}}
						>
							Desarrolladores
						</Button>
					</HStack>
				</Show>
			</Flex>
			{children}
		</Flex>
	);
}
