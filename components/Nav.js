import Link from 'next/link';
import styles from '../styles/main.module.scss';

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<Link href={`/`}>
				<a>
					<i className={styles.nav_logo}></i>
				</a>
			</Link>
		</nav>
	);
}
