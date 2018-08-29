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
              <span className="intro-header">
                Welcome!
              </span>
              <p><span className="intro-paragraph">
              Before learning to program, I obtained a degree in Integrative Physiology, 
              worked in technical sales, and excelled in digital marketing. The transition 
              to full-time development has been extremely enjoyable because it has allowed 
              me to be analytical and creative while taking projects from the design stage 
              through to functionality. Now, I'm looking forward to working with companies 
              that build user-centric products and positively impact the world around me.
              </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Introduction;