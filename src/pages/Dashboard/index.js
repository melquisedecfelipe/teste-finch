import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.scss';

import Header from '../../components/Header';
import Item from '../../components/Item';
import Search from '../../components/Search';

export default function Dashboard(props) {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const localStorageItems = JSON.parse(localStorage.getItem('items'));
  const url = props.location.pathname;

  useEffect(() => {
    async function loadItems() {
      const response = await api.get('/5d3b57023000005500a2a0a6');
      let data = response.data.produtos;

      switch (url) {
        case '/':
          setTitle('- Conheça todos os nossos produtos');
          setSubTitle('Listagem de produtos - clique no produto desejado para saber mais');
          break;
        case '/exclusivos':
          data = data.filter(elem => {
            return elem.exclusivo === true;
          });
          setTitle('- Conheça nossos produtos exclusivos');
          setSubTitle('Listagem de produtos exclusivos - clique no produto desejado para saber mais');
          break;
        case '/promocao':
          data = data.filter(elem => {
            return elem.promocao === true;
          });
          setTitle('- Conheça nossas promoções');
          setSubTitle('Listagem de produtos em promoção - clique no produto desejado para saber mais');
          break;
        default:
          break;
      }

      localStorage.setItem('items', JSON.stringify(data));
      setItems(data);
    }

    if (localStorageItems !== null) {
      loadItems();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dashboard">
      <Header className="dashboard-header" />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1>Empresa XPTO <span>{title}</span></h1>
            <p>{subTitle}</p>
          </div>
          <div className="dashboard-search">
            <Search />
          </div>
        </div>
        <div className="dashboard-content">
          { items.length > 0 ? (
              items.map(item => (
                <Item key={item.id} item={item}/>
              ))
            ) : (
            <div className="load">
              <h1>Carregando...</h1>
            </div>
          ) }
        </div>
      </div>
    </div>
  )
}
