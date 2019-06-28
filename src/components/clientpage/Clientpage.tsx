import * as React from 'react';
import mockClientList from '../../mocks/Mockclientcard'
import mockDiagnosisList from '../../mocks/Mockdiagnosislist'
import mockPetList from '../../mocks/Mockpetlist'
import DiagnosCardMini from '../diagnosis/DiagnosCardMini'
import Petlist from '../pets/Petslist'
import Clientcard, { IClient } from './Clientcard'   
import './Clientpage.scss';

const currentID: number = 1;

let index: number=0;
while (mockClientList[index].client_ID!==currentID){
  index++;
}
const currentClient: IClient = mockClientList[index];
class Clientpage extends React.Component {
  public render() {
    return (
      <div className="Client-page-container">
        <div className="Client-page-right-container">
          <Clientcard client={currentClient}/>
          <Petlist pets={mockPetList} currentID={currentID}/>
          </div>
          <DiagnosCardMini diagnosis={mockDiagnosisList} pets= {mockPetList} currentID={currentID} isUser={1}/>
      </div>
    );
  }
}

export default Clientpage;