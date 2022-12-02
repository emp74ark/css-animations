import {FC} from 'react';
import style from './spinnerRounded.module.css';
export const SpinnerRounded: FC = () => {
  return(
      <>
        <h2>Rounded</h2>
        <div className={style.spinner}></div>
      </>
  );
}