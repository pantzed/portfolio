import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Projects.css';
export interface Props {
  activate: Function;
}

interface State {
  projects: any,
}

export class Projects extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);
    this.state = {
      projects: [],
    };
  }

  mapProjects(){
    const projectsJSX = this.state.projects.map((project: any, index: number) => {
      return (
        <div className="row mt-5" key={index.toString()}>
          <div className="col-12">
            <div className="card stat-shadow">
              <img className="card-img-top" src={ project.img } alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title"><span className="font-weight-bold">{ project.title }</span></h5>
                <p className="card-text">{ project.description }</p>
                <a href={ project.url } className="btn bg-custom text-dark dark-shadow">Open Project</a>
              </div>
            </div>
          </div>
        </div>
      )
    });
    return projectsJSX;
  }

  componentDidMount(){

    fetch('/projects', {
      method: 'GET',
      mode: 'cors',
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow",
      referrer: "no-referrer"
    })
    .then((res) => res.text())
    .then((text) => JSON.parse(text))
    .then((data) => {
      this.setState({
        projects: data,
      });
    });

  }

  render(){
    return (
    <div className="text-dark fade-in">
      <div className="row pt-4">
        <div className="col-12 d-flex justify-content-between">
          <span className="page-header">PROJECTS</span>
          <span className="p-3 border border-light rounded text-center text-custom bg-tp-light stat-shadow" onClick={(e) => this.props.activate(e, 'NAV', 'PROJECTS')}><FontAwesomeIcon icon='bars'/></span>
        </div>
      </div>
      <div className="d-md d-none-lg d-none-xlg row d-flex justify-content-center mb-5">
        <div className="col-xs-11 col-md-4">
        { this.mapProjects() }
        </div>
      </div>
    </div>
    )
  }
}

export default Projects;