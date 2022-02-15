import { fetchContent } from '../../utils/contentful';
import { marked } from 'marked';
import Time from '../../components/Time';
import RecipeNavigator from '../../components/RecipeNavigator';
import Ingredients from '../../components/Ingredients';
import Instructions from '../../components/Instructions';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

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
		fallback: true,
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

	if (!response.recipeCollection.items.find(({ slug }) => slug === params.slug)) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
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
	if (!recipe) return <div>Loading.</div>;

	const { title, publishDate, slug, heroImage, description, ingredients, instructions } = recipe;

	return (
		<>
			<NextSeo title={`Hungry Neighbors - ${title}`} />
			<article>
				<section className={styles.grid_recipeHeader}>
					<div className={styles.descriptionWrapper}>
						<Time time={publishDate} />
						<h1>{title}</h1>
						<div dangerouslySetInnerHTML={{ __html: marked(description) }}></div>
					</div>
					<div className={styles.recipeImageWrapper}>
						<div className={styles.recipeImage}>
							<Image src={heroImage.url} layout='fill' objectFit='cover' />
						</div>
					</div>
				</section>
				<section className={styles.grid_recipeContent}>
					<Ingredients ingredients={ingredients} />
					<Instructions instructions={instructions} />
				</section>
				<div className={styles.recipeNavigator}>
					<RecipeNavigator recipe={previousRecipe} direction='Previous' />
					<RecipeNavigator recipe={nextRecipe} direction='Next' />
				</div>
			</article>
		</>
	);
}
