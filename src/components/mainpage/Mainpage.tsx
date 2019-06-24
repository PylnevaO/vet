import * as React from 'react';
import firstcat from '../../images/1.jpg'
import secondcat from '../../images/2.jpg'
import './Mainpage.scss';

class Mainpage extends React.Component {
  public render() {
    return (
      <div className="Main-page-container">
        <body className="Main-page">
          <p>Наши специалисты:</p>
          <div className="Main-page-pic-bar">
            <img src={firstcat} className="Cat" alt="Cat" />
            <img src={secondcat} className="Cat" alt="Cat" />
          </div>
        </body>
      </div>
    );
  }
}

export default Mainpage;