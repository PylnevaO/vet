import * as React from 'react';
import './Doctorpage.scss'

export interface IDoctor{
  doctor_ID: number;
  doctor_name: string;
  doctor_secondname: string;
  specialty: string;
  petlist: any;
  diagnosislist: any;
}

class Doctorcard extends React.Component {
  public render() {
    return (
      <div className="Doctor-card-container">
        мяу 
      </div>
    );
  }
}

export default Doctorcard;