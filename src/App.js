import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import api from './services/api';

import './styles.css';
import {Link} from "react-router-dom";


const App = () => {

  const [darkModeActived, setDarkModeActived] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (darkModeActived) {
      root.style.setProperty('--color-bg-main', '#000');
      root.style.setProperty('--color-bg-items', '#444');
      root.style.setProperty('--color-font-standard', '#FFF');
      root.style.setProperty('--color-font-feature', 'rgb(231, 212, 28)');
    } else {
      root.style.setProperty('--color-bg-main', '#CCC');
      root.style.setProperty('--color-bg-items', '#FFF');
      root.style.setProperty('--color-font-standard', '#000');
      root.style.setProperty('--color-font-feature', 'rgb(88, 90, 155)');
    }
  }, [darkModeActived]);

  return (
    <div className="App">
      <h1 className="title">Star Wars</h1>

      <div className="btns-introduction d-flex justify-content-around">
        <Link to={"/register"}>
          <button type="button" className="btn btn-primary btn-lg">Introduce myself</button>
        </Link>
        <Link to={"/login"}>
          <button type="button" className="btn btn-primary btn-lg">Explore</button>
        </Link>
      </div>

      {/* <Header
        darkModeActived={darkModeActived}
        changeTheme={() => setDarkModeActived(!darkModeActived)}
      /> */}
    </div>
  );
};


export default App;
