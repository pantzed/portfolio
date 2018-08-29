import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navigation.css';

export interface Props {
  theme?: string;
}

interface State {
  currentTheme?: string;
}

class Navigation extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      currentTheme: props.theme || 'light',
    }
  }

  public render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Portfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link nav-divider" href="/"><FontAwesomeIcon className="nav-icon" icon="handshake"/>Introduction</a>
            <a className="nav-item nav-link nav-divider" href="/"><FontAwesomeIcon className="nav-icon" icon="code-branch"/>Projects</a>
            <a className="nav-item nav-link nav-divider" href="/"><FontAwesomeIcon className="nav-icon" icon="clipboard-list"/>Experience</a>
            <a className="nav-item nav-link" href="/"><FontAwesomeIcon className="nav-icon" icon="envelope"/>Contact</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation;
