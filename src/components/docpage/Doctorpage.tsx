import * as React from 'react';
import mockDiagnosisList from 'src/mocks/Mockdiagnosislist';
import mockDoctorList from '../../mocks/Mockdoctorlist'
import { mockPetList } from '../../mocks/Mockpetlist'
import { IDiagnos } from '../diagnosis/Diagnos';
import DiagnosCardMini from '../diagnosis/DiagnosCardMini'
import {IDoctor} from './Doctor'
import Doctorcard from './Doctorcard'
import './Doctorpage.scss';

// const currentID: number = 2;
// ID  доктора

// tslint:disable-next-line: no-empty-interface
interface IDocpageProps{
  currentID: number;
}

interface IDocpageSate{
  currentDoc:  Partial<IDoctor>,
  currentDiagnosis: IDiagnos[]
}

class Docpage extends React.Component<IDocpageProps, IDocpageSate> {
  public static getDerivedStateFromProps (props: IDocpageProps){
    // здесь будет присвоение id из пропсов
    const currentID: number = 2;
    const tmpcurrentDoc: IDoctor = mockDoctorList.filter( doctor => doctor.doctor_ID === currentID)[0];
    // формируется список животных для передачи в DiagnosCerdMini
    const tmpcurrentDiagnosis: IDiagnos[] = mockDiagnosisList.filter(diagnos => diagnos.doctor_ID === currentID);
    return{ currentDoc: tmpcurrentDoc, currentDiagnosis: tmpcurrentDiagnosis }
  }
  constructor(props: Readonly<IDocpageProps>){
    super(props);
    this.state={
      currentDiagnosis: [],
      currentDoc: {}
    }
  }
  public render() {
    return (
      <div className="Doctor-page-container">
          <Doctorcard doctor={this.state.currentDoc}/>
          <DiagnosCardMini diagnosis={this.state.currentDiagnosis} pets={mockPetList}/> 
      </div>
    );
  }
}

export default Docpage;