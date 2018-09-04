import * as React from 'react';
import NavButton from './NavButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.css';

export interface Props {
  activate: any;
}

export default class Nav extends React.Component<Props>{
  constructor(props: Props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div className="row full-height bg-tp-dark">
        <div className="col-12">
          <div className="row pt-4 nav-custom">
            <div className="col-12 d-flex justify-content-between">
              <span className="page-header">Navigate</span>
              <span className="p-3 border border-light rounded text-center text-custom bg-tp-light stat-shadow" onClick={(e) => this.props.activate(e, 'HOME')}><FontAwesomeIcon icon='times'/></span>
            </div>
          </div>
          <div className="row mt-5 d-flex justify-content-center">
            <div className="col-11 col-md-8 col-lg-6 pt-1 pb-2">
              <NavButton activate={this.props.activate} activateArg={'HOME'} text={'Home'} />
              <NavButton activate={this.props.activate} activateArg={'EXP'} text={'Experience'} />
              <NavButton activate={this.props.activate} activateArg={'PROJECTS'} text={'Projects'} />
              <NavButton activate={this.props.activate} activateArg={'CONTACT'} text={'Contact'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

