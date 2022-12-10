import React from 'react';
import { Flex, Link, Image, Text } from '@chakra-ui/react';
import { FaTwitter, FaHeart } from 'react-icons/fa';

export default function Footer() {
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			h={'30vh'}
			bgGradient="linear(to-b, #FFFEFF 0%, #D7FFFE 100%)"
			justifyContent="flex-end"
			pb={7}
		>
			<Link href="https://twitter.com/ethpuntocl" isExternal mb={6}>
				<FaTwitter fontSize={50} color="#CFD9E8" />
			</Link>
			<Flex alignItems="center" mb={2}>
				<Text mr={1}>Hecho con</Text>
				<FaHeart color="#EC3238" />
				<Text mx={1}>por</Text>
				<Link href="https://twitter.com/Nate_d3v" isExternal>
					<Image src="/nate-d3v.jpg" borderRadius="full" boxSize={10} />
				</Link>
			</Flex>
			<Text>ethereum.cl &copy; 2022</Text>
		</Flex>
	);
}
