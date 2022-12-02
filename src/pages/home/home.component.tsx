import {FC} from 'react';
import style from './home.module.css';

export const HomeComponent: FC = () => {
  return(
      <>
        <section className={style.section} id="home">
          <h1 className={style.greeting}>Welcome</h1>
          <a href="#skills">
            <div className={style.arrow_up} />
          </a>
        </section>
        <section className={style.section} id="skills">
          <a href="#">
            <div className={style.arrow_down} />
          </a>
          <ul className={style.skills}>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>Angular</li>
            <li>React</li>
          </ul>
        </section>
      </>
  );
}