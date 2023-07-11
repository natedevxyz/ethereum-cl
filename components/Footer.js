import { Flex, Link, Image, Text } from '@chakra-ui/react';
import { FaTwitter, FaHeart } from 'react-icons/fa';

export default function Footer() {
	return (
		<Flex
			flexDirection={{ base: 'column', lg: 'row' }}
			alignItems={{ base: 'center', lg: 'flex-end' }}
			h={'30vh'}
			bgGradient="linear(to-b, #FFFEFF 0%, #C9F2F6 100%)"
			justifyContent={{ base: 'flex-end', lg: 'space-evenly' }}
			pb={7}
		>
			<Link
				href="https://twitter.com/ethpuntocl"
				isExternal
				mb={{ base: 6, lg: 0 }}
				px={{ base: 0, lg: 12 }}
				aria-label="Link to twitter"
			>
				<FaTwitter fontSize={48} color="#FB8B80" />
			</Link>
			<Flex alignItems="center" mb={{ base: 2, lg: 0 }}>
				<Text mr={1}>Hecho con</Text>
				<FaHeart color="#EC3238" />
				<Text mx={1}>por</Text>
				<Link href="https://twitter.com/natedevxyz" isExternal>
					<Image
						src="https://github.com/natedevxyz.png"
						alt="Picture of natedevxyz"
						borderRadius="full"
						boxSize={10}
					/>
				</Link>
			</Flex>
			<Text mb={{ base: 0, lg: 2 }}>
				ethereum.cl &copy; {new Date().getFullYear()}
			</Text>
		</Flex>
	);
}
