import * as React from 'react';
import { RouteComponentProps } from 'react-router'
import mockDiagnosisList from 'src/mocks/Mockdiagnosislist';
import mockDoctorList from '../../mocks/Mockdoctorlist'
import {mockPetList} from '../../mocks/Mockpetlist'
import {IDoctor} from '../docpage/Doctor'
import {IPet} from '../pets/Pet'
import { IDiagnos } from './Diagnos';

// tslint:disable-next-line: interface-over-type-literal
type TParams = { id: string };

interface IDiagnosviewProps extends RouteComponentProps<TParams>{
}

// tslint:disable-next-line: no-empty-interface
interface IDiagnosviewState{
    currentPet: Partial<IPet>,
    currentDoctor: Partial<IDoctor>
    currentDiagnos: Partial<IDiagnos>
}

class Diagnosview extends React.Component<IDiagnosviewProps, IDiagnosviewState> {
    public static getDerivedStateFromProps(props: IDiagnosviewProps){
        const tmpcurrentID: number = props.match.params.id ? Number (props.match.params.id): 2;
        const tmpcurrentDiagnos: IDiagnos = mockDiagnosisList.filter(diagnos => diagnos.diagnos_ID===tmpcurrentID)[0];
        const tmpcurrentpet : IPet = mockPetList.filter(pet => pet.pet_ID===tmpcurrentDiagnos.pet_ID)[0];
        const tmpcurrentdoctor: IDoctor = mockDoctorList.filter(doctor => doctor.doctor_ID===tmpcurrentDiagnos.diagnos_ID)[0];
        return {currentPet: tmpcurrentpet, currentDoctor: tmpcurrentdoctor, currentDiagnos: tmpcurrentDiagnos}
    }
    constructor(props: Readonly<IDiagnosviewProps>){
        super(props);
        this.state={
            currentDiagnos: {},
            currentDoctor: {},
            currentPet: {},
            
        }
    }

    public render(){
        return(
            <div className="Diagnos-view-container">
                <div className="Diagnos-card-container">
                    <div className="Diagnos-card-elems">
                        <div>Животное: </div>
                        <div>Кличка: </div>
                        <div>{this.state.currentPet.pet_name}</div>
                        <div>Возраст: </div>
                        <div>{this.state.currentPet.pet_age}</div>
                    </div>
                    <div className="Diagnos-card-elems">
                        <div>Диагноз:</div>
                        <div>{this.state.currentDiagnos.diagnos}</div>
                    </div>
                    <div className="Diagnos-card-elems">
                        <div>Описание:</div>
                        <div>{this.state.currentDiagnos.description}</div>
                    </div>
                    <div className="Diagnos-card-elems">
                        <div>Доктор:</div>
                        <div>{this.state.currentDoctor.doctor_name}{this.state.currentDoctor.doctor_secondname}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Diagnosview;