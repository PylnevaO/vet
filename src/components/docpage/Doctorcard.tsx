import * as React from 'react';
import './Doctorpage.scss'

export interface IDoctor{
  doctor_ID: number;
  doctor_name: string;
  doctor_secondname: string;
  specialty: string;
}

interface IDoctorcardProps{
  doctor: IDoctor;
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