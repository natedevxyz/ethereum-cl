import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Card({ title, onClick, text, children }) {
	return (
		<>
			<Flex flexDirection="column" align="center">
				<Text fontSize={{ base: 'xl', lg: '2xl' }} color="#3C77F8" mb={16}>
					{title}
				</Text>
				<motion.div
					animate={{
						scale: [1, 1.3, 1],
						transition: {
							ease: 'linear',
							duration: 2,
							repeat: Infinity,
						},
					}}
					onClick={onClick}
				>
					<Flex>{children}</Flex>
				</motion.div>
				<Text
					mt={{ base: 24, lg: 20 }}
					textAlign="justify"
					fontSize={{ base: 'sm', lg: 'md' }}
					color="gray.700"
				>
					{text}
				</Text>
			</Flex>
		</>
	);
}
