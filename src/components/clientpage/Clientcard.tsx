import * as React from 'react';
import {IClient} from './Client'
import './Clientpage.scss';

interface IClientCardProps{
    client: IClient;
}

// tslint:disable-next-line: no-empty-interface
interface IClientCardState{}

class Clientcard extends React.Component <IClientCardProps, IClientCardState> {
   // public static defaultProps: { client_ID: number, avatar: any, name: string; second_name: string; adress: string; phone: string; petlist: any; };
    public render() {
        return (
        <div className="Client-card-container">
            <div className="Title">Клиент:</div>
            <img  className="Avatar"
            src={this.props.client.avatar}
            alt={this.props.client.name}/>
            <div className="Text-table">
                <div className="Name">{this.props.client.name}</div>
                <div className="Second-name">{this.props.client.second_name}</div>
                <div className="Adress">{this.props.client.adress}</div>
                <div className="Phone">{this.props.client.phone}</div>
            </div>
        </div>
        );
  }
}


export default Clientcard;