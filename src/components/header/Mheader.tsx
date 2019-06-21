import * as React from 'react';
import logo from '../../images/logo.png';
import './Mheader.scss';


class Mheader extends React.Component {
  public render() {
    return (
      <div className="Header-container">
        <header className="Header">
          <a href="/main">
            <img src={logo} className="Header-logo" alt="logo"/>
          </a>
          <p className="Header-titel">Dr. Pounce-A-Lot</p>
        </header>
      </div>
    );
  }
}

export default Mheader;