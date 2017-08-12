import React from 'react';
import { Link } from 'react-router-dom';

export const SideItem = (props) => (
  <li className="sha-side-item">
    <Link to={props.to} className="sha-nav-link" >
      <img className="sha-side-img"src={`/static/${props.icon}`} alt={props.title} />
      {props.title}
    </Link>
  </li>
)