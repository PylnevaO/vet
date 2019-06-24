import * as React from 'react';
import './Loginpage.scss';

class RegTable extends React.Component{
  public render() {
    return(
        <div className="Reg-table-contaimer">
        <p className="Reg-table-title">Регестрация</p>
        <form className="Reg-table-form">
        <input type="text" placeholder="Почта"/>
        <input type="text" placeholder="Пароль"/>
        <input type="text" placeholder="Логин" />
        <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

export default RegTable;