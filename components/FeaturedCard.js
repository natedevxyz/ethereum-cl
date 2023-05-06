import { Flex, Text, Image, Show, Hide, HStack } from '@chakra-ui/react';

export default function FeaturedCard({ title, text, src, alt, children }) {
	return (
		<Flex
			borderRadius="2xl"
			border="1px"
			borderColor="gray.200"
			maxW={{ lg: '46%' }}
			mr={{ lg: '4%' }}
			px={{ base: 8, lg: 10 }}
			py={8}
			flexDirection={{ base: 'column', lg: 'row' }}
			mb={5}
			boxShadow="xs"
		>
			<Flex flexDirection={{ base: 'row', lg: 'column' }} mr={{ lg: 8 }}>
				<Image
					fit="contain"
					src={src}
					alt={alt}
					minW={{ base: '6rem', lg: '8rem' }}
					maxW={{ base: '6rem', lg: '8rem' }}
					minH={{ base: '6rem', lg: '10rem' }}
					maxH={{ base: '6rem', lg: '10rem' }}
					border="4px"
					borderColor="#C0F2F1"
					borderRadius="xl"
					p="1rem"
					mb={3}
					mr={{ base: 3, lg: 0 }}
				/>
				<Flex flexDirection="column" align={{ lg: 'center' }}>
					<Hide above="lg">
						<Text
							fontSize={{ base: 'xl' }}
							color="#F8650A"
							fontWeight="bold"
							mb={2}
							fontFamily="Poppins"
						>
							{title}
						</Text>
					</Hide>
					<HStack color="#4D81F7" fontSize={{ base: '20', lg: '30' }}>
						{children}
					</HStack>
				</Flex>
			</Flex>
			<Flex flexDirection="column" maxW={{ lg: '65%' }}>
				<Show above="lg">
					<Text
						fontSize={{ lg: '2xl' }}
						color="#F8650A"
						fontWeight="bold"
						mb={2}
						fontFamily="Poppins"
					>
						{title}
					</Text>
				</Show>
				<Text>{text}</Text>
			</Flex>
		</Flex>
	);
}
