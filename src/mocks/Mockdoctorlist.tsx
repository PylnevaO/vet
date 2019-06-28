import {IDoctor} from '../components/docpage/Doctorcard';

const mockDoctorList: IDoctor[] = Array.from({length: 3},(x, i)=>({
    doctor_ID: i,
    doctor_name: 'Steeven',
    doctor_secondname: 'Stange',
    specialty: 'surgeon'
})); 

export default mockDoctorList;