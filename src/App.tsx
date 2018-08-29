import * as React from 'react';
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
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
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Ed Pantzar</Navbar.Heading>
          <Navbar.Divider />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
            <Button className="bp3-minimal" icon="person" text="Intoduction" />
            <Button className="bp3-minimal" icon="application" text="Projects" />
            <Button className="bp3-minimal" icon="clipboard" text="Experience" />
            <Button className="bp3-minimal" icon="mobile-phone" text="Contact" />
        </Navbar.Group>
      </Navbar>
    );
  }
}

export default App;
