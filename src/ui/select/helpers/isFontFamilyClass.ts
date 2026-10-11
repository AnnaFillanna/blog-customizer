import { fontFamilyClasses } from 'src/constants/articleProps';

import type { FontFamiliesClasses } from 'src/constants/articleProps';

/** Ein Type Guard in TypeScript prüft, ob eine Variable einen bestimmten Typ hat.
 * Weitere Informationen: https://www.typescriptlang.org/docs/handbook/advanced-types.html */
export function isFontFamilyClass(family?: string): family is FontFamiliesClasses {
  return fontFamilyClasses.includes(family as FontFamiliesClasses);
}
