import * as React from 'react';
import './Projects.css';

export interface Props {
  activate: Function;
}

const Projects: React.SFC<Props> = (props) => {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-12">
          <button className="btn btn-sm" onClick={(e) => props.activate(e, 'NAV')}>Home</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <span className="intro-header">Projects</span>
        </div>
      </div>
    </div>
  );
}

export default Projects;