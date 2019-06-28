import * as React from 'react';
import {IPet} from './Petcard'

interface IPetListProps{
    pets: IPet[];
    currentID: number;
}

// tslint:disable-next-line: no-empty-interface
interface IPetListState{
}

class Petlist extends React.Component<IPetListProps, IPetListState>{ // отображается на странице клиента 
    public render(){
        const myPets =  this.props.pets.filter(pet =>pet.client_ID === this.props.currentID);
        return(
            <div className="Pet-list-container">
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

export default Petlist;