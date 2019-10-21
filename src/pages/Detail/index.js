import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { formatPrice } from '../../services/format';

import './styles.scss';

import Return from '../../assets/return@2x.png';

export default function Detail({ match }) {
  const [item, setItem] = useState([]);
  const id = parseInt(match.params.id, 10);

  useEffect(() => {
    const storageItems = JSON.parse(localStorage.getItem('items'));
    storageItems.filter(elem => (elem.id === id ? setItem(elem) : null));
  }, [id]);

  return (
    <div className="item">
      <div className="item-container">
        <div className="item-header">
          <div>
            <div className="item-content">
              <h1>{item.nome}</h1>
              <span>{formatPrice(item.valor)}</span>
            </div>
            <p>{item.decricaoCurta}</p>
          </div>
          <div className="item-search">
            <NavLink to="/">
              <img className="item-return" src={Return} alt="Voltar" />
            </NavLink>
          </div>
        </div>
        <div className="item-detail">
          <div className="item-img" style={{ backgroundImage: `url(${item.imagem})` }}>
            <p
              className={
                item.exclusivo === true ? '-blue' : '' || item.promocao === true ? '-red' : ''
              }
            >
              {item.exclusivo === true
                ? 'Exclusivo'
                : '' || item.promocao === true
                ? 'Promoção'
                : ''}
            </p>
          </div>
          <div className="item-info">
            <h1>Detalhes do Produto</h1>
            <p>{item.descricaoLonga}</p>
          </div>
        </div>
        {/* <div className="item-datasheet">
          <h1>Ficha Técnica</h1>
          <div>
            <ul>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}
