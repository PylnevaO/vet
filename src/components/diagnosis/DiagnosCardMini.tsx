import * as React from 'react';
import {IDiagnos} from '../diagnosis/Diagnosiscard';
import {IPet} from '../pets/Petcard'
import './Diagnosis.scss';



interface IDiagnosCardMiniProps {
    diagnosis: IDiagnos[];
    pets: IPet[];
    currentID: number;
    isUser: number; // показывает где вызван компонент: 1 - стр. клиента, 2 - стр. доктора, другое (3) - стр. животного
}

// tslint:disable-next-line: no-empty-interface
interface IDiagnosCardMiniState {
}

class DiagnosCardMini extends React.Component<IDiagnosCardMiniProps, IDiagnosCardMiniState>{ // отображение миниатюр диагнозов на странице доктора 
    public render( ){
        const myDiagnosis = (this.props.isUser === 2)? this.props.diagnosis.filter(diagnos =>diagnos.doctor_ID === this.props.currentID):
            (this.props.isUser ===1)? this.props.diagnosis.filter(diagnos =>diagnos.clent_ID === this.props.currentID):
            this.props.diagnosis.filter(diagnos =>diagnos.pet_ID === this.props.currentID);
    
        const findPet = (index: number) => {// для отображения имени петомца по его ID
            let j: number=0;
            while(this.props.pets[j].pet_ID===index){j++;}
            return this.props.pets[j].pet_name;
        }
        
        return(
            <div className="Diagnos-block">
                {myDiagnosis.map((item)=>(<div className="Diagnos-block-items">
                                                        <div>{findPet(item.pet_ID)}</div>
                                                        <div>{item.diagnos}</div>
                                                    </div> ))}
            </div>
        );
    }
}

export default DiagnosCardMini;