import {FC} from 'react';
import {NavLink} from 'react-router-dom';
import style from './cards.module.css';

export const CardsComponent: FC = () => {
  return (
      <div className={style.cards__list}>
        <NavLink to={'/cards/shadow'}>Shadow cards</NavLink>
      </div>
  );
}