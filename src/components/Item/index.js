import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default function Dashboard({item}) {
  const [checkbox, setCheckbox] = useState(false);
  let localStorageItems = [];

  function handleCheckbox(e) {
    localStorageItems = JSON.parse(localStorage.getItem('items'));

    setCheckbox(e.target.value);

    for (let index = 0; index < localStorageItems.length; index++) {
      let elem = localStorageItems[index];
      if (elem.id === item.id) {
        elem.favoritos = elem.favoritos === true ? false : true;
        localStorage.setItem('items', JSON.stringify(localStorageItems));
      }
    }
    console.log(localStorageItems);
  }

  return (
    <div className="dashboard-item">
      <Link to={`/item/${item.id}`}>
        <div className="item-img" style={{backgroundImage: `url(${item.imagem})`}}>
          <p className={item.exclusivo === true ? "-blue" : ""  || item.promocao === true ? "-red" : ""}>
            { item.exclusivo === true ? "Exclusivo" : ""  || item.promocao === true ? "Promoção" : ""}
          </p>
        </div>
      </Link>
      <div className="item-content">
        <div className="item-header">
          <h1>{parseInt(item.valor).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</h1>
          <div className="item-check">
            <label>
              <input type="checkbox" value={checkbox} onChange={e => handleCheckbox(e)} defaultChecked={item.favoritos === true}/>
              <span></span>
            </label>
            <p>tornar favorito</p>
          </div>
        </div>
        <h1>{item.nome}</h1>
        <p>{item.decricaoCurta}</p>
      </div>
    </div>
  )
}
