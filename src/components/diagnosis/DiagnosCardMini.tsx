import * as React from 'react'
import {Link} from "react-router-dom"
import {IPet} from '../pets/Pet'
import {IDiagnos} from './Diagnos';
import './Diagnosis.scss'

// tslint:disable-next-line: interface-over-type-literal
interface IDiagnosCard {
    name: string,
    pet_id: number, // номер диагноза
    diag_id: number,
    diagnos: string
}

interface IDiagnosCardMiniProps {
    diagnosis: IDiagnos[];
    pets: IPet[];
}

interface IDiagnosCardMiniState {
    petAndDiagnosis:  IDiagnosCard[];
}

class DiagnosCardMini extends React.Component <IDiagnosCardMiniProps, IDiagnosCardMiniState>{ // отображение миниатюр диагнозов на страницах доктора, петомца и кшлиента 
    constructor(props: Readonly<IDiagnosCardMiniProps>){
      super(props);
      this.state={
        petAndDiagnosis : []
      }  
    }
    public componentDidMount(){
        
        const tmp: IDiagnosCard[] = [];
// tslint:disable-next-line: prefer-for-of
        for(let i=0; i<this.props.diagnosis.length; i++){
            tmp.push ({diag_id: this.props.diagnosis[i].diagnos_ID,
                        diagnos : this.props.diagnosis[i].diagnos, 
                        name : this.props.pets.filter(pet => pet.pet_ID===this.props.diagnosis[i].pet_ID)[0].pet_name,
                        pet_id: this.props.diagnosis[i].pet_ID,
                        
                         }) // этот фильтр всегда будет давать только один элемент массива
        }
        this.setState({petAndDiagnosis: tmp});
    }
    public render( ){
        

        return(
            <div className="Diagnos-block">
                {this.state.petAndDiagnosis.map((item) => (<div className="Diagnos-block-items">
                    <Link to={`/petpage/${item.pet_id}`}>{item.name}</Link>
                    <div>{item.diagnos}</div>
                </div>))}           
            </div>
        );
    }
}

export default DiagnosCardMini;