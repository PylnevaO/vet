// import * as React from 'react';
import './Clientpage.scss';

export interface IDiagnos{
    pet_ID: number;
    clent_ID:number;
    doctor_ID: number;
    diagnos: string;
    date:any;
    description: string;
}

export interface IDiagnosisCard{
    creature(): void;
}

// class Diagnos extends React.Component implements IDiagnosisCard{
//         pet_ID: number;
//         doctor_ID: number;
//         diagnos: string;
//         date:{ day: number; month: number; year: number};
//         description: string;
//         public creature(): void {
        
//         throw new Error("Method not implemented.");
//     }

// }

// export default Diagnos;
// class Diagnosiscard extends React.Component{ // используется для отображения на странице животного
//     public render(){
//         return(
//             <div className="Pet-card-container">
//                 <div className="Title">Бобик</div>
//             </div>
               
//         );
//     }
// }

// export default Diagnosiscard;