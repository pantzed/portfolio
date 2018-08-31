import * as React from 'react';

export interface Props {
  props: Object;
}

class Projects extends React.Component<Props>{
  constructor(props: Props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h1>Projects</h1>
        </div>
      </div>
    );
  }
}

export default Projects;