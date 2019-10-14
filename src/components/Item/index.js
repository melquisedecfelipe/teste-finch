import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default function Dashboard({ item }) {
  const { id, exclusivo, promocao, valor, favoritos, nome, decricaoCurta } = item;

  function handleCheckbox() {
    const localStorageItems = JSON.parse(localStorage.getItem('items'));

    const newFavorite = localStorageItems.map(elem => {
      return elem.id === id ? { ...elem, favoritos: !elem.favoritos } : elem;
    });

    localStorage.setItem('items', JSON.stringify(newFavorite));
  }

  return (
    <div className="dashboard-item">
      <Link to={`/item/${id}`}>
        <div className="item-img" style={{ backgroundImage: `url(${item.imagem})` }}>
          <p className={exclusivo === true ? '-blue' : '' || promocao === true ? '-red' : ''}>
            {exclusivo === true ? 'Exclusivo' : '' || promocao === true ? 'Promoção' : ''}
          </p>
        </div>
      </Link>
      <div className="item-content">
        <div className="item-header">
          <h1>
            {parseInt(valor, 10).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </h1>
          <div className="item-check">
            <label htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                value={favoritos}
                onChange={() => handleCheckbox()}
                defaultChecked={favoritos === true}
              />
              <span />
            </label>
            <p>tornar favorito</p>
          </div>
        </div>
        <h1>{nome}</h1>
        <p>{decricaoCurta}</p>
      </div>
    </div>
  );
}
