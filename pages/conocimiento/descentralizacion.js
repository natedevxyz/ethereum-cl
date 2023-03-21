import Head from 'next/head';
import Container from '../../components/Container';
import { Flex, Text } from '@chakra-ui/react';

export default function Descentralizacion() {
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
					<Text fontSize={{ base: '2xl', md: '4xl' }} color="#4D81F7" mb={5}>
						¿Por qué es importante la descentralización?
					</Text>
				</Flex>
			</Container>
		</>
	);
}
