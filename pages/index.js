import { useRef } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import Wrapper from '../components/Wrapper';
import '@fontsource/lora/500.css';
import { Flex, Image, Text, Box, Button } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

export default function Inicio() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<>
			<Head>
				<title>Ξthereum.cl</title>
				<meta name="description" content="Portal chileno sobre ethereum" />
				<meta name="keywords" content="ethereum, crypto, blockchain, chile" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Wrapper>
				<Flex
					h={'92vh'}
					bgGradient="linear(to-b, #1E1E1E 0%, #222A3E 100%)"
					flexDirection={{ base: 'column', lg: 'row' }}
					alignItems="center"
					justifyContent="space-evenly"
				>
					<Flex
						flexDirection="column"
						mr={{ base: 10, lg: 0 }}
						ml={{ base: 10, lg: 20 }}
						pb={{ base: 0, lg: 20 }}
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
								fontSize={{ base: '3xl', lg: '5xl' }}
								fontWeight={500}
								color="white"
								mb={{ base: 4, lg: 8 }}
							>
								"Demasiados inconvenientes para ser considerado seriamente como
								un medio de comunicación"
							</Text>
							<Text
								fontSize={{ base: 'md', lg: 'xl' }}
								color="white"
								fontFamily="Poppins"
							>
								Presidente de Western Union refiriéndose al teléfono, 1876
							</Text>
						</motion.div>
					</Flex>
					<Flex
						flexDirection="column"
						alignItems="center"
						minWidth={{ lg: '40%' }}
						pb={{ lg: 8 }}
					>
						<Image
							src="/william-orton.jpg"
							alt="William Orton"
							fit="contain"
							maxW={{ base: '10rem', lg: '15rem' }}
							borderRadius="md"
							mb={4}
							boxShadow="lg"
						/>
						<Box
							bg="rgba(255, 255, 255, 0.05)"
							borderRadius="md"
							py={1}
							px={3}
							boxShadow="lg"
						>
							<Text
								fontWeight={500}
								fontSize={{ base: 'md', lg: 'xl' }}
								fontFamily="Lora"
								color="white"
							>
								William Orton
							</Text>
						</Box>
					</Flex>
				</Flex>
				<Flex
					h={'92vh'}
					flexDirection={{ base: 'column', lg: 'row' }}
					alignItems="center"
					justifyContent="space-evenly"
					mx={7}
				>
					<motion.div
						ref={ref}
						animate={{
							opacity: isInView ? 1 : 0,
							scale: isInView ? 1 : 0,
						}}
						transition={{
							duration: 1,
						}}
					>
						<Image
							src="/eth-rainbow.png"
							alt="Ethereum official logo"
							fit="contain"
							maxW={{ base: '8rem', lg: '16rem' }}
							pb={{ base: 0, lg: 10 }}
						/>
					</motion.div>
					<Flex flexDirection="column" maxWidth={{ lg: '40%' }}>
						<Text
							fontSize={{ base: '3xl', lg: '5xl' }}
							fontWeight="bold"
							color="#4D81F7"
							mb={{ base: 5, lg: 7 }}
							fontFamily="Poppins"
						>
							Exploremos hoy el internet del mañana
						</Text>
						<Box mb={7} pr={{ lg: 10 }}>
							<Text mb={5} textAlign="justify" fontSize={{ lg: 'xl' }}>
								Hace unas décadas nadie podría haber predicho el impacto que
								tendría el teléfono en nuestra sociedad.
							</Text>
							<Text mb={5} textAlign="justify" fontSize={{ lg: 'xl' }}>
								Hoy, gracias a la tecnología blockchain, cada uno de nosotros
								vuelve a estar en la misma posición que William Orton.
							</Text>
							<Text textAlign="justify" fontSize={{ lg: 'xl' }}>
								Este sitio web es una invitación abierta a descubrir este mundo
								digital.
							</Text>
						</Box>
						<Button
							as={NextLink}
							href="/conocimiento"
							bgGradient="linear(to-l, #FCA074 0%, #FB838B 100%)"
							fontWeight="normal"
							letterSpacing="1px"
							borderRadius="full"
							color="black"
							_hover={{
								bgGradient: 'linear(to-r, #64E1DE 0%, #53D3E0 100%)',
								color: 'black',
							}}
							alignSelf="start"
							mb={5}
							fontFamily="Poppins"
						>
							Explorar
						</Button>
					</Flex>
				</Flex>
			</Wrapper>
		</>
	);
}
