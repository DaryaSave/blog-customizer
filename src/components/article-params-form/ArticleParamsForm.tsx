import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { RadioGroup } from 'components/radio-group';
import { Select } from 'components/select';
import { Separator } from 'components/separator';
import { Text } from 'components/text';
import {
	typographyOptions,
	textSizes,
	colorPalette,
	backgroundThemes,
	layoutSizes,
	BlogConfigurationType,
	defaultBlogSettings,
} from '../../constants/articleProps';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';
import { useState, useRef, FormEvent } from 'react';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';

interface ArticleParamsFormProps {
	articleParams: BlogConfigurationType;
	setArticleParams: (articleParams: BlogConfigurationType) => void;
}

export const ArticleParamsForm = ({
	articleParams,
	setArticleParams,
}: ArticleParamsFormProps) => {
	const [isFormVisible, setIsFormVisible] = useState(false);
	const panelRef = useRef<HTMLDivElement | null>(null);

	const [selectedFontFamily, setSelectedFontFamily] = useState(
		articleParams.fontFamilyOption
	);
	const [selectedFontSize, setSelectedFontSize] = useState(
		articleParams.fontSizeOption
	);
	const [selectedFontColor, setSelectedFontColor] = useState(
		articleParams.fontColor
	);
	const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
		articleParams.backgroundColor
	);
	const [selectedContentWidth, setSelectedContentWidth] = useState(
		articleParams.contentWidth
	);

	useOutsideClickClose({
		isOpen: isFormVisible,
		rootRef: panelRef,
		onClose: () => setIsFormVisible(false),
		onChange: setIsFormVisible,
	});

	const toggleFormVisibility = () => {
		setIsFormVisible(!isFormVisible);
	};

	const resetToDefaults = () => {
		setSelectedFontFamily(defaultBlogSettings.fontFamilyOption);
		setSelectedFontSize(defaultBlogSettings.fontSizeOption);
		setSelectedFontColor(defaultBlogSettings.fontColor);
		setSelectedBackgroundColor(defaultBlogSettings.backgroundColor);
		setSelectedContentWidth(defaultBlogSettings.contentWidth);
		setArticleParams(defaultBlogSettings);
	};

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
		setArticleParams({
			fontFamilyOption: selectedFontFamily,
			fontSizeOption: selectedFontSize,
			fontColor: selectedFontColor,
			backgroundColor: selectedBackgroundColor,
			contentWidth: selectedContentWidth,
		});
	};

	return (
		<>
			<ArrowButton
				containerOpen={isFormVisible}
				onClick={toggleFormVisibility}
			/>
			<aside
				ref={panelRef}
				className={clsx(
					styles.container,
					isFormVisible && styles.container_open
				)}>
				<form className={styles.form} onSubmit={handleFormSubmit}>
					<Text size={31} weight={800}>
						Задайте параметры
					</Text>

					<Select
						selected={selectedFontFamily}
						options={typographyOptions}
						placeholder='Выберите шрифт'
						onChange={setSelectedFontFamily}
					/>

					<RadioGroup
						name='font-size'
						title='Размер шрифта'
						options={textSizes}
						selected={selectedFontSize}
						onChange={setSelectedFontSize}
					/>

					<Select
						selected={selectedFontColor}
						options={colorPalette}
						placeholder='Выберите цвет текста'
						onChange={setSelectedFontColor}
					/>

					<Separator />

					<Select
						selected={selectedBackgroundColor}
						options={backgroundThemes}
						placeholder='Выберите цвет фона'
						onChange={setSelectedBackgroundColor}
					/>

					<Select
						selected={selectedContentWidth}
						options={layoutSizes}
						placeholder='Выберите ширину контента'
						onChange={setSelectedContentWidth}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetToDefaults} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
