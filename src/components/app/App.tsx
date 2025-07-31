import styles from './App.module.scss';
import { CSSProperties, useState } from 'react';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { defaultBlogSettings } from '../../constants/articleProps';

export const App = () => {
	const [blogConfiguration, setBlogConfiguration] =
		useState(defaultBlogSettings);

	const dynamicStyles = {
		'--typography-family': blogConfiguration.fontFamilyOption.value,
		'--typography-size': blogConfiguration.fontSizeOption.value,
		'--text-color': blogConfiguration.fontColor.value,
		'--content-width': blogConfiguration.contentWidth.value,
		'--background-color': blogConfiguration.backgroundColor.value,
	} as CSSProperties;

	return (
		<main className={styles.main} style={dynamicStyles}>
			<ArticleParamsForm
				articleParams={blogConfiguration}
				setArticleParams={setBlogConfiguration}
			/>
			<Article />
		</main>
	);
};
