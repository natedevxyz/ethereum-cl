import { useState, useEffect } from 'react';
import { SlArrowUp } from 'react-icons/sl';
import { Flex } from '@chakra-ui/react';

export default function TopButton() {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			{showButton && (
				<Flex
					position="fixed"
					w={10}
					h={10}
					borderRadius="full"
					onClick={() => scrollUp()}
					right={{ base: '1.5rem', md: '45%' }}
					bottom={{ base: '1.5rem', md: '30vh' }}
					border="2px"
					borderColor={{ base: '#F8650A', md: 'gray.200' }}
					bg="white"
					justify="center"
					align="center"
					_hover={{
						borderColor: '#F8650A',
					}}
				>
					<SlArrowUp fontSize={12} color="black" />
				</Flex>
			)}
		</>
	);
}
