import * as React from 'react';
// import mockDiagnosisList from '../../mocks/Mockdiagnosislist'
import mockDoctorList from '../../mocks/Mockdoctorlist'
import { IDiagnos } from '../diagnosis/Diagnos';
// import {mockPetList} from '../../mocks/Mockpetlist'
// import DiagnosCardMini from '../diagnosis/DiagnosCardMini'
import Doctorcard, { IDoctor } from './Doctorcard'
import './Doctorpage.scss';

const currentID: number = 2;
// ID  доктора

// tslint:disable-next-line: no-empty-interface
interface IDocpageProps{
}

interface IDocpageSate{
  diagArray: IDiagnos[]
}


let index: number=0;
while (mockDoctorList[index].doctor_ID!==currentID){
  index++;
}
const currentDoctor: IDoctor = mockDoctorList[index];
// поиск нужного доктора


class Docpage extends React.Component<IDocpageProps, IDocpageSate> {
  constructor(props: IDocpageProps){
    super(props);
  }
  public render() {
    return (
      <div className="Doctor-page-container">
          <Doctorcard doctor={currentDoctor}/>
          {/* <DiagnosCardMini  diagnosis={mockDiagnosisList} pets={mockPetList} currentID={currentID} isUser={2}/> */}
      </div>
    );
  }
}

export default Docpage;