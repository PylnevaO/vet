import * as React from 'react';
import {mockPetList} from '../../mocks/Mockpetlist'
import './Pet.scss'
import Petcardmini from './Petcardmini'

class Petlist extends React.Component{ // страница поиска по всем животным
    public render(){
        return(
            <div className="Pet-list-container">
                <div className="Pet-list-center-column">
                    {mockPetList.map(item => (<Petcardmini pet={item}/>))}
                </div>
            </div>
        );
    }
}

export default Petlist;