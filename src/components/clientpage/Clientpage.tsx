import * as React from 'react';
import Casehistory from './Casehistory'
import Clientcard from './Clientcard'
import './Clientpage.scss';
import Petlist from './Petslist'

class Clientpage extends React.Component {
  public render() {
    return (
      <div className="Client-page-container">
        <div className="Client-page-right-container">
          <Clientcard/>
          <Petlist/>
          </div>
        <div className="Case-hiostory-container">
          <Casehistory/>
        </div>
      </div>
    );
  }
}

export default Clientpage;