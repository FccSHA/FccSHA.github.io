import React from 'react';

export const SideItem = (props) => (

  <li className="sha-side-item">
    <span className="sha-side-img">
      <img src={`static/${props.icon}`} alt={props.title}/>
    </span>
    <span className="sha-side-title">{props.title}</span>
  </li>
  
)