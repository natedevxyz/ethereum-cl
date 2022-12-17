import Head from 'next/head';
import Container from '../components/Container';
import Footer from '../components/Footer';
import '@fontsource/poppins';
import '@fontsource/dm-serif-display';
import { Flex, Image, Text } from '@chakra-ui/react';

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
				<Flex h={'62vh'}></Flex>
				<Footer />
			</Container>
		</>
	);
}
