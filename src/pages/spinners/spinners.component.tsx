import {FC} from 'react';
import {SpinnerRounded} from '../../components/spinner/spinnerRounded';
import {SpinnerPulse} from '../../components/spinner/spinnerPulse';
import {SpinnerCubic} from '../../components/spinner/spinnerCubic';
import style from './spinners.module.css';

export const SpinnersComponent: FC = () => {
  return(
      <>
        <h1>Spinners</h1>
        <div className={style.spinners}>
          <SpinnerRounded />
          <SpinnerPulse />
          <SpinnerCubic />
        </div>
      </>
  );
}