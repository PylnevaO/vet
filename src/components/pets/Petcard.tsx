import * as React from 'react';
import {IClient} from '../clientpage/Client'
import {IPet} from './Pet'
import './Pet.scss'

interface IPetcardProps{
    pet: Partial<IPet>;
    client: Partial<IClient>;
}

// tslint:disable-next-line: no-empty-interface
interface IPetcardState{}

class Petcard extends React.Component<IPetcardProps, IPetcardState>{ // отображается на странице животного
    public render(){
        return(
            <div className="Pet-card-container">
                <div className="Title">Животное:</div>
                <div>
                    <div>{this.props.pet.pet_name}</div>
                    <div>{this.props.pet.pet_age}</div>
                    <div>{this.props.client.name} {this.props.client.second_name}</div> 
                    <div>{this.props.client.phone}</div>                
                </div>

            </div>
               
        );
    }
}

export default Petcard;