import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import Header from '../../components/Header';

import Return from '../../assets/return@2x.png';

export default function Detail({ match }) {
  const [item, setItem] = useState([]);
  const localStorageItems = JSON.parse(localStorage.getItem('items'));
  const id = parseInt(match.params.id, 10);

  useEffect(() => {
    async function loadItem() {
      localStorageItems.forEach(elem => {
        if (elem.id === id) {
          setItem(elem);
        }
      });
    }
    loadItem();
  }, []);

  return (
    <div className="item">
      <Header />
      <div className="item-container">
        <div className="item-header">
          <div>
            <div className="item-content">
              <h1>{item.nome}</h1>
              <span>
                {parseInt(item.valor, 10).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
            <p>{item.decricaoCurta}</p>
          </div>
          <div className="item-search">
            <Link to="/">
              <img className="item-return" src={Return} alt="Voltar" />
            </Link>
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
