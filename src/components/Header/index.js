import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

import Logo from '../../assets/code@2x.png';
import Box from '../../assets/box@2x.png';
import Gift from '../../assets/gift-box@2x.png';
import Recommended from '../../assets/recommended@2x.png';
import Supplies from '../../assets/supplies@2x.png';
import Finch from '../../assets/Sem-Título-2@2x.png';

export default function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>
      <ul>
        <NavLink className="link" activeClassName="-active" exact to="/">
          <img src={Supplies} alt="" />
          <p>Todos</p>
        </NavLink>
        <NavLink className="link" activeClassName="-active" to="/exclusivos">
          <img src={Box} alt="" />
          <p>Exclusivos</p>
        </NavLink>
        <NavLink className="link" activeClassName="-active" to="/promocao">
          <img src={Gift} alt="" />
          <p>Promoção</p>
        </NavLink>
        <NavLink className="link" activeClassName="-active" to="/favoritos">
          <img src={Recommended} alt="" />
          <p>Favoritos</p>
        </NavLink>
      </ul>
      <img className="finch" src={Finch} alt="Finch" />
    </div>
  );
}
