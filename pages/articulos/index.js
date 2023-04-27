import Head from 'next/head';
import NextLink from 'next/link';
import Wrapper from '../../components/Wrapper';
import { Flex, Text, Box, Card, Image } from '@chakra-ui/react';
//import ArticleCard from '../../components/ArticleCard';
//import { useQuery } from 'react-query';

/* const fetchBlogs = async () => {
	const res = await fetch('api/blogs');
	return res.json();
}; */

export default function Articulos() {
	//const { data, isLoading } = useQuery('blogs', fetchBlogs);

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
					mx={{ base: 7, md: 32 }}
					mt={{ base: 7, md: 10 }}
				>
					<Text
						fontSize={{ base: '3xl', md: '5xl' }}
						fontWeight="bold"
						color="#4D81F7"
						mb={5}
					>
						Artículos
					</Text>
					<Flex
						flexDirection={{ base: 'column', md: 'row' }}
						justify="center"
						mb={{ md: 5 }}
					>
						<Box mb={5} w={{ base: '100%', md: '50%' }} mr={{ md: 10 }}>
							<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
								Intentar estar al día con todo lo que pasa en el ecosistema
								crypto puede ser agotador. La tecnología en general siempre
								avanzará a un ritmo acelerado debido a que cada descubrimiento
								significativo permite mejorar lo que ya existe y eso a su vez
								genera nuevas oportunidades de innovación que también pueden
								traducirse en mejoras, y así sucesivamente.
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
								Por suerte hay muchas personas de habla hispana muy activas en
								blockchain, motivo por el que creamos este espacio donde se
								pueden compartir artículos de opinión con el respeto como
								requisito fundamental.
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
								Si te interesa escribir un artículo puedes enviarnos un mensaje
								a nuestra cuenta de twitter.
							</Text>
						</Box>
						<Box mb={5} pl={{ md: 10 }} maxW={{ md: '50%' }}>
							<Card
								borderRadius="lg"
								as={NextLink}
								href="/articulos/que-es-web3"
							>
								<Image
									style={{
										borderTopLeftRadius: '0.5rem',
										borderTopRightRadius: '0.5rem',
									}}
									src="/web3.jpg"
									alt="Web3 representation"
								/>
								<Box p={5}>
									<Text fontSize={'sm'} mb={2} color="gray.600">
										Ornella Vallana
									</Text>
									<Text fontSize={{ base: 'xl', md: '2xl' }} color="#F8650A">
										¿Qué es web3 y por qué está cambiando el mundo?
									</Text>
								</Box>
							</Card>
						</Box>
					</Flex>
					{/* <Flex
						flexDirection={{ base: 'column', md: 'row' }}
						justify={{ md: 'space-between' }}
					>
						{isLoading
							? 'Loading'
							: data.map(article => (
									<ArticleCard
										key={article.id}
										href={article.slug}
										src={article.image_url}
										author={article.author}
										title={article.title}
									/>
							  ))}
					</Flex> */}
				</Flex>
			</Wrapper>
		</>
	);
}
