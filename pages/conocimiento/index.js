import Head from 'next/head';
import NextLink from 'next/link';
import Image from 'next/image';
import knowlegde from '../../public/knowledge.png';
import Wrapper from '../../components/Wrapper';
import { Flex, Text, Box } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Conocimiento() {
	const [cardActive, setCardActive] = useState(false);

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
					minH={'92vh'}
					flexDirection="column"
					mx={{ base: 7, lg: 32 }}
					mt={{ base: 7, lg: 10 }}
				>
					<Text
						fontSize={{ base: '3xl', lg: '5xl' }}
						fontWeight="bold"
						color="#4D81F7"
						mb={5}
					>
						Conocimiento
					</Text>
					<Flex
						flexDirection={{ base: 'column-reverse', lg: 'row' }}
						justify="center"
					>
						<Box mb={5} w={{ base: '100%', lg: '50%' }} mr={{ lg: 10 }}>
							<Text textAlign="justify" mb={5} fontSize={{ lg: 'lg' }}>
								¿Cómo funciona internet?, ¿cómo funciona el correo electrónico?,
								¿y las redes sociales?. La verdad no es necesario entender cómo
								funcionan estas tecnologías para beneficiarse como usuario.
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ lg: 'lg' }}>
								Entonces, ¿por qué valdría la pena tratar de entender cómo
								funciona Ethereum?. La respuesta tiene que ver con la
								descentralización. Dejar de depender de entidades centralizadas
								tiene sus beneficios, pero también implica transferir más
								responsabilidades a los usuarios.
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ lg: 'lg' }}>
								Es muy probable, al igual que con otras tecnologías, que con el
								tiempo cada vez sea más fácil interactuar con blockchain. Pero
								sabiendo que la historia favorece a los que toman la iniciativa
								hicimos una recopilación de los conceptos clave para entender
								cómo funciona blockchain.
							</Text>
						</Box>
						<Box mb={5} pl={{ lg: 10 }} maxW={{ lg: '50%' }} mt={{ lg: -28 }}>
							<Image src={knowlegde} alt="Person studying" priority={true} />
						</Box>
					</Flex>
					<Flex justify="center">
						<Flex
							flexDirection="column"
							align="center"
							borderRadius="2xl"
							border="1px"
							borderColor={!cardActive ? 'gray.200' : '#AAEEEC'}
							p={8}
							minH="23rem"
							w={{ base: '85%', lg: '25%' }}
							boxShadow="xs"
							position="relative"
							zIndex={0}
						>
							<Box
								h="10rem"
								w="10rem"
								bgGradient="radial(#53D3E0 0%, #FFF 100%)"
								position="absolute"
								top="5rem"
								zIndex={-1}
								borderRadius="full"
								opacity={0.4}
								filter="blur(50px)"
							/>
							{!cardActive && (
								<>
									<Flex flexDirection="column" align="center">
										<Text
											fontSize={{ base: 'xl', lg: '2xl' }}
											color="#3C77F8"
											mb={16}
										>
											Conceptos básicos
										</Text>
										<motion.div
											animate={{
												scale: [1, 1.3, 1],
												transition: {
													ease: 'linear',
													duration: 2,
													repeat: Infinity,
												},
											}}
											onClick={() => setCardActive(true)}
										>
											<Flex>
												<FaStar fontSize={44} color="#FD8A5E" />
											</Flex>
										</motion.div>
										<Text
											mt={{ base: 24, lg: 20 }}
											textAlign="justify"
											fontSize={{ base: 'sm', lg: 'md' }}
											color="gray.700"
										>
											Si todo esto te parece muy complicado este es el lugar
											perfecto para empezar.
										</Text>
									</Flex>
								</>
							)}
							{cardActive && (
								<>
									<Flex
										flexDirection="column"
										justify="space-between"
										align="center"
										w="100%"
										h="100%"
									>
										<Box
											as={NextLink}
											href="/conocimiento/descentralizacion"
											_hover={{
												borderColor: '#F8650A',
												bg: 'white',
											}}
											boxShadow="lg"
											w="100%"
											py="1rem"
											rounded="full"
											border="2px"
											borderColor="#4D81F7"
											bg="rgba(255, 255, 255, 0)"
										>
											<Text
												fontWeight="normal"
												letterSpacing="1px"
												borderRadius="full"
												color="black"
												align="center"
											>
												Descentralización
											</Text>
										</Box>
										<motion.div
											whileHover={{
												scale: 1.5,
												transition: { duration: 0.1 },
											}}
											whileTap={{
												scale: 1.5,
												transition: { duration: 0.1 },
											}}
											onClick={() => setCardActive(false)}
										>
											<RxCross1 fontSize={24} color="#2B6DF8" />
										</motion.div>
									</Flex>
								</>
							)}
						</Flex>
					</Flex>
				</Flex>
			</Wrapper>
		</>
	);
}
