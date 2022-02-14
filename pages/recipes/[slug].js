import { fetchContent } from '../../utils/contentful.js';
import { marked } from 'marked';
import RecipeNavigator from '../../components/RecipeNavigator.js';
import styles from '../../styles/main.module.scss';

export async function getStaticPaths() {
	const response = await fetchContent(`
{
    recipeCollection {
        items {
            slug
        }
    }
}
  `);

	const paths = response.recipeCollection.items.map((item) => {
		return {
			params: { slug: item.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const response = await fetchContent(`
{
    recipeCollection(order: [publishDate_DESC]) {
        items {
            slug
			publishDate
            title
            description
			ingredients
			instructions
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

	const findPreviousRecipe = (index, length) => {
		if (index > 0) {
			return response.recipeCollection.items[index - 1];
		} else {
			return response.recipeCollection.items[length - 1];
		}
	};

	const findNextRecipe = (index, length) => {
		if (index === length - 1) {
			return response.recipeCollection.items[0];
		} else {
			return response.recipeCollection.items[index + 1];
		}
	};

	return {
		props: {
			recipe: response.recipeCollection.items.find(({ slug }) => slug === params.slug),
			previousRecipe: findPreviousRecipe(
				response.recipeCollection.items.findIndex(({ slug }) => slug === params.slug),
				response.recipeCollection.items.length
			),
			nextRecipe: findNextRecipe(
				response.recipeCollection.items.findIndex(({ slug }) => slug === params.slug),
				response.recipeCollection.items.length
			),
		},
		revalidate: 30,
	};
}

export default function RecipeDetails({ recipe, previousRecipe, nextRecipe }) {
	const { title, publishDate, slug, heroImage, description } = recipe;

	const parsedDescription = marked.parse(description);

	return (
		<div>
			<h1>{title}</h1>
			<div dangerouslySetInnerHTML={{ __html: marked(parsedDescription) }}></div>
			<div className={styles.recipeNavigator}>
				<RecipeNavigator recipe={previousRecipe} direction='Previous' />
				<RecipeNavigator recipe={nextRecipe} direction='Next' />
			</div>
		</div>
	);
}
