import * as React from 'react';
import Navigation from './Navigation';
import Introduction from './Introduction';
import './App.css';

export interface Props {
  theme?: string;
}

interface State {
  currentTheme: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      currentTheme: props.theme || "light",
    }
  }

  public render() {
    return (
      <div>
        <Navigation />
        <main className="container-fluid">
          <Introduction />
        </main>
      </div>
          );
  }
}

export default App;
