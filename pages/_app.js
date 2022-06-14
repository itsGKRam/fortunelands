import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} name='my-app' />
		</ChakraProvider>
	);
}

export default MyApp;
