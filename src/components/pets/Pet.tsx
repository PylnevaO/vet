import * as React from 'react';

export interface IPet{
    pet_ID: number;
    client_ID: number;
    pet_name: string;
    pet_age: number;
}

export class Pet extends React.Component <IPet> {
    constructor(props: IPet){
        super(props);
        this.state={
           client_ID: null,
           pet_ID: null,
           pet_age: null, 
           pet_name: null,
        }
    }
} 
