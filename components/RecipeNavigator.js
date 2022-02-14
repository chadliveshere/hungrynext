import Link from 'next/link';
import moment from 'moment';
import styles from '../styles/main.module.scss';

export default function RecipeCard({ recipe, direction }) {
	const { title, publishDate, slug } = recipe;

	return (
		<div>
			<Link href={`/recipes/${slug}`}>
				<a>
					<p>{direction}</p>
					<h4>{title}</h4>
				</a>
			</Link>
		</div>
	);
}
