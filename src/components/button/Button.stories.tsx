import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'UI/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		onClick: { action: 'clicked' },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Применить',
		type: 'apply',
	},
};

export const Reset: Story = {
	args: {
		title: 'Сбросить',
		type: 'reset',
	},
};

export const Clear: Story = {
	args: {
		title: 'Очистить',
		type: 'clear',
	},
};
