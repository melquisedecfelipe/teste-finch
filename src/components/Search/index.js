/* eslint-disable react/prop-types */
import React from 'react';

import './styles.scss';

import Lupe from '../../assets/loupe@2x.png';

export default function Search(props) {
  const { handleInput } = props;

  return (
    <div className="search-form">
      <img src={Lupe} alt="Lupa" />
      <input type="text" placeholder="Buscar" onChange={handleInput} />
    </div>
  );
}
