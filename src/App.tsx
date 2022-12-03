import React from 'react';

import './App.css';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomeComponent} from './pages/home/home.component';
import {SpinnersComponent} from './pages/spinners/spinners.component';
import {UfoComponent} from './pages/ufo/ufo.component';
import {SlidersComponent} from './pages/sliders/sliders.component';
import {CardsComponent} from './pages/cards/cards.component';
import {CardShadow} from './components/card/cardShadow';
import {CardFlip} from './components/card/cardFlip';

function App() {
  return (
      <BrowserRouter>
        <HeaderComponent />
        <main>
          <Routes>
            <Route key={'Home'} path={'/'} element={<HomeComponent />} />
            <Route key={'Cards'} path={'/cards'} element={<CardsComponent />} />
            <Route key={'ShadowCards'} path={'/cards/shadow'} element={<CardShadow />} />
            <Route key={'FlipCards'} path={'/cards/flip'} element={<CardFlip />} />
            <Route key={'Sliders'} path={'/sliders'} element={<SlidersComponent />} />
            <Route key={'Spinners'} path={'/spinners'} element={<SpinnersComponent />} />
            <Route key={'UFO'} path={'*'} element={<UfoComponent />} />
          </Routes>
        </main>
        <FooterComponent />
      </BrowserRouter>
  );
}

export default App;
