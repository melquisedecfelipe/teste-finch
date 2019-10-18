import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.scss';

import Item from '../../components/Item';
import Search from '../../components/Search';
import Loader from '../../components/Loader';

export default function Dashboard({ history }) {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState(' - Carregando...');
  const [subtitle, setSubtitle] = useState('Carregando...');
  const [search, setSearch] = useState('');
  const [countFavorite, setCountFavorite] = useState(0);
  const [loading, setLoading] = useState(true);
  const locationPath = history.location.pathname;

  function handleInput(e) {
    setSearch(e.target.value);
  }

  function handleCount(e) {
    setCountFavorite(e);
  }

  const filteredItems = items.filter(elem =>
    elem.nome.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const storageItems = JSON.parse(localStorage.getItem('items'));
    let data;

    async function loadItems() {
      if (localStorage.length === 0) {
        const response = await api.get('/5d3b57023000005500a2a0a6');
        data = response.data.produtos;
        localStorage.setItem('items', JSON.stringify(data));
      } else {
        data = storageItems;
      }

      switch (locationPath) {
        case '/':
          setTitle(' - Conheça todos os nossos produtos');
          setSubtitle('Listagem de produtos - clique no produto desejado para saber mais');
          break;
        case '/exclusivos':
          data = data.filter(elem => elem.exclusivo === true);
          setTitle(' - Conheça nossos produtos exclusivos');
          setSubtitle(
            'Listagem de produtos exclusivos - clique no produto desejado para saber mais',
          );
          break;
        case '/promocao':
          data = data.filter(elem => elem.promocao === true);
          setTitle(' - Conheça nossas promoções');
          setSubtitle(
            'Listagem de produtos em promoção - clique no produto desejado para saber mais',
          );
          break;
        case '/favoritos':
          data = data.filter(elem => elem.favoritos === true);
          setTitle(' - Meus Favoritos');
          setSubtitle(
            `Listagem de produtos marcados como favoritos -
            clique no produto desejado para saber mais`,
          );
          break;
        default:
          break;
      }

      setItems(data);
      setLoading(false);
    }

    loadItems();
  }, [locationPath, countFavorite]);

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1>
              Empresa XPTO
              <span>{title}</span>
            </h1>
            <p>{subtitle}</p>
          </div>
          <div className="dashboard-search">
            <Search handleInput={handleInput} />
          </div>
        </div>
        <div className="dashboard-content">
          {filteredItems.length > 0 ? (
            filteredItems.map(elem => <Item key={elem.id} item={elem} handleCount={handleCount} />)
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
