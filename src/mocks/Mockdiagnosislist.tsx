import {IDiagnos} from '../components/diagnosis/Diagnos'

const mockDiagnosisList: IDiagnos[] = Array.from({length: 2},(x, i)=>({
    clent_ID: 1,
    date: new Date (2018, 9, 5),
    description: 'Профилактическая проверка и вакцинация. Животное здорово.',
    diagnos: 'Здоров',
    diagnos_ID: i,
    doctor_ID: 2,
    pet_ID: 2
})); 

export default mockDiagnosisList;