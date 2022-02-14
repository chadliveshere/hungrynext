import { fetchContent } from '../utils/contentful.js';
import RecipeCard from '../components/RecipeCard.js';
import styles from '../styles/main.module.scss';
import FeaturedRecipe from '../components/FeaturedRecipe.js';

export async function getStaticProps() {
	const response = await fetchContent(`
{
    recipeCollection(order: [publishDate_DESC], limit: 5) {
        items {
            sys {
                id
            }
            slug
			publishDate
            title
            description
            tags
            heroImage {
                url
                title
                width
                height
                description
            }
        }
    }
}
  `);
	return {
		props: {
			recipes: response.recipeCollection.items,
		},
	};
}

export default function Recipes({ recipes }) {
	return (
		<div className={styles.indexGrid}>
			<section>
				<div className={styles.sticky}>
					<FeaturedRecipe recipe={recipes[0]} />
				</div>
			</section>
			<section>
				{recipes.slice(1).map((recipe) => (
					<RecipeCard key={recipe.sys.id} recipe={recipe} />
				))}
			</section>
		</div>
	);
}
