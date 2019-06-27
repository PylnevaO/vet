import * as React from 'react';
import MockDiagnosisList from '../../mocks/Mockdiagnosislist'
import MockPetList from '../../mocks/Mockpetlist'
import DiagnosCardMini from '../diagnosis/DiagnosCardMini'
import Petlist from '../pets/Petslist'
import Clientcard from './Clientcard'   
import './Clientpage.scss';

const currentID: number = 1;

class Clientpage extends React.Component {
  public render() {
    return (
      <div className="Client-page-container">
        <div className="Client-page-right-container">
          <Clientcard/>
          <Petlist pets={MockPetList} currentID={currentID}/>
          </div>
          <DiagnosCardMini diagnosis={MockDiagnosisList} currentID={currentID} isDoctor={false}/>
      </div>
    );
  }
}

export default Clientpage;