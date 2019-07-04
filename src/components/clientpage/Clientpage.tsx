import * as React from 'react';
import mockClientList from '../../mocks/Mockclientcard'
import mockDiagnosisList from '../../mocks/Mockdiagnosislist' 
import {mockPetList} from '../../mocks/Mockpetlist'
import {IClient} from '../clientpage/Client'
import { IDiagnos } from '../diagnosis/Diagnos';
import DiagnosCardMini from '../diagnosis/DiagnosCardMini'
import Ownerspets from '../pets/Ownerspets'
import Clientcard from './Clientcard'   
import './Clientpage.scss';


interface IClientPageProps{
  currentID: number;
}

interface IClientPageState{
  currentID: number;
  currentClient: Partial<IClient>,
  currentDiagnosis: IDiagnos[]
}

class Clientpage extends React.Component<IClientPageProps,IClientPageState> {
  public static getDerivedStateFromProps(props: IClientPageProps){
    // здесь будет присвоение id из пропсов
    const tmpcurrentID: number = 1;
    const tmpscurrentClient: IClient = mockClientList.filter(client => client.client_ID===tmpcurrentID)[0];
    const tmpscurrentDiagnosis: IDiagnos [] = mockDiagnosisList.filter( diagnos => diagnos.clent_ID===tmpcurrentID)
    return{ currentID: tmpcurrentID, currentClient: tmpscurrentClient, currentDiagnosis: tmpscurrentDiagnosis}
  }

  public render() {
    return (
      <div className="Client-page-container">
        <div className="Client-page-right-container">
          <Clientcard client={this.state.currentClient}/>
          <Ownerspets pets={mockPetList} currentID={this.state.currentID}/>
          </div>
          <DiagnosCardMini diagnosis={this.state.currentDiagnosis} pets= {mockPetList}/>
      </div>
    );
  }
}

export default Clientpage;