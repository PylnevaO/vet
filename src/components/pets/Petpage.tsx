import * as React from 'react';

import { RouteComponentProps } from 'react-router';
import mockClientCard from '../../mocks/Mockclientcard'
import mockDiagnosisList from '../../mocks/Mockdiagnosislist'
import {mockPetList} from '../../mocks/Mockpetlist'
import {IClient} from '../clientpage/Client'
import { IDiagnos } from '../diagnosis/Diagnos';
import DiagnosCardMini from '../diagnosis/DiagnosCardMini'
import {IPet} from './Pet'
import './Pet.scss'
import Petcard from './Petcard'

// tslint:disable-next-line: interface-over-type-literal
type TParams = { id: string };

interface IPetpageProps  extends RouteComponentProps<TParams>{
}

// interface IDiagnosCard { // для передаи в DiagnosCardMini
//     name: string,
//     id: number, // номер диагноза
//     diagnos: string
// }

// tslint:disable-next-line: no-empty-interface
interface IPetpageState{
    currentID: number,
    currentClient: Partial<IClient>,
    currentPet:  Partial<IPet>,
    index: number
    diagArray: IDiagnos[];
}

class Petpage extends React.Component<IPetpageProps, IPetpageState>  { // страница конкретного животного
    constructor(props: Readonly<IPetpageProps>){
        super(props);
        this.state={currentClient: {},
                    currentID: 0,
                    currentPet: {},
                    index: 0,
// tslint:disable-next-line: object-literal-sort-keys
                    diagArray: []
                    }
    }
    public componentDidMount() {
        this.setState({currentID: this.props.match? Number(this.props.match.params.id) : 2}); 
        let index: number=0;
        while (mockPetList[index].pet_ID!==this.state.currentID){index++;}
        this.setState({currentPet: mockPetList[index]});
        index = 0;
        while (mockClientCard[index].client_ID!==this.state.currentID){index++;}
        this.setState({currentClient: mockClientCard[index]});
        const tmp : IDiagnos[] = mockDiagnosisList.filter(diagnos =>diagnos.doctor_ID === this.state.currentID);
        this.setState({diagArray: tmp});
        
    }
    public render (){
        return(
            <div className="Pet-page-container">
                <Petcard pet={this.state.currentPet} client={this.state.currentClient}/>
                <DiagnosCardMini diagnosis={mockDiagnosisList} pets={mockPetList}  />
            </div>
        );
    }
}
export default Petpage;