import { marked } from 'marked';
import styles from '../styles/main.module.scss';

export default function Ingredients({ ingredients }) {
	return (
		<div className={styles.ingredientsWrapper}>
			<div className={styles.ingredients} dangerouslySetInnerHTML={{ __html: marked(ingredients) }}></div>
		</div>
	);
}
