import Head from 'next/head';
import NextLink from 'next/link';
import Wrapper from '../../components/Wrapper';
import FeaturedCard from '../../components/FeaturedCard';
import { SlArrowLeft } from 'react-icons/sl';
import { Flex, Text, Link } from '@chakra-ui/react';
import { TbWorld, TbBrandTwitter, TbBrandDiscord } from 'react-icons/tb';

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
					>
						Comunidades
					</Text>
					<Flex flexWrap="wrap">
						<FeaturedCard
							title="ETH Kipu"
							src="/eth-kipu.png"
							alt="ETH Kipu logo"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam."
						>
							<NextLink href="/">
								<TbWorld />
							</NextLink>
							<NextLink href="/">
								<TbBrandTwitter />
							</NextLink>
							<NextLink href="/">
								<TbBrandDiscord />
							</NextLink>
						</FeaturedCard>
						<FeaturedCard
							title="ETH Kipu"
							src="/eth-kipu.png"
							alt="ETH Kipu logo"
							text="
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam."
						>
							<NextLink href="/">
								<TbWorld />
							</NextLink>
							<NextLink href="/">
								<TbBrandTwitter />
							</NextLink>
							<NextLink href="/">
								<TbBrandDiscord />
							</NextLink>
						</FeaturedCard>
					</Flex>
				</Flex>
			</Wrapper>
		</>
	);
}
