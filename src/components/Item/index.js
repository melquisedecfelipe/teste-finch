import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default function Dashboard({item}) {
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
              <input type="checkbox"/>
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
