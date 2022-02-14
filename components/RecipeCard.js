import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import styles from '../styles/main.module.scss';

export default function RecipeCard({ recipe }) {
	const { title, publishDate, slug, heroImage } = recipe;

	return (
		<Link href={`/recipes/${slug}`}>
			<a>
				<article className={styles.recipeCard}>
					<Image src={heroImage.url} width={500} height={375} layout='responsive' objectFit='cover' objectPosition='center -48px' />
					<div className={styles.recipeCardLabel}>
						<h4>{title}</h4>
						<time>{moment(publishDate).calendar(null, { sameElse: 'MMMM Do, YYYY' })}</time>
					</div>
				</article>
			</a>
		</Link>
	);
}
