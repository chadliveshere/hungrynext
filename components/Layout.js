import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';
import styles from '../styles/main.module.scss';
import Link from 'next/link';

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Hungry Neighbors</title>
				<meta name='description' content='A food blog' />
				<link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
				<link rel='manifest' href='/favicon/site.webmanifest' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
				<link href='https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@300;400;700&family=Mulish:wght@400;500;700&display=swap' rel='stylesheet' />
			</Head>

			<Nav />
			<main className={styles.content}>{children}</main>
			<Footer />
		</div>
	);
}
