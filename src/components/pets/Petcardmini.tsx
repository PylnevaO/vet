import * as React from 'react';
import {Link} from "react-router-dom"
import {IPet} from "./Pet"
import './Pet.scss'

interface IPetcardminiProps{
    pet: IPet;
}

// tslint:disable-next-line: no-empty-interface
interface IPetcardminiState{}

class Petcardmini extends React.Component<IPetcardminiProps, IPetcardminiState>{ // для отображения на странице поиска по всем животным
    public render(){
        return(
            <div className="Pet-card-mini-container">
                <Link to={`/petpage/${this.props.pet.pet_ID}`}>{this.props.pet.pet_name}</Link>
                <div>{this.props.pet.pet_age}</div>
            </div>
        );
    }
}

export default Petcardmini;