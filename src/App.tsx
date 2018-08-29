import * as React from 'react';
import Navigation from './Navigation';
import Introduction from './Introduction';
import './App.css';

export interface Props {
  theme?: string;
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
  }

  public render() {
    return (
      <div>
        <Navigation activePage={this.state.activePage}/>
        <main className="container-fluid">
          {this.state.introActive && <Introduction />}
        </main>
      </div>
          );
  }
}

export default App;
