import Link from 'next/link';
import Image from 'next/image';
import Time from '../components/Time.js';
import styles from '../styles/main.module.scss';

export default function RecipeCard({ recipe }) {
	const { title, publishDate, slug, heroImage } = recipe;

	return (
		<Link href={`/recipes/${slug}`}>
			<a className={styles.link_recipeCard}>
				<article className={styles.recipeCard}>
					<Image src={heroImage.url} width={500} height={375} layout='responsive' objectFit='cover' objectPosition='center -48px' />
					<div className={styles.recipeCardLabel}>
						<h4>{title}</h4>
						<Time time={publishDate} />
					</div>
				</article>
			</a>
		</Link>
	);
}
