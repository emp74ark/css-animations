import {FC} from 'react';
import {cards} from './cards.list';
import style from './cardFlip.module.css';

export const CardFlip: FC = () => {
  return (
      <div className={style.wrapper}>
        {cards.map(card => (
            <div className={style.card}>
              <div className={style.card__front}>
                <span className={style.title}>{card.name}</span>
                <img src={card.img} alt={card.name} />
                <span className={style.description}>{card.description}</span>
              </div>
              <div className={style.card__back}>
                <a href={card.url} target={'_blank'}
                   rel={'noreferrer'}>Link</a>
              </div>
            </div>
        ))}
      </div>
  );
}