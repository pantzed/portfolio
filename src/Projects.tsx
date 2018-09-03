import * as React from 'react';
import './Projects.css';

export interface Props {
  activate: Function;
}

interface State {
  projects: Object,
}

export class Projects extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);
    this.state = {
      projects: {},
    };
  }

  componentDidMount(){
    fetch('/projects', {method:"GET"})
    .then((res) => res.text())
    .then((text) => JSON.parse(text))
    .then((data) => {
      this.setState({
        projects: data,
      });
    });
    console.log(this.state.projects);
  }

  render(){
    return (
    <div className="text-dark">
      <div className="row pt-3">
        <div className="col-12">
          <button className="btn btn-sm" onClick={(e) => this.props.activate(e, 'NAV')}>Home</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <span className="intro-header">Projects</span>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-3 mb-5">
        <div className="col-11">
          <div className="row">
            <div className="col-12">
              <div className="card shadow-sm">
                <img className="card-img-top" src="https://images.pexels.com/photos/542556/pexels-photo-542556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title"><span className="font-weight-bold">Stroke with Friends</span></h5>
                  <p className="card-text">
                    A collaborative painting application that allows users to draw on a public HTML canvas 
                    with any number of other users.
                  </p>
                  <a href="https://github.com/pantzed" className="btn btn-2">Open Project</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <div className="card shadow-sm">
                <img className="card-img-top" src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title"><span className="font-weight-bold">New Here</span></h5>
                  <p className="card-text">  
                    A social site that helps people find activities when they are new to a place.
                  </p>
                  <a href="https://github.com/pantzed" className="btn btn-2">Open Project</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <div className="card shadow-sm">
                <img className="card-img-top" src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title"><span className="font-weight-bold">Energy Live</span></h5>
                  <p className="card-text">  
                    A revision of the original "energy-live" using node/express to serve a webpage 
                    showing electrical energy data.
                  </p>
                  <a href="https://github.com/pantzed" className="btn btn-2">Open Project</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <div className="card shadow-sm">
                <img className="card-img-top" src="https://images.pexels.com/photos/1044989/pexels-photo-1044989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title"><span className="font-weight-bold">Pixel Art Maker</span></h5>
                  <p className="card-text">  
                    An artistic outlet for creating pixelated artwork.
                  </p>
                  <a href="https://github.com/pantzed" className="btn btn-2">Open Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Projects;