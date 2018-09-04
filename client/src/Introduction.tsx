import * as React from 'react';
import './Introduction.css';

export interface Props {
  activate: Function;
}

export default class Introduction extends React.Component<Props> {
  constructor(props: Props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row pt-3">
          <div className="col-12">
            <button className="btn btn-sm" onClick={(e) => this.props.activate(e, 'NAV')}>Home</button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <span className="intro-header">Introduction</span>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-11">
            <span className="intro-paragraph">
              <p>
                Before learning to program, I obtained a degree in Integrative Physiology, 
                worked in technical sales, and excelled in digital marketing. The transition 
                to full-time development has been extremely enjoyable because it has allowed 
                me to be analytical and creative while taking projects from the design stage 
                through to functionality. Now, I'm looking forward to working with companies 
                that build user-centric products and positively impact the world around me.
              </p>
            </span>
          </div>
        </div>
      </div>
    )
  }
}