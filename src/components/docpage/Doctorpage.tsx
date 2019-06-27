import * as React from 'react';
import MockDiagnosisList from '../../mocks/Mockdiagnosislist'
import DiagnosCardMini from '../diagnosis/DiagnosCardMini'
import Doctorcard from './Doctorcard'
import './Doctorpage.scss';

const currentID: number = 2;

class Docpage extends React.Component {

  public render() {
    return (
      <div className="Doctor-page-container">
          <Doctorcard/>
          <DiagnosCardMini  diagnosis={MockDiagnosisList} currentID={currentID} isDoctor={true}/>
      </div>
    );
  }
}

export default Docpage;