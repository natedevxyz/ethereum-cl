import Head from 'next/head';
import NextLink from 'next/link';
import Image from 'next/image';
import google from '../../public/google.jpg';
import Wrapper from '../../components/Wrapper';
import TopButton from '../../components/TopButton';
import { SlArrowLeft } from 'react-icons/sl';
import { Flex, Text, Link, Box } from '@chakra-ui/react';

export default function Descentralizacion() {
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
					mt={{ base: 7, lg: 10 }}
				>
					<Link
						as={NextLink}
						href="/conocimiento"
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
						¿Por qué es importante la descentralización?
					</Text>
					<Flex
						flexDirection={{ base: 'column-reverse', lg: 'row' }}
						justify="center"
					>
						<Box w={{ base: '100%', lg: '50%' }} mr={{ lg: 10 }}>
							<Text textAlign="justify" mb={5} fontSize={{ lg: 'lg' }}>
								Intenta hacer memoria de los pasos que seguiste para encontrar
								esta página.
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ lg: 'lg' }}>
								Una opción bastante probable es que hayas ocupado algún motor de
								búsqueda. El más utilizado a nivel mundial es Google, algo tan
								normal en nuestras vidas que tenemos un verbo para eso:
								"googlear". Ocupamos servicios como estos todos los días y no
								pagamos nada, ¿cómo lo hacen estas grandes compañías para
								generar ingresos?.
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ lg: 'lg' }}>
								Piensa ahora cuánta información personal mantienes
								voluntariamente en estas plataformas como correos, fotos,
								conversaciones, etc. Es innegable que todo esto nos facilita la
								vida y además a un precio imbatible: gratis. ¿Cómo algo así
								puede ser una desventaja para los usuarios?
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ lg: 'lg' }}>
								Esto podría compararse a ser súbditos de un reino. Este reino
								ofrece muchos beneficios sabiendo que mientras más súbditos
								tenga, mejores serán sus perspectivas económicas. Pero la
								historia ha demostrado que cuando el poder de decisión se
								concentra (como en un rey), se genera un desequilibrio que no
								beneficia a la mayoría.
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ lg: 'lg' }}>
								Esta comparación puede parecer una exageración, pero no lo es.
								Las compañías tecnológicas como Google tienen como principal
								prioridad la rentabilidad, y aunque eso no es algo malo, sí
								habrá un conflicto de intereses cuando un grupo pequeño tenga
								que decidir entre los resultados económicos y cambiar reglas ya
								establecidas de manera unilateral.
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ lg: 'lg' }}>
								Hasta el momento la centralización no es una preocupación para
								la mayoría de la gente. Pero la realidad es que casi todo lo que
								damos por sentado de internet depende finalmente de que unas
								pocas personas no cambien de opinión.{' '}
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ lg: 'lg' }}>
								La buena noticia es que hay una tecnología que nos permite
								seguir beneficiándonos de internet sin los riesgos de la
								centralización: blockchain.
							</Text>
						</Box>
						<Box mb={5} pl={{ lg: 10 }} maxW={{ lg: '50%' }} mt={{ lg: -32 }}>
							<Box position={{ base: 'static', lg: 'sticky' }} top="4.5rem">
								<Image src={google} alt="Castle doodle" priority={true} />
							</Box>
						</Box>
					</Flex>
					<TopButton />
				</Flex>
			</Wrapper>
		</>
	);
}
