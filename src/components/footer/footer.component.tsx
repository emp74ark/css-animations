import {FC} from 'react';
import style from './footer.module.css';

export const FooterComponent: FC = () => {
  return(
      <footer>
        <a className={style.github} href="https://github.com/emp74ark" target={'_blank'} rel={'noreferrer'}>emp74ark</a>
      </footer>
  );
}