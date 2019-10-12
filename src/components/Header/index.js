import React from 'react';
import { Link } from 'react-router-dom'

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
      <Link to="/"><img src={Logo} alt="Logo"/></Link>
      <ul>
        <Link className={window.location.pathname === '/' ? 'link -active' : 'link'} to="/"><img src={Supplies} alt=""/><p>Todos</p></Link>
        <Link className={window.location.pathname === '/exclusivos' ? 'link -active' : 'link'} to="/exclusivos"><img src={Box} alt=""/><p>Exclusivos</p></Link>
        <Link className={window.location.pathname === '/promocao' ? 'link -active' : 'link'} to="/promocao"><img src={Gift} alt=""/><p>Promoção</p></Link>
        <Link className={window.location.pathname === '/favoritos' ? 'link -active' : 'link'} to="/favoritos"><img src={Recommended} alt=""/><p>Favoritos</p></Link>
      </ul>
      <img className="finch" src={Finch} alt="Finch"></img>
    </div>
  )
}
