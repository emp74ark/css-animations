import React from 'react';

import './App.css';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomeComponent} from './pages/home/home.component';
import {SpinnersComponent} from './pages/spinners/spinners.component';
import {UfoComponent} from './pages/ufo/ufo.component';
import {SlidersComponent} from './pages/sliders/sliders.component';

function App() {
  return (
      <BrowserRouter>
        <HeaderComponent />
        <main>
          <Routes>
            <Route key={'Home'} path={'/'} element={<HomeComponent />} />
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
