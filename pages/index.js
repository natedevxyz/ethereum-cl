import Head from 'next/head';
import Container from '../components/Container';
import Footer from '../components/Footer';
import '@fontsource/poppins';
import '@fontsource/dm-serif-display';
import { Flex, Image, Text, Box } from '@chakra-ui/react';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ξthereum.cl</title>
				<meta name="description" content="Portal chileno sobre ethereum" />
				<meta name="keywords" content="ethereum, crypto, blockchain, chile" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<Flex
					h={'92vh'}
					bgGradient="linear(to-br, #29323c 0%, #485563 100%)"
					flexDirection="column"
					alignItems="center"
					justifyContent="space-evenly"
				>
					<Text
						fontFamily="DM Serif Display"
						fontSize="3xl"
						color="white"
						mx={10}
					>
						Demasiados inconvenientes para ser considerado seriamente como un
						medio de comunicación
					</Text>
					<Flex flexDirection="column" alignItems="center">
						<Image
							src="/william-orton.jpg"
							fit="contain"
							maxW="10rem"
							borderRadius="xl"
							mb={8}
						/>
						<Flex flexDirection="column" bg="white" mx={14} p={5}>
							<Text fontWeight="bold" fontSize="lg" mb={2}>
								William Orton
							</Text>
							<Text fontSize="md">
								Presidente de Western Union refiriéndose al teléfono, 1876
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex
					h={'92vh'}
					flexDirection="column"
					alignItems="center"
					justifyContent="space-around"
					mx={7}
				>
					<Image src="/eth-rainbow.png" fit="contain" maxW="8rem" />
					<Flex flexDirection="column">
						<Box mb={5}>
							<Text mb={5} textAlign="justify">
								Hace unas décadas nadie podría haber predicho lo importante que
								sería el teléfono para nuestra sociedad. A pesar de que su
								impacto tiene aspectos positivos y negativos, sí podemos estar
								todos de acuerdo de que el internet móvil ha cambiado nuestras
								vidas.
							</Text>
							<Text mb={5} textAlign="justify">
								Hoy, gracias a la tecnología blockchain, cada uno de nosotros
								vuelve a estar en la misma posición que William Orton.
							</Text>
							<Text>
								Este sitio web es una invitación abierta a descubrir este mundo
								digital.
							</Text>
						</Box>
						<Text fontSize="3xl" fontWeight="bold" color="#4D81F7">
							Exploremos hoy el internet del mañana
						</Text>
					</Flex>
				</Flex>
				<Footer />
			</Container>
		</>
	);
}
