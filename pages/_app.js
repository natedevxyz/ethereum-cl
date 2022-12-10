import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../styles/theme';
import { Global, css } from '@emotion/react';

const GlobalStyle = ({ children }) => {
	return (
		<>
			<Global
				styles={css`
					html {
						scroll-behavior: smooth;
					}
					#__next {
						display: flex;
						flex-direction: column;
						min-height: 100vh;
					}
				`}
			/>
			{children}
		</>
	);
};

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={customTheme}>
			<GlobalStyle>
				<Component {...pageProps} />
			</GlobalStyle>
		</ChakraProvider>
	);
}

export default MyApp;
