import Link from 'next/link';
import Image from 'next/image';
import Time from '../components/Time.js';
import { marked } from 'marked';
import styles from '../styles/main.module.scss';

export default function FeaturedRecipe({ recipe }) {
	const { title, publishDate, slug, heroImage, description } = recipe;

	return (
		<div>
			<div className={styles.featuredRecipeImage}>
				<Image src={heroImage.url} width={heroImage.width} height={heroImage.height} layout='responsive' />
			</div>
			<Time time={publishDate} />
			<Link href={`/recipes/${slug}`}>
				<a>
					<h1>{title}</h1>
				</a>
			</Link>
			<div dangerouslySetInnerHTML={{ __html: marked(description) }}></div>
			<Link href={`/recipes/${slug}`}>
				<a className={styles.link_continue}>Continue to the recipe</a>
			</Link>
		</div>
	);
}
