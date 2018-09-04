import * as React from 'react';
import './App.css';
import Contact from './Contact';
import Experience from './Experience';
import Introduction from './Introduction';
import Home from './Home';
import Projects from './Projects';

export interface Props {
}

interface State {
  homeActive: boolean;
  introActive: boolean;
  projectsActive: boolean;
  experienceActive: boolean;
  contactActive: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      homeActive: true,
      introActive: false,
      projectsActive: false,
      experienceActive: false,
      contactActive: false,
    }
    this.activate = this.activate.bind(this);
  }

  activate(event: any, page: string):void {
    event.preventDefault();
    switch(page) {
      case 'HOME':
        this.setState({
          homeActive: true,
          introActive: false,
          projectsActive: false,
          experienceActive: false,
          contactActive: false,
        });
        break;
      case 'INTRO':
        this.setState({
          homeActive: false,
          introActive: true,
          projectsActive: false,
          experienceActive: false,
          contactActive: false,
        });
        break;
      case 'PROJECTS': 
        this.setState({
          homeActive: false,
          introActive: false,
          projectsActive: true,
          experienceActive: false,
          contactActive: false,
        });
        break;
      case 'EXP': 
        this.setState({
          homeActive: false,
          introActive: false,
          projectsActive: false,
          experienceActive: true,
          contactActive: false,
        });
        break;
      case 'CONTACT': 
        this.setState({
          homeActive: false,
          introActive: false,
          projectsActive: false,
          experienceActive: false,
          contactActive: true,
        });
      default: break;
    }
  }

  public render() {
    return (
      <div>
        <main className="container-fluid bg-app full-height text-light">
          {this.state.homeActive && <Home activate={this.activate}/>}
          {this.state.introActive && <Introduction activate={this.activate}/>}
          {this.state.projectsActive && <Projects activate={this.activate}/>}
          {this.state.experienceActive && <Experience activate={this.activate}/>}
          {this.state.contactActive && <Contact activate={this.activate}/>}
        </main>
      </div>
    );
  }
}

export default App;
