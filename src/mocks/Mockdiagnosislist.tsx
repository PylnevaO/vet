import {IDiagnos} from '../components/diagnosis/Diagnosiscard';

const MockDiagnosisList: IDiagnos[] = Array.from({length: 2},(x, i)=>({
    clent_ID: 1,
    date: new Date (2018, 9, 5),
    description: 'Профилактическая проверка и вакцинация. Животное здорово.',
    diagnos: 'Здоров',
    doctor_ID: 2,
    pet_ID: 4
})); 

export default MockDiagnosisList;