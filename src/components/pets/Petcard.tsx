import * as React from 'react';
import './Clientpage.scss';
// import 

export interface IPet{
    pet_ID: number;
    client_ID: number;
    pet_name: string;
    pet_age: number;
    diagnoslist: any;
}

class Petcard extends React.Component{
    public render(){
        return(
            <div className="Pet-card-container">
                <div className="Title">Бобик</div>
            </div>
               
        );
    }
}

export default Petcard;