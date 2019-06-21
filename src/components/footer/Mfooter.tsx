import * as React from 'react';
import './Mfooter.scss';


class Mfooter extends React.Component {
  public render() {
    return (
      <div className="Footer-container">
        <footer className="Footer">
          <div className="Footer-info">
            <p className="Footer-info-elem">may-help@pouncealot.ru</p>
            <p className="Footer-info-elem">8-800-000-00</p>
            <p className="Footer-info-elem">г.Воронеж, ул. Рыжего котика, д.15</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Mfooter;