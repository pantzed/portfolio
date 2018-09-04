import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

library.add(faHome);
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
        <div className="row mt-5" key={index}>
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
    fetch('/projects', {method:"GET"})
    .then((res) => res.text())
    .then((text) => JSON.parse(text))
    .then((data) => {
      this.setState({
        projects: data,
      });
    })
  }

  render(){
    return (
    <div className="text-dark">
      <div className="row pt-3">
        <div className="col-12 d-flex justify-content-between">
          <span className="page-header">Projects</span>
          <span className="p-3 border border-light rounded text-center text-custom bg-tp-light stat-shadow" onClick={(e) => this.props.activate(e, 'NAV')}><FontAwesomeIcon icon='home'/></span>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          
        </div>
      </div>
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-11">
        { this.mapProjects() }
        </div>
      </div>
    </div>
    )
  }
}

export default Projects;