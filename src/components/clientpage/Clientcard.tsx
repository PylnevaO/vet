import * as React from 'react';
import lisa from '../../images/avatar.jpg';
import './Clientpage.scss';

export interface IClientCard{
    client_ID: number;
    avatar: any;
    name: string;
    second_name: string;
    adress: string;
    phone: string;
    petlist: any;

}

class Clientcard extends React.Component <IClientCard> {
    public static defaultProps: { client_ID: number, avatar: any, name: string; second_name: string; adress: string; phone: string; petlist: any; };
    public render() {
        return (
        <div className="Client-card-container">
            <div className="Title">Клиент:</div>
            <img  className="Avatar"
            src={this.props.avatar}
            alt={this.props.name}/>
            <div className="Text-table">
                <div className="Name">{this.props.name}</div>
                <div className="Second-name">{this.props.second_name}</div>
                <div className="Adress">{this.props.adress}</div>
                <div className="Phone">{this.props.phone}</div>
            </div>
        </div>
        );
  }
}

Clientcard.defaultProps = {client_ID: 2, avatar: lisa, name: "Таня", second_name: "Лисова", adress: "Шир, Сенная балка, ул. Путешественников, д. 5", phone: "8908500000", petlist: null};

export default Clientcard;