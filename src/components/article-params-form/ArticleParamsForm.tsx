import { clsx } from 'clsx';
import { useState, useEffect, useRef } from 'react';
import {
  defaultArticleState,
  fontFamilyOptions,
  fontSizeOptions,
  fontColors,
  backgroundColors,
  contentWidthArr,
} from 'src/constants/articleProps';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { Text } from 'src/ui/text';
import { RadioGroup } from 'src/ui/radio-group';
import type { ArticleStateType } from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';
import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = ({
  setArticleState,
}: {
  setArticleState: React.Dispatch<React.SetStateAction<ArticleStateType>>;
}): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [fontFamily, setFontFamily] = useState(fontFamilyOptions[0]);
  const [fontSize, setFontSize] = useState(fontSizeOptions[0]);
  const [fontColor, setFontColor] = useState(fontColors[0]);
  const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0]);
  const [contentWidth, setContentWidth] = useState(contentWidthArr[0]);

  useEffect((): (() => void) => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    setArticleState({
      fontFamilyOption: fontFamily,
      fontSizeOption: fontSize,
      fontColor: fontColor,
      backgroundColor: backgroundColor,
      contentWidth: contentWidth,
    });
  };

  const handleReset = (): void => {
    setFontFamily(defaultArticleState.fontFamilyOption);
    setFontSize(defaultArticleState.fontSizeOption);
    setFontColor(defaultArticleState.fontColor);
    setBackgroundColor(defaultArticleState.backgroundColor);
    setContentWidth(defaultArticleState.contentWidth);

    setArticleState(defaultArticleState);
  };

  return (
    <div ref={formRef}>
      <ArrowButton isOpen={isOpen} onClick={() => setIsOpen((open) => !open)} />

      <aside
        inert={!isOpen}
        className={clsx(styles.container, {
          [styles.container_open]: isOpen,
        })}
      >
        <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
          <Text as="h2" size={31} weight={800} uppercase>
            Artikel gestalten
          </Text>

          <Select
            title="Schriftart"
            selected={fontFamily}
            options={fontFamilyOptions}
            onChange={setFontFamily}
          />

          <RadioGroup
            name="font-size"
            title="Schriftgröße"
            selected={fontSize}
            options={fontSizeOptions}
            onChange={setFontSize}
          />

          <Select
            title="Schriftfarbe"
            selected={fontColor}
            options={fontColors}
            onChange={setFontColor}
          />
          <Separator />
          <Select
            title="Hintergrundfarbe"
            selected={backgroundColor}
            options={backgroundColors}
            onChange={setBackgroundColor}
          />

          <Select
            title="Artikelbreite"
            selected={contentWidth}
            options={contentWidthArr}
            onChange={setContentWidth}
          />

          <div className={styles.bottomContainer}>
            <Button title="Zurücksetzen" htmlType="reset" type="clear" />
            <Button title="Anwenden" htmlType="submit" type="apply" />
          </div>
        </form>
      </aside>
    </div>
  );
};
