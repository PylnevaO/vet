import {IClientCard} from '../components/clientpage/Clientcard';

const MockClientList: IClientCard[] = Array.from({length: 2},(x, i)=>({
    adress: 'Soho',
    avatar: null,
    client_ID: i,
    name: 'Kate',
    petlist: null,
    phone: '90394123123',
    second_name: 'Fell' 
})); 

export default MockClientList;