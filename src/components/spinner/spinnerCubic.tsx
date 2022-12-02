import {FC} from 'react';
import style from './spinnerCubic.module.css';
export const SpinnerCubic: FC = () => {
  return(
      <>
        <h2>Cubic</h2>
        <div className={style.spinner}>
          <div className={style.inner}></div>
        </div>
      </>
  );
}