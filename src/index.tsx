import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Clientpage from '../src/components/clientpage/Clientpage';
import Docpage from '../src/components/docpage/Docpage';
import Mfooter from '../src/components/footer/Mfooter';
import Mheader from '../src/components/header/Mheader';
import Mainpage from '../src/components/mainpage/Mainpage';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
        <Mheader/>
        <Switch>
            <Route path="/main" component={Mainpage} />
            <Route path="/clientpage" component={Clientpage} />
            <Route path="/docpage" component={Docpage}/>
        </Switch>
        <Mfooter/>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
