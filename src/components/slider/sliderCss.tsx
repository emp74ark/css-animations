import {FC} from 'react';
import style from './slider.module.css';
import bg1 from './pexels-jessica-lewis-creative-606545.jpg';
import bg2 from './pexels-jason-villanueva-851555.jpg';
import bg3 from './pexels-johnmark-smith-41135.jpg'

export const SliderCss: FC = () => {
  return (
      <div className={style.container}>
        <h2>Pure CSS slider</h2>
        <div className={style.slider}>
          <div className={style.cards}>
            <div className={style.slide} id="slide_1" style={{backgroundImage: `url(${bg1})`}}>
              <a className={style.prev} href="#slide_3">&lt;</a>
              <span className={style.content}>1</span>
              <a className={style.next} href="#slide_2">&gt;</a>
            </div>
            <div className={style.slide} id="slide_2" style={{backgroundImage: `url(${bg2})`}}>
              <a className={style.prev} href="#slide_1">&lt;</a>
              <span className={style.content}>2</span>
              <a className={style.next} href="#slide_3">&gt;</a>
            </div>
            <div className={style.slide} id="slide_3" style={{backgroundImage: `url(${bg3})`}}>
              <a className={style.prev} href="#slide_2">&lt;</a>
              <span className={style.content}>3</span>
              <a className={style.next} href="#slide_1">&gt;</a>
            </div>
          </div>
          <div className={style.dots}>
            <a href="#slide_1" className={style.dot} />
            <a href="#slide_2" className={style.dot} />
            <a href="#slide_3" className={style.dot} />
          </div>
        </div>
      </div>
  );
}