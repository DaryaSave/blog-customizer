export const availableFonts = [
	'open-sans',
	'ubuntu',
	'cormorant-garamond',
	'days-one',
	'merriweather',
] as const;

export type FontClasses = (typeof availableFonts)[number];

export type SelectionOption = {
	title: string;
	value: string;
	className: string;
	optionClassName?: string;
};

export const typographyOptions: SelectionOption[] = [
	{ title: 'Open Sans', value: 'Open Sans', className: availableFonts[0] },
	{ title: 'Ubuntu', value: 'Ubuntu', className: availableFonts[1] },
	{
		title: 'Cormorant Garamond',
		value: 'Cormorant Garamond',
		className: availableFonts[2],
	},
	{ title: 'Days One', value: 'Days One', className: availableFonts[3] },
	{
		title: 'Merriweather',
		value: 'Merriweather',
		className: availableFonts[4],
	},
];

export const colorPalette: SelectionOption[] = [
	{
		title: 'Черный',
		value: '#000000',
		className: 'font-black',
		optionClassName: 'option-black',
	},
	{
		title: 'Белый',
		value: '#FFFFFF',
		className: 'font-white',
		optionClassName: 'option-white',
	},
	{
		title: 'Серый',
		value: '#C4C4C4',
		className: 'font-gray',
		optionClassName: 'option-gray',
	},
	{
		title: 'Розовый',
		value: '#FEAFE8',
		className: 'font-pink',
		optionClassName: 'option-pink',
	},
	{
		title: 'Ярко-розовый',
		value: '#FD24AF',
		className: 'font-fuchsia',
		optionClassName: 'option-fuchsia',
	},
	{
		title: 'Жёлтый',
		value: '#FFC802',
		className: 'font-yellow',
		optionClassName: 'option-yellow',
	},
	{
		title: 'Зелёный',
		value: '#80D994',
		className: 'font-green',
		optionClassName: 'option-green',
	},
	{
		title: 'Голубой',
		value: '#6FC1FD',
		className: 'font-blue',
		optionClassName: 'option-blue',
	},
	{
		title: 'Фиолетовый',
		value: '#5F0DEE',
		className: 'font-purple',
		optionClassName: 'option-purple',
	},
];

export const backgroundThemes: SelectionOption[] = [
	{
		title: 'Белый',
		value: '#FFFFFF',
		className: 'bg-white',
		optionClassName: 'option-white',
	},
	{
		title: 'Черный',
		value: '#000000',
		className: 'bg-black',
		optionClassName: 'option-black',
	},
	{
		title: 'Серый',
		value: '#C4C4C4',
		className: 'bg-gray',
		optionClassName: 'option-gray',
	},
	{
		title: 'Розовый',
		value: '#FEAFE8',
		className: 'bg-pink',
		optionClassName: 'option-pink',
	},
	{
		title: 'Ярко-розовый',
		value: '#FD24AF',
		className: 'bg-fuchsia',
		optionClassName: 'option-fuchsia',
	},
	{
		title: 'Жёлтый',
		value: '#FFC802',
		className: 'bg-yellow',
		optionClassName: 'option-yellow',
	},
	{
		title: 'Зелёный',
		value: '#80D994',
		className: 'bg-green',
		optionClassName: 'option-green',
	},
	{
		title: 'Голубой',
		value: '#6FC1FD',
		className: 'bg-blue',
		optionClassName: 'option-blue',
	},
	{
		title: 'Фиолетовый',
		value: '#5F0DEE',
		className: 'bg-purple',
		optionClassName: 'option-purple',
	},
];

export const layoutSizes: SelectionOption[] = [
	{
		title: 'Широкий',
		value: '1394px',
		className: 'width-wide',
		optionClassName: 'option-wide',
	},
	{
		title: 'Узкий',
		value: '948px',
		className: 'width-narrow',
		optionClassName: 'option-narrow',
	},
];

export const textSizes: SelectionOption[] = [
	{ title: '18px', value: '18px', className: 'font-size-18' },
	{ title: '25px', value: '25px', className: 'font-size-25' },
	{ title: '38px', value: '38px', className: 'font-size-38' },
];

export const defaultBlogSettings = {
	fontFamilyOption: typographyOptions[0],
	fontColor: colorPalette[0],
	backgroundColor: backgroundThemes[0],
	contentWidth: layoutSizes[0],
	fontSizeOption: textSizes[0],
};

export type BlogConfigurationType = typeof defaultBlogSettings;
