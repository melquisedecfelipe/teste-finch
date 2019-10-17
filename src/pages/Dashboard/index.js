import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.scss';

import Header from '../../components/Header';
import Item from '../../components/Item';
import Search from '../../components/Search';
import Loader from '../../components/Loader';

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState(' - Carregando...');
  const [subTitle, setSubTitle] = useState('Carregando...');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const localStorageItems = JSON.parse(localStorage.getItem('items'));
  let data;

  function handleMenu() {
    switch (window.location.pathname) {
      case '/':
        setTitle(' - Conheça todos os nossos produtos');
        setSubTitle('Listagem de produtos - clique no produto desejado para saber mais');
        break;
      case '/exclusivos':
        data = data.filter(elem => {
          return elem.exclusivo === true;
        });
        setTitle(' - Conheça nossos produtos exclusivos');
        setSubTitle('Listagem de produtos exclusivos - clique no produto desejado para saber mais');
        break;
      case '/promocao':
        data = data.filter(elem => {
          return elem.promocao === true;
        });
        setTitle(' - Conheça nossas promoções');
        setSubTitle(
          'Listagem de produtos em promoção - clique no produto desejado para saber mais',
        );
        break;
      case '/favoritos':
        data = data.filter(elem => {
          return elem.favoritos === true;
        });
        setTitle(' - Meus Favoritos');
        setSubTitle(
          `Listagem de produtos marcados como favoritos -
          clique no produto desejado para saber mais`,
        );
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    async function loadItems() {
      if (localStorage.length === 0) {
        const response = await api.get('/5d3b57023000005500a2a0a6');
        data = response.data.produtos;
        localStorage.setItem('items', JSON.stringify(data));
      } else {
        data = localStorageItems;
      }

      handleMenu();

      setItems(data);
      setLoading(false);
    }

    setTimeout(() => {
      loadItems();
    }, 750);
  }, []);

  function handleInput(e) {
    setSearch(e.target.value);
  }

  const filteredItems = items.filter(elem => {
    return elem.nome.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1>
              Empresa XPTO
              <span>{title}</span>
            </h1>
            <p>{subTitle}</p>
          </div>
          <div className="dashboard-search">
            <Search handleInput={handleInput} />
          </div>
        </div>
        <div className="dashboard-content">
          {filteredItems.length > 0 ? (
            filteredItems.map(elem => <Item key={elem.id} item={elem} />)
          ) : loading === true ? (
            <>
              <Loader />
              <Loader />
              <Loader />
              <Loader />
              <Loader />
            </>
          ) : (
            <h1>Não encontramos nenhum item com esse filtro... :(</h1>
          )}
        </div>
      </div>
    </div>
  );
}
