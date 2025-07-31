import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { typographyOptions } from '../../constants/articleProps';

const meta: Meta<typeof Select> = {
	title: 'UI/Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		onChange: { action: 'changed' },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FontSelect: Story = {
	args: {
		options: typographyOptions,
		selected: typographyOptions[0],
		title: 'Шрифт',
	},
};
