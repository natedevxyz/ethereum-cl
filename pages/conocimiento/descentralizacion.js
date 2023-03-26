import Head from 'next/head';
import NextLink from 'next/link';
import Wrapper from '../../components/Wrapper';
import { SlArrowLeft } from 'react-icons/sl';
import { Flex, Text, Link, Box, Image } from '@chakra-ui/react';

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
					mx={{ base: 7, md: 32 }}
					mt={{ base: 7, md: 10 }}
				>
					<Link
						as={NextLink}
						href="/conocimiento"
						fontSize={{ base: 'md', md: 'xl' }}
						mb={2}
						pl={2}
					>
						<SlArrowLeft fontSize={12} style={{ display: 'inline-block' }} />{' '}
						Volver
					</Link>
					<Text fontSize={{ base: '2xl', md: '4xl' }} color="#4D81F7" mb={5}>
						¿Por qué es importante la descentralización?
					</Text>
					<Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
						<Box w={{ base: '100%', md: '50%' }}>
							<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
								Intenta hacer memoria de los pasos que recién seguiste para
								encontrar esta página.
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
								Una opción bastante probable es que hayas ocupado algún motor de
								búsqueda. El más utilizado a nivel mundial es Google, algo tan
								normal en nuestras vidas que tenemos un verbo para eso:
								"googlear". Ocupamos servicios como estos todos los días y no
								pagamos nada, ¿cómo lo hacen estas grandes compañías para
								generar ingresos?.
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
								Piensa ahora cuánta información personal mantienes
								voluntariamente en estas plataformas. Correos, fotos,
								conversaciones, etc. Es innegable que todo esto nos facilita la
								vida y además a un precio imbatible: gratis. ¿Cómo algo así
								puede ser una desventaja para los usuarios?
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
								Esto podría compararse a ser súbditos de un reino. Este reino
								ofrece muchos beneficios sabiendo que mientras más súbditos
								tenga, mejores serán sus perspectivas económicas. Pero la
								historia ha demostrado que cuando una persona (como un rey)
								tiene mucho poder, se genera un desequilibrio que no beneficia a
								la mayoría (como los súbditos).
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
								Esta comparación puede parecer una exageración, pero no lo es.
								Las compañías tecnológicas como Google tienen como principal
								prioridad la rentabilidad, y aunque eso no es algo malo, sí hay
								un conflicto de intereses cuando un grupo pequeño tiene que
								decidir entre los resultados económicos y el bien de los
								usuarios.
							</Text>
							<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
								Hasta el momento la centralización no es una preocupación para
								la mayoría de la gente. Pero intenta cambiarte de "reino" y te
								darás cuenta de que no es fácil dejar de depender de estas
								entidades centralizadas. Lo bueno es que hay una tecnología que
								nos permite seguir beneficiándonos de internet sin los riesgos
								de la centralización: blockchain.
							</Text>
						</Box>
						<Box mb={5} pl={{ md: 10 }}>
							<Image
								position={{ base: 'static', md: 'sticky' }}
								top="4.5rem"
								src="/google.jpg"
								fit="contain"
							></Image>
						</Box>
					</Flex>
				</Flex>
			</Wrapper>
		</>
	);
}
