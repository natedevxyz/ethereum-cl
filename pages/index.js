import { useRef } from 'react';
import Head from 'next/head';
import Container from '../components/Container';
import Footer from '../components/Footer';
import '@fontsource/lora/500.css';
import { Flex, Image, Text, Box } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

export default function Home() {
	/* const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
 */
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
					bgGradient="linear(to-b, #1E1E1E 0%, #222A3E 100%)"
					flexDirection={{ base: 'column', md: 'row' }}
					alignItems="center"
					justifyContent="space-evenly"
				>
					<Flex
						flexDirection="column"
						mr={{ base: 10, md: 0 }}
						ml={{ base: 10, md: 20 }}
						pb={{ base: 0, md: 20 }}
					>
						<motion.div
							initial="initialState"
							animate="animateState"
							transition={{
								duration: 1.5,
							}}
							variants={{
								initialState: {
									opacity: 0,
									x: '-100vw',
								},
								animateState: {
									opacity: 1,
									x: 0,
								},
							}}
						>
							<Text
								fontFamily="Lora"
								fontSize={{ base: '3xl', md: '5xl' }}
								fontWeight={500}
								color="white"
								mb={{ base: 4, md: 8 }}
							>
								"Demasiados inconvenientes para ser considerado seriamente como
								un medio de comunicación"
							</Text>
							<Text fontSize={{ base: 'md', md: 'xl' }} color="white">
								Presidente de Western Union refiriéndose al teléfono, 1876
							</Text>
						</motion.div>
					</Flex>
					<Flex
						flexDirection="column"
						alignItems="center"
						minWidth={{ md: '40%' }}
						pb={{ md: 8 }}
					>
						<Image
							src="/william-orton.jpg"
							fit="contain"
							maxW={{ base: '10rem', md: '15rem' }}
							borderRadius="md"
							mb={4}
						/>
						<Text
							fontWeight={500}
							fontSize={{ base: 'md', md: 'xl' }}
							bg="white"
							borderRadius="md"
							py={1}
							px={3}
							fontFamily="Lora"
						>
							William Orton
						</Text>
					</Flex>
				</Flex>
				<Flex
					h={'92vh'}
					flexDirection={{ base: 'column', md: 'row' }}
					alignItems="center"
					justifyContent="space-evenly"
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
