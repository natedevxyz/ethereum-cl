import Head from 'next/head';
import Container from '../../components/Container';
import { Flex, Text, Card } from '@chakra-ui/react';

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
					bgGradient="linear(to-b, #FDFAF2 50%, #FFF 100%)"
					flexDirection={{ base: 'column', md: 'row' }}
					alignItems="center"
					justifyContent="space-evenly"
				></Flex>
			</Container>
		</>
	);
}
