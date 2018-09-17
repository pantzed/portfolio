import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faGraduationCap, faBicycle, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

library.add(faCodeBranch, faGraduationCap, faBicycle, faBars, faTimes);

export interface Props {
  activate: Function;
}

interface State {
  repoCount: number;
  loading: boolean;
  toggleAbout: boolean;
}

export default class Navigation extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      repoCount: 0,
      loading: true,
      toggleAbout: false,
    }
    this.toggleAboutState = this.toggleAboutState.bind(this);
  }

  countMilesCommuted(){
    const startDate = Date.parse('30 Mar 2018 00:00:00 GMT');
    const now = Date.now();
    const toNow = (now - startDate);
    const miles = Math.round(toNow * (1.15738e-8) * 2.8);
    return miles;
  }

  toggleAboutState() {
    this.setState({
      toggleAbout: !this.state.toggleAbout
    })
  }

  componentDidMount() {

    fetch('https://cors-anywhere.herokuapp.com/https://api.github.com/users/pantzed', {method: "GET"})
    .then((res) => res.text())
    .then((data) => JSON.parse(data))
    .then((json) => {
      this.setState({
        repoCount: json.public_repos,
        loading: false,
      })
    });
  }

  render() {
    return (
      <div className="row full-height">
        <div className="col-12 d-flex flex-column justify-content-between">
        <div>
          <div className="row pt-4">
            <div className="col-12 d-flex justify-content-between align-content-baseline">
              <span className="page-header">ED PANTZAR</span>
              <span className="p-3 border border-light rounded text-center text-custom bg-tp-light stat-shadow" onClick={(e) => this.props.activate(e, 'NAV', 'HOME')}><FontAwesomeIcon icon='bars'/></span>
            </div>
          </div>
            {!this.state.toggleAbout &&
            <div className="fade-in">
              <div className="row">
                <div className="col-12">
                  <span className="montserrat pl-1">Web Developer | Austin, TX</span>
                </div>
              </div>
              <div className="row pt-2 ">
                <div className="col-12 text-custom montserrat font-size-data">
                  <span className="pl-1"><span className="font-weight-bold">DOB: </span>7/20/88</span><br/>
                  <span className="pl-1"><span className="font-weight-bold">ORIGIN: </span>Burlington, VT</span><br/>
                  <span className="pl-1"><span className="font-weight-bold">STATUS: </span>Seeking Employment</span><br/>
                </div>
              </div>
              <div className="row pt-4 pb-2">
                <div className="col-auto">
                  <span className="montserrat pl-1">Quick Stats</span>
                </div>
              </div>
              <div className="row ml-1">
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
                      <span className="pl-3 stat">
                        {this.state.loading && <div className="loader"></div>}
                        {!this.state.loading && this.state.repoCount}
                        </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4 ml-2">
                <div className="col-auto p-3 montserrat border border-light rounded text-center bg-tp-light stat-shadow">
                  <div className="row">
                    <div className="col-12 text-center">
                      <span className="text-custom">MILES <br /> COMMUTED (YTD)</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pt-2 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon className="icon" icon="bicycle" />
                      <span className="pl-3 stat">{ this.countMilesCommuted() }</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          {this.state.toggleAbout && 
            <div className="row d-flex justify-content-center mt-4 mb-5 fade-in">
              <div className="col-11 bg-tp-dark montserrat border-about rounded">
                <div className="row">
                  <div className="col-12 px-3 pt-3 pb-1 d-flex justify-content-between">
                    <span className="text-custom-2">About This Site</span>
                    <span className="text-custom-2" onClick={this.toggleAboutState}><FontAwesomeIcon className="times" icon="times" /></span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12 px-3">
                    <div className="py-1 mt-2">
                      Made using Bootstrap v4, ReactJS, and TypeScript on the front-end with 
                      NodeJS and Postgres serving content from the backend. The purpose of the site
                      is to display my coding ability, creativity, professional experience, and 
                      projects that I've worked on.
                    </div>
                    <div className="py-1 mt-2">
                      The Experience and Projects content is stored and served from Express/Postgres to improve
                      the readability of the JSX in each component. This inherently makes adding new content easier, 
                      and ensures consistent styling.
                    </div>
                    <div className="py-1 mt-2">
                      There's an API call to Github on the Homepage for the sole purpose of playing with 
                      the Github API. I would have included data for each project card using this API,
                      but the data available for individual repos is limited.
                    </div>
                    <div className="py-1 mt-2">
                      The Homepage also included calls to the Spotify API that I have since removed. My goal was
                      to display the track I was currently playing, but the process of authorization and authentication
                      was not practical. The API is set up to have users access their own Spotify account, not
                      for you to log into your own account to display info for others. I kept the API routes ("spotify") for an 
                      example of using Oauth and Axios. 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          </div>
          {!this.state.toggleAbout &&
            <div className="row mb-4 fade-in">
              <div className="col-12 d-flex justify-content-center">
                <button type="button" className="btn btn-small btn-about montserrat" onClick={this.toggleAboutState}>About This Site</button>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}
