import Head from 'next/head';
import Wrapper from '../../components/Wrapper';
import NextLink from 'next/link';
import { Flex, Text, Link, Box, Image } from '@chakra-ui/react';
import { SlArrowLeft } from 'react-icons/sl';
import TopButton from '../../components/TopButton';

export default function QueEsWeb3() {
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
					mx={{ base: 7 }}
					mt={{ base: 7, md: 10 }}
					flexDirection="column"
					align="center"
				>
					<Flex minW={{ md: '80%' }} maxW={{ md: '80%' }} px={{ md: '20%' }}>
						<Box>
							<Link
								as={NextLink}
								href="/articulos"
								fontSize={{ base: 'md', md: 'xl' }}
								mb={2}
								pl={2}
							>
								<SlArrowLeft
									fontSize={12}
									style={{ display: 'inline-block' }}
								/>{' '}
								Volver
							</Link>
							<Text
								fontSize={{ base: '2xl', md: '4xl' }}
								color="#4D81F7"
								mb={5}
							>
								¿Qué es web3 y por qué está cambiando el mundo?
							</Text>
						</Box>
					</Flex>
					<Flex
						flexDirection={{ base: 'column', md: 'row' }}
						minW={{ md: '80%' }}
						maxW={{ md: '80%' }}
						mb={5}
					>
						<Flex
							flexDirection={{ base: 'row', md: 'column' }}
							minW={{ base: '100%', md: '25%' }}
							pl={{ md: 20 }}
							mb={3}
						>
							<Link href="https://twitter.com/OrnellaWeb3">
								<Image
									borderRadius="full"
									src="/ornella.jpg"
									maxH={20}
									border="4px"
									borderColor="#F8650A"
									alignSelf="start"
								/>
							</Link>
							<Box ml={{ base: 4, md: 0 }} mt={{ md: 3 }}>
								<Text fontSize="lg" mb={1}>
									Ornella Vallana
								</Text>
								<Text fontSize="md" color="gray.600">
									Abril 2023
								</Text>
							</Box>
						</Flex>
						<Flex minW={{ base: '100%', md: '50%' }}>
							<Image
								style={{
									borderRadius: '0.5rem',
								}}
								src="/web3.jpg"
								alt="Web3 representation"
							/>
						</Flex>
						<Box minW={{ base: '100%', md: '25%' }}></Box>
					</Flex>
					<Flex flexDirection="column" maxW={{ md: '80%' }} px={{ md: '20%' }}>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							Si eres nuevo en este espacio, este artículo te servirá como punto
							de partida. Si no eres tan nuevo, siempre hay lugar para mejorar
							aprendiendo una narrativa sencilla que puede ser útil al momento
							de incorporar a amigos y familiares a web3. Yo todavía sigo
							trabajando en eso diariamente, supongo que necesita constante
							iteración y actualizaciones. Aquí las cosas se mueven a la
							velocidad de la luz. O, mejor dicho, se mueven a la velocidad del{' '}
							<Text fontSize={{ md: 'lg' }} as="i">
								ultrasonido
							</Text>
							.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							Cuando tienes que explicar web3 desde cero a un amigo, ¿por{' '}
							<Text fontSize={{ md: 'lg' }} as="i">
								dónde
							</Text>{' '}
							empezar? ¿
							<Text fontSize={{ md: 'lg' }} as="i">
								cómo
							</Text>{' '}
							empezar? He estado practicando esto MUCHO últimamente. Las
							repercusiones de este cambio son tan significativas que explicarlo
							puede ser desafiante.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							Los seres humanos aprenden principalmente a través de las
							relaciones. Puede ser con alguien o con algo. Si podemos
							relacionarnos con alguien, tal vez podríamos seguir su camino. Si
							podemos relacionarnos con algo, una situación o algo familiar,
							probablemente podamos entender mejor el 'nuevo concepto'. Así que
							eso es lo que haremos, empecemos a conectar los puntos.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							Entonces, ¿qué es web3? Para entenderlo mejor, necesitamos viajar
							un poco en el tiempo para comprender la esencia de cómo se creó
							Internet y su propósito. Luego, profundizaremos en web2 y
							discutiremos{' '}
							<Text fontSize={{ md: 'lg' }} as="i">
								por qué
							</Text>{' '}
							debería cambiar. Finalmente, llegaremos a web3, qué es, en qué se
							diferencia y algunos casos de uso interesantes para muchas
							industrias.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							Dependiendo de en qué parte de tu viaje de aprendizaje te
							encuentres, esta parte puede que te sorprenda o puede que no. La
							tecnología blockchain está cambiando la forma en que vivimos e
							interactuamos entre nosotros a escala global.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							Viajemos en el tiempo hasta 1989. Este año, el gran{' '}
							<Link
								color="blue.500"
								href="https://internethalloffame.org/inductees/tim-berners-lee"
							>
								<Text fontSize={{ md: 'lg' }} as="b">
									Tim Berners-Lee
								</Text>
							</Link>{' '}
							inventó la World Wide Web cuando era un joven ingeniero en la
							Central Europea de Investigación Nuclear, CERN en inglés.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							¿Te apetece un fragmento del pasado? Echa un vistazo al primer
							sitio web{' '}
							<Link
								color="blue.500"
								href="http://info.cern.ch/hypertext/WWW/TheProject.html"
							>
								aquí
							</Link>
							.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							Su visión al crear Internet era tener estándares descentralizados
							para ubicar, vincular y presentar documentos multimedia en línea.
							También podemos referirnos a esto como{' '}
							<Text fontSize={{ md: 'lg' }} as="b">
								web1
							</Text>
							, solo sitios web principalmente de empresas y sin interacción
							entre los usuarios.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							La siguiente fase de Internet,{' '}
							<Text fontSize={{ md: 'lg' }} as="b">
								web2
							</Text>
							, comenzó en 2004 con el surgimiento de las plataformas de redes
							sociales. Los usuarios ahora podían interactuar entre sí. Hemos
							aprendido a compartir nuestros pensamientos, gustos, momentos
							favoritos, fotografías, opiniones, videos, lo que sea.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							Todo parecía bastante espectacular hasta que nos dimos cuenta de
							que gracias a todos los datos que estas plataformas acumulaban,
							también nos vendían (como datos digitales) a anuncios y marketing
							sin que nadie nos preguntara. Tim llama a estas grandes empresas
							plataformas de vigilancia y guardianes de la innovación. Bastante
							acertado.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							La buena noticia es que{' '}
							<Text fontSize={{ md: 'lg' }} as="b">
								web3
							</Text>{' '}
							está aquí para darle la vuelta a esto. Como humanidad, ahora nos
							hemos dado cuenta de que nuestros datos nos pertenecen y que
							ninguna entidad debería mantenerlos como propios y, menos aún,
							obtener ganancias de ellos. Tim ha dicho que ya no se siente solo
							trabajando hacia su visión original. Ahora somos conscientes de
							que Internet debe convertirse en el espacio descentralizado que
							siempre estuvo destinado a ser.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							Web3 utiliza tecnología blockchain, criptomonedas y NFT para
							devolver el poder al usuario final en forma de propiedad. ¿Qué
							quiere decir esto? Significa que solo nosotros somos los
							guardianes de nuestra información, activos y datos y que el valor
							generado por ellos nos pertenece solo a nosotros. Es una gran
							libertad, pero también una gran responsabilidad. Si no estás
							familiarizado con{' '}
							<Text fontSize={{ md: 'lg' }} as="i">
								cualquiera
							</Text>{' '}
							de estos términos, no te preocupes, los analizaremos pronto. Por
							ahora sígueme; con el tiempo te acostumbrarás a ellos.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							Echemos un vistazo a los valores fundamentales de lo que se trata
							web3, definidos por{' '}
							<Link color="blue.500" href="http://ethereum.org/">
								Ethereum.org
							</Link>
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							•{' '}
							<Text fontSize={{ md: 'lg' }} as="b">
								Web3 es descentralizado:
							</Text>{' '}
							en lugar de grandes porciones de Internet controladas por
							entidades centralizadas, la propiedad intelectual se distribuye
							entre los creadores y los usuarios.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							•{' '}
							<Text fontSize={{ md: 'lg' }} as="b">
								Web3 no requiere de permisos:
							</Text>{' '}
							todos tienen el mismo acceso para participar en Web3 y nadie queda
							excluido.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							•{' '}
							<Text fontSize={{ md: 'lg' }} as="b">
								Web3 tiene pagos nativos:
							</Text>{' '}
							se utilizan criptomonedas para gastar y enviar dinero en línea en
							lugar de depender de la infraestructura obsoleta de los bancos y
							los procesadores de pago.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							•{' '}
							<Text fontSize={{ md: 'lg' }} as="b">
								Web3 no depende de la confianza:
							</Text>{' '}
							opera utilizando incentivos y mecanismos económicos en lugar de
							depender de terceros.
						</Text>
						<Text textAlign="justify" mb={5} fontSize={{ md: 'lg' }}>
							Estos valores fundamentales lo son todo; los cambios son
							inimaginables cuando se aplican a cualquier industria que
							conozcamos. Si no estás seguro de cómo la tecnología blockchain y
							web3 cambiarán el mundo, en otros artículos compartiré algunos
							ejemplos de tareas o áreas cotidianas que pronto, si no ya, serán
							interrumpidas por el Internet que "siempre tuvo la intención de
							ser."
						</Text>
					</Flex>
					<TopButton percentage={'25%'} />
				</Flex>
			</Wrapper>
		</>
	);
}
