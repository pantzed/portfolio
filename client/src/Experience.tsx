import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Experience.css';

export interface Props {
  activate: Function;
}

interface State {
  experience: Array<any>;
}

export default class Experience extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      experience: []
    };
  }

  mapExp(){
    const expCards: any = this.state.experience.map((exp: any, index: number) => {
      return (
        <div className="row d-flex justify-content-center mt-4 mb-5" key={index.toString()}>
          <div className="col-11">
            <div className="row mt-3 pt-4 pb-3 text-dark bg-light border-custom rounded">
              <div className="col-8">
                <h5><span className="font-weight-bold">{exp.title}</span></h5>
                <span>{exp.company}</span><br/>
                <span className="font-italic">{exp.start} - {exp.end}</span>
              </div>
              <div className="col-4">
                <img className="img img-fluid float-right" src={exp.imageURL}/>
              </div>
              <div className="row mt-3">
                <div className="col-11">
                  <ul>
                    {exp.point_1 && <li>{exp.point_1}</li>}
                    {exp.point_2 && <li>{exp.point_2}</li>}
                    {exp.point_3 && <li>{exp.point_3}</li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    });
    return expCards;
  }

  componentDidMount() {
    fetch('/exp', {method: 'GET'})
    .then(res => res.text())
    .then(data => JSON.parse(data))
    .then((exp) => {
      this.setState({
        experience: exp,
      })
    })
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
        {this.mapExp()}
      </div>
    )
  }
}