import {FC} from 'react';
import style from './cardShadow.module.css';
import {cards} from './cards.list';

export const CardShadow: FC = () => {
  return (
      <div className={style.wrapper}>
        {cards.map(card => (
            <div className={style.card}>
              <div className={style.card__front}>
                <a href={card.url} target={'_blank'}
                   rel={'noreferrer'}>Link</a>
              </div>
              <div className={style.card__back}>
                <span className={style.title}>{card.name}</span>
                <img src={card.img} alt={card.name} />
                <span className={style.description}>{card.description}</span>
              </div>
            </div>
        ))}
      </div>
  );
}