import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

export interface Props {
  activate: Function;
}

export default class Contact extends React.Component<Props> {
  constructor(props: Props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row pt-4">
          <div className="col-12 d-flex justify-content-between">
            <span className="page-header">CONTACT</span>
            <span className="p-3 border border-light rounded text-center text-custom bg-tp-light stat-shadow" onClick={(e) => this.props.activate(e, 'NAV', 'CONTACT')}><FontAwesomeIcon icon='bars'/></span>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-2">
          <div className="col-11">
            <div className="row mt-2">
              <div className="col-4">
                <span className="font-weight-bold duration-05 fade-in">Phone:</span>
              </div>
              <div className="col-6">
                <span className="delay-025 duration-025 pop-text">(802) 233-6408</span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-4">
                <span className="font-weight-bold duration-05 fade-in">Email:</span>
              </div>
              <div className="col-6">
                <span className="delay-05 duration-025 pop-text">edpantzar@gmail.com</span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-4">
                <span className="font-weight-bold duration-05 fade-in">Github:</span>
              </div>
              <div className="col-6">
                <span className="delay-075 duration-025 pop-text"><a href="https://github.com/pantzed">github/pantzed</a></span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-4">
                <span className="font-weight-bold duration-05 fade-in">Linkedin:</span>
              </div>
              <div className="col-6">
                <span className="delay-10 duration-025 pop-text"><a href="https://www.linkedin.com/in/ed-pantzar/">Linkedin/ed-pantzar</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}