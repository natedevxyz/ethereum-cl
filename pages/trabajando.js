import Head from 'next/head';
import Wrapper from '../components/Wrapper';
import Image from 'next/image';
import { Flex, Text, chakra } from '@chakra-ui/react';

export default function Trabajando() {
	const NextImage = chakra(Image, {
		shouldForwardProp: prop => ['src', 'alt', 'width', 'height'].includes(prop),
	});

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
					<NextImage
						src="/eth.png"
						fit="contain"
						width={560}
						height={409}
						maxW={{ base: '288px', lg: '560px' }}
						maxH={{ base: '210px', lg: '409px' }}
						alignSelf={{ base: 'center', lg: 'flex-end' }}
					/>
				</Flex>
			</Wrapper>
		</>
	);
}
