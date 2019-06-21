import * as React from 'react';
import './Mainpage.scss';


class Mainpage extends React.Component {
  public render() {
    return (
      <div className="Main-page-container">
        <body className="Main-page">
          <div className="Buttom-bar">
              <div className="Buttom-1">
                <a href="/clientpage"> Кабинет пациента </a>
              </div>
              <div className="Buttom-2">
              <a href="/docpage"> Кабинет доктора </a>
              </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Mainpage;