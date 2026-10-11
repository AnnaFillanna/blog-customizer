import { clsx } from 'clsx';

import type { ElementType, ReactNode } from 'react';
import type { FontFamiliesClasses } from 'src/constants/articleProps';

import styles from './index.module.scss';

type TextProps = {
  /** Anzuzeigender Text */
  children: ReactNode;
  /** HTML-Element zur Darstellung des Textes */
  as?: ElementType;
  /** Legt fest, ob sich der Text an die Konfiguration anpasst */
  dynamic?: boolean;
  /** Schriftgröße */
  size?: 12 | 18 | 22 | 25 | 31 | 38 | 45;
  /** Schriftstärke */
  weight?: 400 | 800;
  /** Schriftstil */
  fontStyle?: 'italic' | 'normal';
  /** Legt fest, ob der Text in Großbuchstaben dargestellt wird */
  uppercase?: boolean;
  /** Textausrichtung */
  align?: 'center' | 'left';
  /** Schriftfamilie des Textes */
  family?: FontFamiliesClasses;
  /** Passt nur Schriftfamilie und Farbe dynamisch an */
  dynamicLite?: boolean;
};

export const Text = ({
  children,
  as: Tag = 'div',
  size = 18,
  dynamic = false,
  weight = 400,
  fontStyle = 'normal',
  uppercase = false,
  align = 'left',
  family = 'open-sans',
  dynamicLite = false,
}: TextProps): React.JSX.Element => {
  const className = clsx(
    styles.text,
    styles[`size${size}`],
    { [styles.dynamic]: dynamic },
    styles[`weight${weight}`],
    styles[`${fontStyle}`],
    { [styles.uppercase]: uppercase },
    styles[`${align}`],
    styles[`${family}`],
    { [styles.dynamicLite]: dynamicLite }
  );
  return <Tag className={className}>{children}</Tag>;
};
