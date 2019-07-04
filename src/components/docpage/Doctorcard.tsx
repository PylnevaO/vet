import * as React from 'react';
import {IDoctor} from './Doctor'
import './Doctorpage.scss'


interface IDoctorcardProps{
  doctor: Partial<IDoctor>;
}

// tslint:disable-next-line: no-empty-interface
interface IDoctorcardStand{}

class Doctorcard extends React.Component<IDoctorcardProps, IDoctorcardStand> {
  public render() {
    return (
      <div className="Doctor-card-container">
        <div className="Title">Доктор:</div>
                <div className="Name">{this.props.doctor.doctor_name}</div>
                <div className="Second-name">{this.props.doctor.doctor_secondname}</div>
                <div className="Specialty">{this.props.doctor.specialty}</div>
      </div>
    );
  }
}

export default Doctorcard;