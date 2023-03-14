import Head from 'next/head';
import Container from '../../components/Container';
import { Flex, Text, Box, Card } from '@chakra-ui/react';

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
					h={'92vh'}
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
					<Box>
						<Text textAlign={'justify'} mb={5} fontSize={{ md: 'lg' }}>
							¿Cómo funciona internet?, ¿cómo funciona el correo electrónico?,
							¿y las redes sociales?. La verdad no es necesario entender cómo
							funcionan estas tecnologías para recibir los beneficios de ser sus
							usuarios.
						</Text>
						<Text textAlign={'justify'} mb={5} fontSize={{ md: 'lg' }}>
							Entonces, ¿por qué valdría la pena tratar de entender cómo
							funciona Ethereum?. La respuesta tiene que ver con la
							descentralización. Dejar de depender de entidades centralizadas
							tiene sus beneficios, pero también implica transferir más
							responsabilidades a los usuarios.
						</Text>
						<Text textAlign={'justify'} mb={5} fontSize={{ md: 'lg' }}>
							Es muy probable, al igual que con otras tecnologías, que con el
							tiempo cada vez sea más fácil interactuar con blockchain. Pero la
							historia siempre recompensa a los que quieren aprender más y es
							por eso que hicimos una recopilación de los conceptos clave para
							entender cómo funciona blockchain.
						</Text>
					</Box>
				</Flex>
			</Container>
		</>
	);
}
