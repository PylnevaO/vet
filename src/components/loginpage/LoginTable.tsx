import * as React from 'react';
import './Loginpage.scss';

class LoginTable extends React.Component{
  public render() {
    return(
      <div className="Login-table-container">
        <p className="Login-table-title">Вход</p>
        <form className="Login-table-form">
          <input type="text" placeholder="Логин"/>
          <input type="text" placeholder="Пароль"/>
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

export default LoginTable;