import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import Checkbox from '../Checkbox';

export default function Dashboard({ item, handleCount }) {
  const { id, imagem, exclusivo, promocao, valor, favoritos, nome, decricaoCurta } = item;

  function handleCheckbox() {
    let storageItems = JSON.parse(localStorage.getItem('items'));

    const items = storageItems.map(elem =>
      elem.id === id ? { ...elem, favoritos: !elem.favoritos } : elem,
    );
    localStorage.setItem('items', JSON.stringify(items));

    storageItems = JSON.parse(localStorage.getItem('items'));
    const favorites = storageItems.filter(elem => elem.favoritos === true);
    handleCount(favorites.length);
  }

  return (
    <div className="dashboard-item">
      <Link to={`/item/${id}`}>
        <div className="item-img" style={{ backgroundImage: `url(${imagem})` }} title={nome}>
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
          <Checkbox id={id} favoritos={favoritos} handleCheckbox={handleCheckbox} />
        </div>
        <h1>{nome}</h1>
        <p>{decricaoCurta}</p>
      </div>
    </div>
  );
}
