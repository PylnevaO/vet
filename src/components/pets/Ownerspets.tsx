import * as React from 'react';
import {IPet} from './Pet'
import './Pet.scss'

interface IPetListProps{
    pets: IPet[];
    currentID: number;
}

// tslint:disable-next-line: no-empty-interface
interface IPetListState{
}

class Ownerspets extends React.Component<IPetListProps, IPetListState>{ // отображается на странице клиента 
    public render(){
        const myPets =  this.props.pets.filter(pet =>pet.client_ID === this.props.currentID);
        return(
            <div className="Owner-pets-container">
                <div className="Title">Животные:</div>
                <div>{myPets.map((item)=>(<div>
                        <div>{item.pet_name}</div>
                        <div>{item.pet_age}</div>
                    </div>))}
                </div>
            </div>
               
        );
    }
}

export default Ownerspets;