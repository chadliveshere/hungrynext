import { marked } from 'marked';
import styles from '../styles/main.module.scss';

export default function Instructions({ instructions }) {
	return (
		<div className={styles.instructionsWrapper}>
			<div className={styles.instructions} dangerouslySetInnerHTML={{ __html: marked(instructions) }}></div>
		</div>
	);
}
