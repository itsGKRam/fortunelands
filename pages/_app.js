import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} name='my-app' />
		</ChakraProvider>
	);
}

export default MyApp;
