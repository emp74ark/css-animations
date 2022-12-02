import {FC} from 'react';
import style from './header.module.css';
import {NavLink} from 'react-router-dom';

export const HeaderComponent: FC = () => {
  return(
      <header>
        <h2 className={style.logo}>CSS Animations</h2>
        <nav>
          <ul>
            <li className={style.navlink}><NavLink to={'/'}>Home</NavLink></li>
            <li className={style.navlink}><NavLink to={'/sliders'}>Sliders</NavLink></li>
            <li className={style.navlink}><NavLink to={'/spinners'}>Spinners</NavLink></li>
          </ul>
        </nav>
      </header>
  );
}