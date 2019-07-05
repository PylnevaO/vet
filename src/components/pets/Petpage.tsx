import * as React from 'react';

import { RouteComponentProps } from 'react-router'
import mockClientCard from '../../mocks/Mockclientcard'
import mockDiagnosisList from '../../mocks/Mockdiagnosislist'
import {mockPetList} from '../../mocks/Mockpetlist'
import {IClient} from '../clientpage/Client'
import { IDiagnos } from '../diagnosis/Diagnos'
import DiagnosCardMini from '../diagnosis/DiagnosCardMini'
import {IPet} from './Pet'
import './Pet.scss'
import Petcard from './Petcard'

// tslint:disable-next-line: interface-over-type-literal
type TParams = { id: string };

interface IPetpageProps  extends RouteComponentProps<TParams>{
}

interface IPetpageState{
    currentID: number,
    currentClient: Partial<IClient>,
    currentPet:  Partial<IPet>,
    currentDiagnosis: IDiagnos[];
}

class Petpage extends React.Component<IPetpageProps, IPetpageState>  { // страница конкретного животного
    public static getDerivedStateFromProps(props: IPetpageProps){
        const tmpcurrentID: number = props.match.params.id? Number(props.match.params.id) : 2;
        const tmpcurrentPet: IPet = mockPetList.filter( pet => pet.pet_ID === tmpcurrentID)[0];
        const tmpcurrentClient: IClient = mockClientCard.filter( client => client.client_ID===tmpcurrentPet.client_ID)[0];
        const tmpcurrentDianosis: IDiagnos[] = mockDiagnosisList.filter(diagnos => diagnos.pet_ID===tmpcurrentID);
        return {currentID: tmpcurrentID, currentClient: tmpcurrentClient, currentPet: tmpcurrentPet, currentDiagnosis: tmpcurrentDianosis};   
    }
    
    constructor(props: Readonly<IPetpageProps>){
        super(props);
        this.state={currentClient: {},
                    currentID: 0,
                    currentPet: {},
// tslint:disable-next-line: object-literal-sort-keys
                    currentDiagnosis: []
                    }
    }
    
    public render (){
        return(
            <div className="Pet-page-container">
                <Petcard pet={this.state.currentPet} client={this.state.currentClient}/>
                <DiagnosCardMini diagnosis={this.state.currentDiagnosis} pets={mockPetList}  />
            </div>
        );
    }
}
export default Petpage;