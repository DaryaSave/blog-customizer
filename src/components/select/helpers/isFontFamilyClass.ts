import { FontClasses, availableFonts } from 'src/constants/articleProps';

export function isFontFamilyClass(
	family?: string | FontClasses
): family is FontClasses {
	return availableFonts.includes(family as FontClasses);
}
