import * as React from 'react';
import Navigation from './Navigation';
import Introduction from './Introduction';
import Projects from "./Projects";
import './App.css';

export interface Props {
}

interface State {
  activePage: string;
  introActive: boolean;
  projectsActive: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      activePage: 'introduction',
      introActive: true,
      projectsActive: false,
    }
    this.activate = this.activate.bind(this);
  }

  activate(event: any):void {
    const page = event.target.getAttribute('page');
    console.log(page);
    switch(page) {
      case 'PROJECTS': 
        this.setState({
          introActive: false,
          projectsActive: true,
        });
      case 'INTRO':
      this.setState({
        introActive: true,
        projectsActive: false,
      });
      default: break;
    }
  }

  public render() {
    return (
      <div>
        <Navigation activate={this.activate}/>
        <main className="container-fluid">
          {this.state.introActive && <Introduction />}
          {this.state.projectsActive && <Projects props={this.props}/>}
        </main>
      </div>
    );
  }
}

export default App;
