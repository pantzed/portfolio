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
  mileCount: number;
  loading: boolean;
  currentSong: any;
}

export default class Navigation extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      repoCount: 0,
      mileCount: 0,
      loading: false,
      currentSong: {
        artist: '',
        album: '',
        img: '',
      },
    }
  }

  countMilesCommuted(){
    const startDate = Date.parse('30 Mar 2018 00:00:00 GMT');
    const now = Date.now();
    const toNow = (now - startDate);
    const miles = Math.round(toNow * (1.15738e-8) * 2.8);
    console.log(miles);
    this.setState({
      mileCount: miles
    });
  }

  componentDidMount() {
    this.countMilesCommuted();
    this.setState({loading: true});

    fetch('https://cors-anywhere.herokuapp.com/https://api.github.com/users/pantzed', {method: "GET"})
    .then((res) => res.text())
    .then((data) => JSON.parse(data))
    .then((json) => {
      this.setState({
        repoCount: json.public_repos,
      })
    })
    .then(() => {
      this.setState({loading: false});
    });

    fetch('/spotify/playing', {
      method: 'GET',
      mode: 'cors',
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow",
      referrer: "no-referrer"
    })
    .then(res => {
      return res.text();
    })
    .then((code) => {
      console.log(code);
      return code;
    })
    .then((code) => {
      console.log(code);
      return fetch('https://api.spotify.com/v1/me/player/currently-playing', 
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${code}`
        }
      })
      .then((res) => {
        console.log(res.body)
        if (res.status !== 200){
          console.log(res.status);
          return Promise.reject(new Error('Resource unabailable'));
        }
        else {
          return res.text();
        }
      })
      .then((text) => JSON.parse(text))
      .then((data) => {
        const currentSong = {
          artist: data.item.artists[0].name,
          album: data.item.album.name,
          img: data.item.album.images[1].url
        }
        return currentSong;
      })
      .then((currentSong) => {
        this.setState({
          currentSong: currentSong,
        })
      })
      .catch((error) => {
        console.log(error);
      });
    })
  }

  render() {
    return (
      <div className="row">
      <div className="col-12">
      <div className="row pt-4">
        <div className="col-12 d-flex justify-content-between">
          <span className="page-header">ED PANTZAR</span>
          <span className="p-3 border border-light rounded text-center text-custom bg-tp-light stat-shadow" onClick={(e) => this.props.activate(e, 'NAV', 'HOME')}><FontAwesomeIcon icon='bars'/></span>
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
        <div className="row mt-4 ml-2">
          <div className="col-auto p-3 montserrat border border-light rounded text-center bg-tp-light stat-shadow">
            <div className="row">
              <div className="col-12 text-center">
                <span className="text-custom">Spotify Live</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 pt-2 d-flex justify-content-center align-items-center">
                <span className="pl-3">{this.state.currentSong.album}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
