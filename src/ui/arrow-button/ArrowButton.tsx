import { clsx } from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Funktion zum Öffnen und Schließen des Formulars */
export type OnClick = () => void;

type ArrowButtonProps = {
  isOpen: boolean;
  onClick: OnClick;
};

export const ArrowButton = ({
  isOpen,
  onClick,
}: ArrowButtonProps): React.JSX.Element => {
  return (
    /* Für interaktive Elemente role und aria-label angeben */
    <button
      type="button"
      aria-expanded={isOpen}
      aria-label="Artikeleinstellungen öffnen oder schließen"
      className={clsx(styles.container, { [styles.container_open]: isOpen })}
      onClick={onClick}
    >
      <img
        src={arrow}
        alt="Pfeilsymbol"
        className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
      />
    </button>
  );
};
