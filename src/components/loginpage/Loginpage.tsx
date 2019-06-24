import * as React from 'react';
import './Loginpage.scss';
import LoginTable from './LoginTable';
import RegTable from './RegTable';

class Loginpage extends React.Component {
  public render() {
    return (
      <div className="Login-container">
        <div className="Doc-bar-container">
          <p className="Doc-bar-text">Вы доктор?</p>
          <a href="/docpage">Вам сюда</a>
        </div>
        <div className="Log-Reg-Tab">
          <LoginTable/>
          <RegTable/>
        </div>
      </div>
    );
  }
}

export default Loginpage;