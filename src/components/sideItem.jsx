import React from 'react';
import { Link } from 'react-router-dom';


export const SideItem = (props) => (
  <li className="sha-side-item">
    <span className="sha-side-img">
      <img src={`/static/${props.icon}`} alt={props.title} />
    </span>
    <Link to={props.to} className="sha-nav-link">
      <span className="sha-side-title">{props.title}</span>
    </Link>
  </li>
)