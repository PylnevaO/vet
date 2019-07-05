import * as React from 'react';
import logo from '../../images/logo.png';
import './Mheader.scss';


class Mheader extends React.Component {
  public render() {
    return (
      <div className="Header-container">
        <header className="Header">
          <a href="/">
            <img src={logo} className="Header-logo" alt="logo"/>
          </a>
          <p className="Header-titel">Dr. Pounce-A-Lot</p>
          <a className="Header-enter" href="/login"> Войти </a>
          <a className="Header-pets" href="/petlist"> Все пациенты </a>
        </header>
      </div>
    );
  }
}

export default Mheader;