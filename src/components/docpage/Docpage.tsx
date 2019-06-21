import * as React from 'react';
import './Docpage.scss';


class Docpage extends React.Component {
  public render() {
    return (
      <div className="Main-page-container">
        <body className="Main-page">
          <div className="Buttom-bar">
              Страница доктора
          </div>
        </body>
      </div>
    );
  }
}

export default Docpage;