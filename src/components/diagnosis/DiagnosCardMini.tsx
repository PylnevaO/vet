import * as React from 'react';
import {IDiagnos} from '../diagnosis/Diagnosiscard';
import './Diagnosis.scss';


interface IDiagnosCardMiniProps {
    diagnosis: IDiagnos[];
    currentID: number;
    isDoctor: boolean;
}

// tslint:disable-next-line: no-empty-interface
interface IDiagnosCardMiniState {
}

class DiagnosCardMini extends React.Component<IDiagnosCardMiniProps, IDiagnosCardMiniState>{ // отображение миниатюр диагнозов на странице доктора 
    public render( ){
        const myDiagnosis = (this.props.isDoctor)? this.props.diagnosis.filter(diagnos =>diagnos.doctor_ID === this.props.currentID):
            this.props.diagnosis.filter(diagnos =>diagnos.clent_ID === this.props.currentID);
        return(
            <div className="Diagnos-block">
                {myDiagnosis.map((item)=>(<div className="Diagnos-block-items">
                                                        <div>{item.pet_ID}</div>
                                                        <div>{item.diagnos}</div>
                                                    </div> ))}
            </div>
        );
    }
}

export default DiagnosCardMini;