import {IPet} from '../components/pets/Pet';

export const mockPetList: IPet[] = Array.from({length: 10},(x, i)=>({
    client_ID: 1,
    pet_ID: i,
    pet_age: 2,
    pet_name: 'foxy'
})); 

// export mockPetList;
