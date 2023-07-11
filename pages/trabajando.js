import Head from 'next/head';
import Wrapper from '../components/Wrapper';
import Image from 'next/image';
import eth from '../public/eth.png';
import { Flex, Text } from '@chakra-ui/react';

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
						fontSize="2xl"
						alignSelf={{ lg: 'center' }}
						pr={{ lg: 10 }}
						color="gray.700"
					>
						Estamos trabajando para entregarte más contenido de calidad
					</Text>
					<Flex
						alignSelf={{ base: 'center', lg: 'flex-end' }}
						maxW={{ lg: '40%' }}
					>
						<Image src={eth} alt="Ethereum illustration" priority={true} />
					</Flex>
				</Flex>
			</Wrapper>
		</>
	);
}
