import 'bootstrap/dist/css/bootstrap.min.css';
import * as $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faClipboardList, faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

/* Used for side effects */
$;
Popper;
FontAwesomeIcon;
/* --------------------- */

library.add(faHandshake, faClipboardList, faCodeBranch, faEnvelope);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
