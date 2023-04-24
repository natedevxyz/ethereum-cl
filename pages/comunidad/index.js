import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import community from '../../public/community.png';
import Wrapper from '../../components/Wrapper';
import Card from '../../components/Card';
import { Flex, Text, Box } from '@chakra-ui/react';
import { HiUserGroup } from 'react-icons/hi2';

export default function Conocimiento() {
	const router = useRouter();

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
					<Text
						fontSize={{ base: '3xl', lg: '5xl' }}
						fontWeight="bold"
						color="#4D81F7"
						mb={5}
					>
						Comunidad
					</Text>
					<Flex
						flexDirection={{ base: 'column-reverse', lg: 'row' }}
						justify="center"
					>
						<Box mb={5} w={{ base: '100%', lg: '50%' }} mr={{ lg: 10 }}>
							<Text textAlign="justify" mb={5} fontSize={{ lg: 'lg' }}>
								Por muchos avances tecnológicos que existan nunca debemos
								olvidar que como humanos somos seres sociales. Es por eso que
								independiente del tema, siempre será posible encontrar un grupo
								de personas con el mismo interés.
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ lg: 'lg' }}>
								Una comunidad es mucho más que la suma de sus integrantes, así
								que independiente de cuánto tiempo lleves en este espacio tú
								contribución puede hacer la diferencia.
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ lg: 'lg' }}>
								Esta es una recopilación en constante actualización de
								comunidades e individuos que son parte del ecosistema Ethereum
								en español.
							</Text>
						</Box>
						<Box mb={5} pl={{ lg: 10 }} maxW={{ lg: '50%' }} mt={{ lg: -16 }}>
							<Image src={community} alt="Conectivity" priority={true} />
						</Box>
					</Flex>
					<Flex justify="center">
						<Flex
							flexDirection="column"
							align="center"
							borderRadius="2xl"
							border="1px"
							borderColor="gray.200"
							p={8}
							minH="23rem"
							w={{ base: '85%', lg: '25%' }}
							boxShadow="xs"
							position="relative"
							zIndex={0}
							_hover={{
								borderColor: '#AAEEEC',
							}}
							_active={{
								borderColor: '#AAEEEC',
							}}
						>
							<Box
								h="10rem"
								w="10rem"
								bgGradient="radial(#53D3E0 0%, #FFF 100%)"
								position="absolute"
								top="5rem"
								zIndex={-1}
								borderRadius="full"
								opacity={0.4}
								filter="blur(50px)"
							/>
							<Card
								title="Comunidades"
								onClick={() => router.push('/comunidad/comunidades')}
								text="Un listado de comunidades para todos los gustos, solo tienes que elegir."
							>
								<HiUserGroup fontSize={44} color="#FD8A5E" />
							</Card>
						</Flex>
					</Flex>
				</Flex>
			</Wrapper>
		</>
	);
}
