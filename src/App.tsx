import * as React from 'react';
import Navigation from './Navigation';
import Projects from './Projects';
import Introduction from './Introduction';
import Experience from './Experience';
import Contact from './Contact';
import './App.css';

export interface Props {
}

interface State {
  navigationActive: boolean;
  introActive: boolean;
  projectsActive: boolean;
  experienceActive: boolean;
  contactActive: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      navigationActive: false,
      introActive: false,
      projectsActive: true,
      experienceActive: false,
      contactActive: false,
    }
    this.activate = this.activate.bind(this);
  }

  activate(event: any, page: string):void {
    event.preventDefault();
    switch(page) {
      case 'NAV':
        this.setState({
          navigationActive: true,
          introActive: false,
          projectsActive: false,
          experienceActive: false,
          contactActive: false,
        });
        break;
      case 'INTRO':
        this.setState({
          navigationActive: false,
          introActive: true,
          projectsActive: false,
          experienceActive: false,
          contactActive: false,
        });
        break;
      case 'PROJECTS': 
        this.setState({
          navigationActive: false,
          introActive: false,
          projectsActive: true,
          experienceActive: false,
          contactActive: false,
        });
        break;
      case 'EXP': 
        this.setState({
          navigationActive: false,
          introActive: false,
          projectsActive: false,
          experienceActive: true,
          contactActive: false,
        });
        break;
      case 'CONTACT': 
        this.setState({
          navigationActive: false,
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
          {this.state.navigationActive && <Navigation activate={this.activate}/>}
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
