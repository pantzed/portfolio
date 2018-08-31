import * as React from 'react';
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
        <div className="row mt-3">
          <div className="col-12">
            <button className="btn btn-sm" onClick={(e) => this.props.activate(e, 'NAV')}>Home</button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <span className="intro-header">Contact</span>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-2">
          <div className="col-11">
            <div className="row mt-2">
              <div className="col-4">
                <span className="font-weight-bold">Phone:</span>
              </div>
              <div className="col-6">
                <span>(802) 233-6408</span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-4">
                <span className="font-weight-bold">Email:</span>
              </div>
              <div className="col-6">
                <span>edpantzar@gmail.com</span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-4">
                <span className="font-weight-bold">Github:</span>
              </div>
              <div className="col-6">
                <span><a href="https://github.com/pantzed">github/pantzed</a></span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-4">
                <span className="font-weight-bold">Linkedin:</span>
              </div>
              <div className="col-6">
                <span><a href="https://www.linkedin.com/in/ed-pantzar/">Linkedin/ed-pantzar</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}