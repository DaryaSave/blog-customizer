declare module '*.svg' {
	import React = require('react');
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>;
	const src: string;
	export default src;
}

declare module '*.png';

declare module '*.jpg';

declare module '*.json';

declare module '*.module.css';

declare module '*.module.scss';

declare module '*.module.sass';

declare module 'clsx' {
	export type ClassValue =
		| ClassArray
		| ClassDictionary
		| string
		| number
		| null
		| boolean
		| undefined;
	export type ClassDictionary = Record<string, unknown>;
	export type ClassArray = ClassValue[];

	declare function clsx(...inputs: ClassValue[]): string;
	export default clsx;
}

declare module '@storybook/react' {
	export interface Meta<T = unknown> {
		component?: T;
		title?: string;
		parameters?: Record<string, unknown>;
		argTypes?: Record<string, unknown>;
		args?: Record<string, unknown>;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	export interface StoryObj<T = unknown> {
		render?: () => JSX.Element;
		args?: Record<string, unknown>;
		parameters?: Record<string, unknown>;
	}
}
