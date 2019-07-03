import * as React from 'react';

export interface IClient{
    client_ID: number;
    avatar: any;
    name: string;
    second_name: string;
    adress: string;
    phone: string;
}


export class Client extends React.Component<IClient>{
    constructor(props: IClient){
        super(props);
        this.state={
            adress: null,
            avatar: null,
            client_ID: null,
            name: null,
            phone: null,
            second_name: null
            
        }
    }
}

