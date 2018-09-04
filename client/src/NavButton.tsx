import * as React from 'react';

interface Props {
  activate: any;
  activateArg: string;
  text: string;
  prevPage: string;
}

const NavButton = (props: Props) => {
  return (
    <div className="row">
      <div className="col-12 nav-col-height py-3">
        <button className="p-4 border-custom rounded text-custom btn-nav pointer bg-tp-light stat-shadow" onClick={(e) => props.activate(e, props.activateArg, props.prevPage)}>{props.text}</button>
      </div>
    </div>
  )
}

export default NavButton;