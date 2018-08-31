import * as React from 'react';

export interface Props {
  activate: Function;
}

export default class Experience extends React.Component<Props> {
  constructor(props: Props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row mt-3">
          <div className="col-12">
            <button className="btn btn-sm" onClick={(e) => this.props.activate(e, 'NAV')}>Home</button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <h1>Experience</h1>
          </div>
        </div>
      </div>
    )
  }
}