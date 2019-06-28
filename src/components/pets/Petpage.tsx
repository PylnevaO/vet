import * as React from 'react';
import mockClientCard from '../../mocks/Mockclientcard'
import mockDiagnosisList from '../../mocks/Mockdiagnosislist'
import mockPetList from '../../mocks/Mockpetlist'
import {IClient} from '../clientpage/Clientcard'
import DiagnosCardMini from '../diagnosis/DiagnosCardMini'
import Petcard, { IPet } from './Petcard'
import './Petpage.scss'

const currentID: number = 2;
// номер животного

let index: number=0;
while (mockPetList[index].pet_ID!==currentID){
  index++;
}
const currentPet: IPet = mockPetList[index];

index = 0;
while (mockClientCard[index].client_ID!==currentPet.client_ID){index++;}

const currentClient: IClient =mockClientCard[index];

class Petpage extends React.Component {
    public render (){
        return(
            <div className="Pet-page-container">
                <Petcard pet={currentPet} client={currentClient}/>
                <DiagnosCardMini diagnosis={mockDiagnosisList} pets={mockPetList} currentID={currentID} isUser={3} />
            </div>
        );
    }
}
export default Petpage;