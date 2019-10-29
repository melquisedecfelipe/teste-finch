import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../services/format';

import './styles.scss';

import Checkbox from '../Checkbox';

function Home({ item }) {
  const { id, imagem, exclusivo, promocao, valor, favorito, nome, decricaoCurta } = item;

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
          <h1>{formatPrice(valor)}</h1>
          <Checkbox id={id} favorito={favorito} />
        </div>
        <h1>{nome}</h1>
        <p>{decricaoCurta}</p>
      </div>
    </div>
  );
}

export default Home;
