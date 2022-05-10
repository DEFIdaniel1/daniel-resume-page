import React from 'react'
import './TransitionPage.scss';

const TransitionPage = (props) => {
  return (
    <div class="hover-div">
      <div className="div2 fade">
        <h1 className="hover-el">{props.title}</h1>
      </div>
      <div>
        <h2 className="hover-el fade">
          <i class="fa-solid fa-angles-down icon"></i>
        </h2>
      </div>
    </div>
  );
}

export default TransitionPage