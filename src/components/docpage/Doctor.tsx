import * as React from 'react';

export interface IDoctor{
    doctor_ID: number;
    doctor_name: string;
    doctor_secondname: string;
    specialty: string;
  }

export class Doctor extends React.Component <IDoctor>{
    constructor(props: IDoctor){
        super(props);
        this.state={
            doctor_ID: null,
            doctor_name: null,
            doctor_secondname: null,
            specialty: null
        }
    }
}