import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = (): React.JSX.Element => {
  return (
    <>
      <ArrowButton isOpen={false} onClick={() => undefined} />
      <aside className={styles.container}>
        <form className={styles.form}>
          <div className={styles.bottomContainer}>
            <Button title="Zurücksetzen" htmlType="reset" type="clear" />
            <Button title="Anwenden" htmlType="submit" type="apply" />
          </div>
        </form>
      </aside>
    </>
  );
};
