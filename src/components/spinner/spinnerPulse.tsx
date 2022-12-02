import {FC} from 'react';
import style from './spinnerPulse.module.css';
export const SpinnerPulse: FC = () => {
  return(
      <>
        <h2>Pulsatory</h2>
        <div className={style.spinner}></div>
      </>
  );
}