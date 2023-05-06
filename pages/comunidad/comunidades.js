import Head from 'next/head';
import NextLink from 'next/link';
import Wrapper from '../../components/Wrapper';
import FeaturedCard from '../../components/FeaturedCard';
import { SlArrowLeft } from 'react-icons/sl';
import { Flex, Text, Link } from '@chakra-ui/react';
import {
	TbWorld,
	TbBrandTwitter,
	TbBrandDiscord,
	TbBrandTelegram,
	TbBrandInstagram,
} from 'react-icons/tb';

export default function Comunidades() {
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
					my={{ base: 7, lg: 10 }}
				>
					<Link
						as={NextLink}
						href="/comunidad"
						fontSize={{ base: 'md', lg: 'xl' }}
						mb={2}
						pl={2}
					>
						<SlArrowLeft fontSize={12} style={{ display: 'inline-block' }} />{' '}
						Volver
					</Link>
					<Text
						fontSize={{ base: '2xl', lg: '4xl' }}
						color="#4D81F7"
						mb={5}
						w={{ base: '100%', lg: '50%' }}
						mr={{ lg: 10 }}
						fontFamily="Poppins"
					>
						Comunidades
					</Text>
					<Flex flexWrap="wrap">
						<FeaturedCard
							title="ETH Kipu"
							src="/eth-kipu.png"
							alt="ETH Kipu logo"
							text="Organización sin fines de lucro dedicada a apoyar el ecosistema Ethereum en América Latina. Co-creada por líderes de la comunidad de Latam alineados con los valores de Ethereum."
						>
							<NextLink href="https://ethkipu.org/">
								<TbWorld />
							</NextLink>
							<NextLink href="https://twitter.com/ethkipu">
								<TbBrandTwitter />
							</NextLink>
							{/* <NextLink href="https://instagram.com/ethkipu">
								<TbBrandInstagram />
							</NextLink>
							<NextLink href="https://t.me/ETHkipu">
								<TbBrandTelegram />
							</NextLink> */}
							<NextLink href="https://discord.gg/rRJJeSjBFZ">
								<TbBrandDiscord />
							</NextLink>
						</FeaturedCard>
						<FeaturedCard
							title="Polygon Guild Santiago"
							src="/polygon-guild.png"
							alt="Polygon Guild logo"
							text="Comunidad de desarrolladores y entusiastas del protocolo Polygon. Es un espacio para conectar, colaborar y aprender en equipo sobre tecnologías web3."
						>
							<NextLink href="https://twitter.com/PolygonGuildSCL">
								<TbBrandTwitter />
							</NextLink>
							<NextLink href="https://t.me/+eV1Smh7HCvMwODk1">
								<TbBrandTelegram />
							</NextLink>
						</FeaturedCard>
					</Flex>
				</Flex>
			</Wrapper>
		</>
	);
}
