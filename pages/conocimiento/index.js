import Head from 'next/head';
import Container from '../../components/Container';
import { Flex, Text, Box } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Conocimiento() {
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
					minH={'92vh'}
					flexDirection="column"
					mx={{ base: 7, md: 32 }}
					mt={{ base: 7, md: 10 }}
				>
					<Text
						fontSize={{ base: '3xl', md: '5xl' }}
						fontWeight="bold"
						color="#4D81F7"
						mb={5}
					>
						Conocimiento
					</Text>
					<Box mb={5}>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							¿Cómo funciona internet?, ¿cómo funciona el correo electrónico?,
							¿y las redes sociales?. La verdad no es necesario entender cómo
							funcionan estas tecnologías para recibir los beneficios de ser sus
							usuarios.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							Entonces, ¿por qué valdría la pena tratar de entender cómo
							funciona Ethereum?. La respuesta tiene que ver con la
							descentralización. Dejar de depender de entidades centralizadas
							tiene sus beneficios, pero también implica transferir más
							responsabilidades a los usuarios.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							Es muy probable, al igual que con otras tecnologías, que con el
							tiempo cada vez sea más fácil interactuar con blockchain. Pero la
							historia siempre recompensa a los que quieren aprender más y es
							por eso que hicimos una recopilación de los conceptos clave para
							entender cómo funciona blockchain.
						</Text>
					</Box>
					<Flex justify="center">
						<Flex
							flexDirection="column"
							align="center"
							borderRadius="2xl"
							border="1px"
							borderColor="gray.200"
							p={8}
							minH="20rem"
							w={{ base: '85%', md: '25%' }}
							boxShadow="xs"
							position="relative"
							zIndex={0}
						>
							<Box
								h="10rem"
								w="10rem"
								bgGradient="radial(#53D3E0 0%, #FFF 100%)"
								position="absolute"
								top="4.5rem"
								zIndex={-1}
								rounded="full"
								opacity={0.7}
								filter="blur(50px)"
							/>
							<Flex flexDirection="column" align="center">
								<Text
									fontSize={{ base: 'xl', md: '2xl' }}
									color="#4D81F7"
									mb={16}
								>
									Conceptos básicos
								</Text>
								<motion.div
									whileHover={{
										scale: 1.5,
										transition: { duration: 0.1 },
									}}
									whileTap={{
										scale: 1.5,
										transition: { duration: 0.1 },
									}}
								>
									<Flex>
										<FaStar fontSize={44} color="#FD8A5E" />
									</Flex>
								</motion.div>
								<Text
									mt={20}
									textAlign="justify"
									fontSize={{ base: 'sm', md: 'md' }}
									color="gray.600"
								>
									Si todo esto te parece muy complicado este es el lugar
									perfecto para empezar.
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Container>
		</>
	);
}
