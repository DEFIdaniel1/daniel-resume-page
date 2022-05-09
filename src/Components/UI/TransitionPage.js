import React from 'react'
import './TransitionPage.scss';

const TransitionPage = (props) => {
  return (
    <div class="hover-div">
      <h1 className="hover-el">{props.title}</h1>
    </div>
  );
}

export default TransitionPage