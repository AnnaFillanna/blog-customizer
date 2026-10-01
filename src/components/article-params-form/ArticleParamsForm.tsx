import { clsx } from 'clsx';
import { useState, useEffect, useRef } from 'react';
import {
  defaultArticleState,
  fontFamilyOptions,
  fontSizeOptions,
  fontColors,
  backgroundColors,
  contentWidthOptions,
} from 'src/constants/articleProps';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { Text } from 'src/ui/text';

import type { ArticleStateType } from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = ({
  setArticleState,
}: {
  setArticleState: React.Dispatch<React.SetStateAction<ArticleStateType>>;
}): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [fontFamily, setFontFamily] = useState(fontFamilyOptions[0]);
  const [fontSize, setFontSize] = useState(fontSizeOptions[0]);
  const [fontColor, setFontColor] = useState(fontColors[0]);
  const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0]);
  const [contentWidth, setContentWidth] = useState(contentWidthOptions[0]);

  useEffect((): (() => void) => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
    <>
      <ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      <aside
        className={clsx(styles.container, {
          [styles.container_open]: isOpen,
        })}
      >
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          onReset={handleReset}
          ref={formRef}
        >
          <Text size={31} weight={800} uppercase>
            Задайте параметры
          </Text>

          <Select
            title="Шрифт"
            selected={fontFamily}
            options={fontFamilyOptions}
            onChange={setFontFamily}
          />

          <Select
            title="Размер шрифта"
            selected={fontSize}
            options={fontSizeOptions}
            onChange={setFontSize}
          />

          <Select
            title="Цвет шрифта"
            selected={fontColor}
            options={fontColors}
            onChange={setFontColor}
          />

          <Select
            title="Цвет фона"
            selected={backgroundColor}
            options={backgroundColors}
            onChange={setBackgroundColor}
          />

          <Select
            title="Ширина контента"
            selected={contentWidth}
            options={contentWidthOptions}
            onChange={setContentWidth}
          />

          <div className={styles.bottomContainer}>
            <Button title="Сбросить" htmlType="reset" type="clear" />
            <Button title="Применить" htmlType="submit" type="apply" />
          </div>
        </form>
      </aside>
    </>
  );
};
