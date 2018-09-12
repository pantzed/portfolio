import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Experience.css';

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
        <div className="row pt-4 nav-custom">
          <div className="col-12 d-flex justify-content-between">
            <span className="page-header">EXPERIENCE</span>
            <span className="p-3 border border-light rounded text-center text-custom bg-tp-light stat-shadow" onClick={(e) => this.props.activate(e, 'NAV', 'EXP')}><FontAwesomeIcon icon='bars'/></span>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-11">
            <div className="row mt-3 pt-4 pb-3 text-dark bg-light border-custom rounded">
              <div className="col-8">
                <h5><span className="font-weight-bold">Marketing Manager</span></h5>
                <span>eGauge Systems</span><br/>
                <span className="font-italic">Jul 2015 - Apr 2018</span>
              </div>
              <div className="col-4">
                <img className="img img-fluid float-right" src="http://www.egauge.net/django_static/images/logo_eGauge_bug_54x54.png"/>
              </div>
              <div className="row mt-3">
              <div className="col-11">
                <ul>
                  <li>
                    Designed a new website with UI/UX principals from the book “Don’t Make Me Think” 
                    and graphic tools such as Adobe Illustrator and Moqups wireframing. Measured 
                    KPIs with Google Analytics and found an increased customer conversion rate of 15%.
                  </li>
                  <li>
                    Adjusted advertising budget after establishing Google Analytics and comparing user 
                    data to initial expectations.
                  </li>
                  <li>
                    Led staff training for products to ensure accurate advertisement of technology 
                    and increased customer satisfaction.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center mt-4 mb-5">
        <div className="col-11">
          <div className="row pt-4 pb-3 text-dark bg-light border-custom rounded">
            <div className="col-8">
              <h5><span className="font-weight-bold">Account Manager</span></h5>
              <span>eGauge Systems</span><br/>
              <span className="font-italic">Feb 2012 - Jul 2015</span>
            </div>
            <div className="col-4">
              <img className="img img-fluid float-right" src="http://www.egauge.net/django_static/images/logo_eGauge_bug_54x54.png"/>
            </div>
            <div className="row mt-3">
              <div className="col-11">
                <ul>
                  <li>
                    Grew a yearly revenue of $750,000 to over $4.2 million in three years by 
                    hosting webinars, in-person technical training, and attending 15+ tradeshows. 
                  </li>
                  <li>
                    Became an expert on topics in renewable energy, utility billing, and power 
                    analysis markets and shared that knowledge with blog posts and white papers. 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}