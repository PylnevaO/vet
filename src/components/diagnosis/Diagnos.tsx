import * as React from 'react';

export interface IDiagnos{
    diagnos_ID: number;
    pet_ID: number;
    clent_ID:number;
    doctor_ID: number;
    diagnos: string;
    date: Date;
    description: string;
}

export class Diagnos extends React.Component <IDiagnos>{
    constructor(props: IDiagnos){
        super(props);
        this.state ={
            clent_ID: null,
            date: null, 
            description: ' ',
            diagnos: ' ',
            diagnos_ID: null,
            doctor_ID: null,
            pet_ID: null
        }
    }
}
