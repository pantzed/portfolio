import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorButton from './AnchorButton';
import './Navigation.css';

export interface Props {
  activate: any;
}

interface State {
  active: string;
}

class Navigation extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      active: 'active',
    }
  }

  public render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Ed's Portfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav" onClick={this.props.activate}>
            <AnchorButton text="Introduction" page="INTRO" icon={<FontAwesomeIcon icon="handshake" transform="left-7"/>} />
            <AnchorButton text="Projects" icon={<FontAwesomeIcon icon="code-branch" transform="left-7"/>} />
            <AnchorButton text="Experience" icon={<FontAwesomeIcon icon="clipboard-list" transform="left-7"/>} />
            <AnchorButton text="Contact" icon={<FontAwesomeIcon icon="envelope" transform="left-7"/>} />
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation;
