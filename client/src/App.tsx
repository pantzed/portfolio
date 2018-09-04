import * as React from 'react';
import './App.css';
import Contact from './Contact';
import Experience from './Experience';
import Introduction from './Introduction';
import Home from './Home';
import Nav from './Nav';
import Projects from './Projects';

export interface Props {
}

interface State {
  navActive: boolean;
  homeActive: boolean;
  introActive: boolean;
  projectsActive: boolean;
  experienceActive: boolean;
  contactActive: boolean;
  prevPage: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      navActive: false,
      homeActive: true,
      introActive: false,
      projectsActive: false,
      experienceActive: false,
      contactActive: false,
      prevPage: 'HOME',
    }
    this.activate = this.activate.bind(this);
  }

  activate(event: any, page: string, prev: string):void {
    event.preventDefault();
    switch(page) {
      case 'NAV':
        this.setState({
          navActive: true,
          homeActive: false,
          introActive: false,
          projectsActive: false,
          experienceActive: false,
          contactActive: false,
          prevPage: prev,
        });
        break;
      case 'HOME':
        this.setState({
          navActive: false,
          homeActive: true,
          introActive: false,
          projectsActive: false,
          experienceActive: false,
          contactActive: false,
          prevPage: prev,
        });
        break;
      case 'INTRO':
        this.setState({
          navActive: false,
          homeActive: false,
          introActive: true,
          projectsActive: false,
          experienceActive: false,
          contactActive: false,
          prevPage: prev,
        });
        break;
      case 'PROJECTS': 
        this.setState({
          navActive: false,
          homeActive: false,
          introActive: false,
          projectsActive: true,
          experienceActive: false,
          contactActive: false,
        });
        break;
      case 'EXP': 
        this.setState({
          navActive: false,
          homeActive: false,
          introActive: false,
          projectsActive: false,
          experienceActive: true,
          contactActive: false,
          prevPage: prev,
        });
        break;
      case 'CONTACT': 
        this.setState({
          navActive: false,
          homeActive: false,
          introActive: false,
          projectsActive: false,
          experienceActive: false,
          contactActive: true,
          prevPage: prev,
        });
      default: break;
    }
  }

  public render() {
    return (
        <main className="container-fluid bg-app full-height text-light">
          {this.state.navActive && <Nav activate={this.activate} prev={this.state.prevPage}/>}
          {this.state.homeActive && <Home activate={this.activate}/>}
          {this.state.introActive && <Introduction activate={this.activate}/>}
          {this.state.projectsActive && <Projects activate={this.activate}/>}
          {this.state.experienceActive && <Experience activate={this.activate}/>}
          {this.state.contactActive && <Contact activate={this.activate}/>}
        </main>
    );
  }
}

export default App;
