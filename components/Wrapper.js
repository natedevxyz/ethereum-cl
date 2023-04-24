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
import Footer from './Footer';

export default function Wrapper({ children }) {
	return (
		<Flex minH={'100vh'} flexDirection="column">
			<Flex
				py={2}
				px={{ base: 5, lg: 12 }}
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
											<CloseIcon boxSize={4} color="#2B6DF8" />
										) : (
											<HamburgerIcon boxSize={6} color="#2B6DF8" />
										)
									}
									pt={1}
									colorScheme="white"
								/>
								<MenuList>
									<MenuItem
										as={NextLink}
										href="/trabajando"
										_focus={{
											bgGradient: 'linear(to-l, #FCA074 0%, #FB838B 100%)',
										}}
										justifyContent="end"
										letterSpacing="1px"
										color="black"
									>
										Artículos
									</MenuItem>
									<MenuItem
										as={NextLink}
										href="/comunidad"
										_focus={{
											bgGradient: 'linear(to-l, #FCA074 0%, #FB838B 100%)',
										}}
										justifyContent="end"
										letterSpacing="1px"
										color="black"
									>
										Comunidad
									</MenuItem>
									<MenuItem
										as={NextLink}
										href="/conocimiento"
										_focus={{
											bgGradient: 'linear(to-l, #FCA074 0%, #FB838B 100%)',
										}}
										justifyContent="end"
										letterSpacing="1px"
										color="black"
									>
										Conocimiento
									</MenuItem>
									<MenuItem
										as={NextLink}
										href="/trabajando"
										_focus={{
											bgGradient: 'linear(to-l, #FCA074 0%, #FB838B 100%)',
										}}
										justifyContent="end"
										letterSpacing="1px"
										color="black"
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
							href="/trabajando"
							bgGradient="linear(to-r, #64E1DE 0%, #53D3E0 100%)"
							fontWeight="normal"
							letterSpacing="1px"
							borderRadius="full"
							color="black"
							_hover={{
								bgGradient: 'linear(to-l, #FCA074 0%, #FB838B 100%)',
								color: 'black',
							}}
						>
							Artículos
						</Button>
						<Button
							as={NextLink}
							href="/comunidad"
							bgGradient="linear(to-r, #64E1DE 0%, #53D3E0 100%)"
							fontWeight="normal"
							letterSpacing="1px"
							borderRadius="full"
							color="black"
							_hover={{
								bgGradient: 'linear(to-l, #FCA074 0%, #FB838B 100%)',
								color: 'black',
							}}
						>
							Comunidad
						</Button>
						<Button
							as={NextLink}
							href="/conocimiento"
							bgGradient="linear(to-r, #64E1DE 0%, #53D3E0 100%)"
							fontWeight="normal"
							letterSpacing="1px"
							borderRadius="full"
							color="black"
							_hover={{
								bgGradient: 'linear(to-l, #FCA074 0%, #FB838B 100%)',
								color: 'black',
							}}
						>
							Conocimiento
						</Button>
						<Button
							as={NextLink}
							href="/trabajando"
							bgGradient="linear(to-r, #64E1DE 0%, #53D3E0 100%)"
							fontWeight="normal"
							letterSpacing="1px"
							borderRadius="full"
							color="black"
							_hover={{
								bgGradient: 'linear(to-l, #FCA074 0%, #FB838B 100%)',
								color: 'black',
							}}
						>
							Desarrolladores
						</Button>
					</HStack>
				</Show>
			</Flex>
			{children}
			<Footer />
		</Flex>
	);
}
