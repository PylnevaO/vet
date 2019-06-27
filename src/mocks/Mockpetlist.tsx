import {IPet} from '../components/pets/Petcard';

const MockPetList: IPet[] = Array.from({length: 10},(x, i)=>({
    client_ID: 1,
    diagnoslist: null,
    pet_ID: i,
    pet_age: 2,
    pet_name: 'foxy'
})); 

export default MockPetList;
