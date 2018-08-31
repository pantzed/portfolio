import * as React from 'react';
import './Navigation.css';

export interface Props {
  activate: Function;
}

export default class Navigation extends React.Component<Props> {
  constructor(props: Props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row d-flex justify-content-center pt-4">
          <div className="col-11">
            <span className="intro-header">Ed's Portfolio</span>
          </div>
        </div>
        <div className="row d-flex justify-content-center text-center">
          <div className="col-11 col-md-8 col-lg-6 pt-4">
            <div className="row d-flex justify-content-center">
              <div className="col-6 nav-col-height py-3">
                <button className="btn btn-4 btn-nav pointer shadow" onClick={(e) => this.props.activate(e, 'INTRO')}>Introduction</button>
              </div>
              <div className="col-6 nav-col-height py-3">
              <button className="btn btn-3 btn-nav pointer shadow" onClick={(e) => this.props.activate(e, 'EXP')}>Experience</button>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-6 nav-col-height py-3">
                <button className="btn btn-2 btn-nav pointer shadow" onClick={(e) => this.props.activate(e, 'PROJECTS')}>Projects</button>
              </div>
              <div className="col-6 nav-col-height py-3">
              <button className="btn btn-1 btn-nav pointer shadow" onClick={(e) => this.props.activate(e, 'CONTACT')}>Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
