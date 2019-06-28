import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Clientpage from '../src/components/clientpage/Clientpage';
import Mfooter from '../src/components/footer/Mfooter';
import Mheader from '../src/components/header/Mheader';
import Mainpage from '../src/components/mainpage/Mainpage';
import Docpage from './components/docpage/Doctorpage';
import Loginpage from './components/loginpage/Loginpage';
import Petpage from './components/pets/Petpage'
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
        <Mheader/>
        <Switch>
            <Route path="/main" component={Mainpage} />
            <Route path="/clientpage" component={Clientpage} />
            <Route path="/docpage" component={Docpage}/>
            <Route path="/login" component={Loginpage}/>
            <Route path="/petpage" component={Petpage}/>
        </Switch>
        <Mfooter/>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
