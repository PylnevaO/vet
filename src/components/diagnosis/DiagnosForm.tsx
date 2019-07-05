import * as React from 'react';
import {ChangeEvent} from 'react'
import { RouteComponentProps } from 'react-router'
import mockDiagnosisList from 'src/mocks/Mockdiagnosislist';
import mockDoctorList from '../../mocks/Mockdoctorlist'
import {mockPetList} from '../../mocks/Mockpetlist'
import {IDoctor} from '../docpage/Doctor'
import {IPet } from '../pets/Pet'
import { IDiagnos } from './Diagnos';

// tslint:disable-next-line: interface-over-type-literal
type TParams = { id: string };

interface IDiagnosformProps extends RouteComponentProps<TParams>{
}

// tslint:disable-next-line: no-empty-interface
interface IDiagnosformState{
    currentPet: Partial<IPet>,
    currentDoctor: Partial<IDoctor>
    currentDiagnos: Partial<IDiagnos>
}

class Diagnosform extends React.Component <IDiagnosformProps, IDiagnosformState>{
    public static getDerivedStateFromProps(props: IDiagnosformProps){
        const tmpcurrentID: number = props.match.params.id ? Number (props.match.params.id): 2;
        const tmpcurrentDiagnos: IDiagnos = mockDiagnosisList.filter(diagnos => diagnos.diagnos_ID===tmpcurrentID)[0];
        const tmpcurrentpet : IPet = mockPetList.filter(pet => pet.pet_ID===tmpcurrentDiagnos.pet_ID)[0];
        const tmpcurrentdoctor: IDoctor = mockDoctorList.filter(doctor => doctor.doctor_ID===tmpcurrentDiagnos.diagnos_ID)[0];
        return {currentPet: tmpcurrentpet, currentDoctor: tmpcurrentdoctor, currentDiagnos: tmpcurrentDiagnos}
    }

    private diagnos: string | undefined;
    private bindeonDiagnosChange = this.onDiagnosChange.bind(this)
    constructor(props: Readonly<IDiagnosformProps>){
        super(props);
        this.state={
            currentDiagnos: {},
            currentDoctor: {},
            currentPet: {},
            
        }
    }
    public render(){
        return(
            <div className="Diagnos-form-container">
                <div className="Diagnos-form-card-container">
                    <div className="Diagnos-form-card-elems">
                        <div>Животное: </div>
                        <div>Кличка: </div>
                        
                        <div>{this.state.currentPet.pet_name}</div>
                        <div>Возраст: </div>
                        <div>{this.state.currentPet.pet_age}</div>
                    </div>
                    <div className="Diagnos-form-card-elems">
                        <div>Диагноз:</div>
                        <input type="text" value={this.state.currentDiagnos.diagnos} onChange={this.bindeonDiagnosChange}/>
                    </div>
                    <div className="Diagnos-form-card-elems">
                        <div>Описание:</div>
                        <input type="text" value={this.state.currentDiagnos.description} />
                    </div>
                    <div className="Diagnos-form-card-elems">
                        <div>Доктор:{this.diagnos}
                        </div>
                        <div>{this.state.currentDoctor.doctor_name}{this.state.currentDoctor.doctor_secondname}</div>
                    </div>
                </div>
            </div>
        );
    }
    private onDiagnosChange(event: ChangeEvent<HTMLInputElement>): void {
        this.diagnos = event.target.value;
    }

    // private onDescriptionChange(event: ChangeEvent<HTMLInputElement>): void{

    // }

}

export default  Diagnosform;