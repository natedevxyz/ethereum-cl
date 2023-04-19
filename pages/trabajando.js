import Head from 'next/head';
import Wrapper from '../components/Wrapper';
import { Flex, Image, Text } from '@chakra-ui/react';

export default function Trabajando() {
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
					h={'62vh'}
					flexDirection={{ base: 'column', lg: 'row' }}
					justifyContent="space-evenly"
					mx={{ base: 10, lg: 20 }}
				>
					<Text
						fontSize="3xl"
						alignSelf={{ lg: 'center' }}
						pr={{ lg: 10 }}
						color="gray.700"
					>
						Estamos trabajando para entregarte más contenido de calidad
					</Text>
					<Image
						src="/eth.png"
						fit="contain"
						maxW={{ base: '18rem', lg: '35rem' }}
						alignSelf={{ base: 'center', lg: 'flex-end' }}
					></Image>
				</Flex>
			</Wrapper>
		</>
	);
}
