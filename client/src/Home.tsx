import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faGraduationCap, faBicycle, faBars } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

library.add(faCodeBranch, faGraduationCap, faBicycle, faBars);

export interface Props {
  activate: Function;
}

interface State {
  repoCount: number;
  mileCount: number;
}

export default class Navigation extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      repoCount: 0,
      mileCount: 246,
    }
  }

  componentDidMount() :void {
    fetch('https://cors-anywhere.herokuapp.com/https://api.github.com/users/pantzed', {method: "GET"})
    .then((res) => res.text())
    .then((data) => JSON.parse(data))
    .then((json) => {
      this.setState({
        repoCount: json.public_repos,
      });
    });
  }

  render() {
    return (
      <div className="row">
      <div className="col-12">
      <div className="row pt-4">
        <div className="col-12 d-flex justify-content-between">
          <span className="page-header">ED PANTZAR</span>
          <span className="p-3 border border-light rounded text-center text-custom bg-tp-light stat-shadow" onClick={(e) => this.props.activate(e, 'HOME')}><FontAwesomeIcon icon='bars'/></span>
        </div>
      </div>
        <div className="row">
          <div className="col-12">
            <span className="text-custom montserrat pl-1">Web Developer | Austin, TX</span>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-12 text-custom montserrat font-size-data">
            <span className="pl-1"><span className="font-weight-bold">DOB: </span>7/20/88</span><br/>
            <span className="pl-1"><span className="font-weight-bold">ORIGIN: </span>Burlington, VT</span><br/>
            <span className="pl-1"><span className="font-weight-bold">STATUS: </span>Seeking Employment</span><br/>
          </div>
        </div>
        <div className="row mt-5 ml-2">
          <div className="col-auto p-3 montserrat border border-light rounded text-center bg-tp-light stat-shadow">
            <div className="row">
              <div className="col-12 text-center">
                <span className="text-custom">YEARS EXP</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 pt-2 d-flex justify-content-center align-items-center">
                <FontAwesomeIcon className="icon" icon="graduation-cap" />
                <span className="pl-3 stat">{2}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 ml-2">
          <div className="col-auto p-3 montserrat border border-light rounded text-center bg-tp-light stat-shadow">
            <div className="row">
              <div className="col-12 text-center">
                <span className="text-custom">GIT REPOS</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 pt-2 d-flex justify-content-center align-items-center">
                <FontAwesomeIcon className="icon" icon="code-branch" />
                <span className="pl-3 stat">{this.state.repoCount}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 ml-2">
          <div className="col-auto p-3 montserrat border border-light rounded text-center bg-tp-light stat-shadow">
            <div className="row">
              <div className="col-12 text-center">
                <span className="text-custom">MILES COMMUTED (YTD)</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 pt-2 d-flex justify-content-center align-items-center">
                <FontAwesomeIcon className="icon" icon="bicycle" />
                <span className="pl-3 stat">{this.state.mileCount}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 d-flex justify-content-center bg-tp-dark">
          <div className="col-11 col-md-8 col-lg-6 pt-1 pb-2">
            <div className="row">
              <div className="col-6 nav-col-height py-3">
                <button className="btn btn-link border-custom text-custom btn-nav pointer shadow" onClick={(e) => this.props.activate(e, 'INTRO')}>Introduction</button>
              </div>
              <div className="col-6 nav-col-height py-3">
              <button className="btn btn-link border-custom text-custom btn-nav pointer shadow" onClick={(e) => this.props.activate(e, 'EXP')}>Experience</button>
              </div>
            </div>
            <div className="row">
              <div className="col-6 nav-col-height py-3">
                <button className="btn btn-link border-custom text-custom btn-nav pointer shadow" onClick={(e) => this.props.activate(e, 'PROJECTS')}>Projects</button>
              </div>
              <div className="col-6 nav-col-height py-3">
              <button className="btn btn-link border-custom text-custom btn-nav pointer shadow" onClick={(e) => this.props.activate(e, 'CONTACT')}>Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
