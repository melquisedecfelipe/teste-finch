import React from 'react';

import './styles.scss';

import Lupe from '../../assets/loupe@2x.png'

export default function Search(props) {
  return (
    <div className="search-form">
      <img src={Lupe} alt="Lupa"/>
      <input type="text" placeholder="Buscar" onChange={props.handleInput}/>
    </div>
  )
}
