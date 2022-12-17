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
					flexDirection={{ base: 'column', md: 'row' }}
					alignItems="center"
					justifyContent="space-evenly"
				>
					<Text
						fontFamily="DM Serif Display"
						fontSize={{ base: '3xl', md: '5xl' }}
						color="white"
						mr={{ base: 10, md: 0 }}
						ml={{ base: 10, md: 20 }}
						pb={{ base: 0, md: 32 }}
					>
						"Demasiados inconvenientes para ser considerado seriamente como un
						medio de comunicación"
					</Text>
					<Flex
						flexDirection="column"
						alignItems="center"
						minWidth={{ md: '40%' }}
					>
						<Image
							src="/william-orton.jpg"
							fit="contain"
							maxW={{ base: '10rem', md: '15rem' }}
							borderRadius="xl"
							mb={8}
						/>
						<Flex
							flexDirection="column"
							bg="white"
							mx={14}
							p={5}
							maxWidth={{ md: '50%' }}
						>
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
					flexDirection={{ base: 'column', md: 'row' }}
					alignItems="center"
					justifyContent={{ base: 'space-around', md: 'space-evenly' }}
					mx={7}
				>
					<Image
						src="/eth-rainbow.png"
						fit="contain"
						maxW={{ base: '8rem', md: '16rem' }}
						pb={{ base: 0, md: 10 }}
					/>
					<Flex flexDirection="column" maxWidth={{ md: '40%' }}>
						<Box mb={{ base: 7, md: 14 }}>
							<Text mb={5} textAlign="justify" fontSize={{ md: 'xl' }}>
								Hace unas décadas nadie podría haber predicho el impacto que
								tendría el teléfono en nuestra sociedad.
							</Text>
							<Text mb={5} textAlign="justify" fontSize={{ md: 'xl' }}>
								Hoy, gracias a la tecnología blockchain, cada uno de nosotros
								vuelve a estar en la misma posición que William Orton.
							</Text>
							<Text textAlign="justify" fontSize={{ md: 'xl' }}>
								Este sitio web es una invitación abierta a descubrir este mundo
								digital.
							</Text>
						</Box>
						<Text
							fontSize={{ base: '3xl', md: '5xl' }}
							fontWeight="bold"
							color="#4D81F7"
						>
							Exploremos hoy el internet del mañana
						</Text>
					</Flex>
				</Flex>
				<Footer />
			</Container>
		</>
	);
}
