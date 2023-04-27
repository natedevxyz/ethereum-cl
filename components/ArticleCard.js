import NextLink from 'next/link';
import { Card, Image, Box, Text } from '@chakra-ui/react';

export default function ArticleCard({ href, src, author, title }) {
	return (
		<Card
			maxW={{ lg: '30%' }}
			borderRadius="lg"
			as={NextLink}
			href={href}
			mb={5}
		>
			<Image
				style={{
					borderTopLeftRadius: '0.5rem',
					borderTopRightRadius: '0.5rem',
				}}
				src={src}
			/>
			<Box p={5}>
				<Text fontSize={'sm'} mb={2} color="gray.600">
					{author}
				</Text>
				<Text fontSize={{ base: 'xl', lg: '2xl' }} color="#F8650A">
					{title}
				</Text>
			</Box>
		</Card>
	);
}
