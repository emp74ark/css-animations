import {FC} from 'react';
import {NavLink} from 'react-router-dom';
import style from './cards.module.css';

export const CardsComponent: FC = () => {
  return (
      <>
        <h1>Cards</h1>
        <div className={style.cards__list}>
          <NavLink to={'/cards/shadow'}>Shadow cards</NavLink>
          <NavLink to={'/cards/flip'}>Flip cards</NavLink>
        </div>
      </>
  );
}