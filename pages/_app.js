import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 1,
		},
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider resetCSS theme={customTheme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
