import {IClient} from '../components/clientpage/Client';

const mockClientList: IClient[] = Array.from({length: 2},(x, i)=>({
    adress: 'Soho',
    avatar: null,
    client_ID: i,
    name: 'Kate',
    phone: '90394123123',
    second_name: 'Fell' 
})); 

export default mockClientList;