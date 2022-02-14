import '../styles/globals.scss';
import Layout from '../components/Layout';

function HungryNeighbors({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default HungryNeighbors;
