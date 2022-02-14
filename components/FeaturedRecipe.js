import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import { marked } from 'marked';
import styles from '../styles/main.module.scss';

export default function FeaturedRecipe({ recipe }) {
	const { title, publishDate, slug, heroImage, description } = recipe;

	const parsedDescription = marked.parse(description);

	return (
		<div>
			<div className={styles.featuredRecipeImage}>
				<Image src={heroImage.url} width={heroImage.width} height={heroImage.height} layout='responsive' />
			</div>
			<time>{moment(publishDate).calendar(null, { sameElse: 'MMMM Do, YYYY' })}</time>
			<h1>{title}</h1>
			<div dangerouslySetInnerHTML={{ __html: marked(parsedDescription) }}></div>
		</div>
	);
}
