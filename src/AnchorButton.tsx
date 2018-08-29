import * as React from 'react';
import './AnchorButton.css';

export interface Props {
  text: string;
  active?: string;
  handleActive?: any;
  href?: string;
  disabled?: boolean;
  icon?: JSX.Element;
}

interface State {
  isActive: string;
}

export default class AnchorButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isActive: props.active || 'text-secondary',
    }
  }

  render(){
    return (
      <button className={`btn btn-link btn-nav nav-divider ${this.state.isActive}`}>
        { this.props.icon }
        { this.props.text }
      </button>
    );
  }
}