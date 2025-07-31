declare module 'clsx' {
	type ClassValue =
		| string
		| number
		| boolean
		| undefined
		| null
		| ClassDictionary
		| ClassArray;

	interface ClassDictionary {
		[id: string]: unknown;
	}

	type ClassArray = ClassValue[];

	function clsx(...inputs: ClassValue[]): string;
	export default clsx;
	export = clsx;
}
