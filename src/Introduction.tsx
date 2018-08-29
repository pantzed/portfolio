import * as React from 'react';
import './Introduction.css';

export interface Props {
  introActive?: boolean;
}

class Introduction extends React.Component<Props> {
  constructor(props: Props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row bg-image">
        <div className="col-4 bg-dark">
          <div className="row mt-4">
            <div className="col-12 mt-1">
              <header className="intro-header">
                Welcome!
              </header>
              <header className="intro-sub-header py-3 my-3 border-bottom border-top">
              My name is Ed Pantzar and this site demonstrates my professional abilities!
              </header>
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
              <button type="button" className="btn btn-outline-success mr-1 mt-1">Web Development</button>
              <button type="button" className="btn btn-outline-success mr-1 mt-1">Design</button>
              <button type="button" className="btn btn-outline-success mr-1 mt-1">Digital Marketing</button>
              <button type="button" className="btn btn-outline-success mr-1 mt-1">Physiology</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Introduction;