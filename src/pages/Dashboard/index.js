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
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const localStorageItems = JSON.parse(localStorage.getItem('items'));
  const url = props.location.pathname;

  useEffect(() => {
    async function loadItems() {
      let data;

      if (localStorage.length === 0) {
        const response = await api.get('/5d3b57023000005500a2a0a6');
        data = response.data.produtos;
        localStorage.setItem('items', JSON.stringify(data));
      } else {
        data = localStorageItems;
      }

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
        case '/favoritos':
          data = data.filter(elem => {
            return elem.favoritos === true;
          });
          setTitle('- Meus Favoritos');
          setSubTitle('Listagem de produtos marcados como favoritos - clique no produto desejado para saber mais');
          break;
        default:
          break;
      }

      setItems(data);
      setLoading(false);
    }

    loadItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleInput(e) {
    setSearch(e.target.value);
  }

  let filteredItems = items.filter(elem => {
    return elem.nome.toLowerCase().includes(search.toLowerCase());
  });

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
            <Search handleInput={handleInput} />
          </div>
        </div>
        <div className="dashboard-content">
          { filteredItems.length > 0 ? (
              filteredItems.map(elem => (
                <Item key={elem.id} item={elem}/>
              ))
            ) : (
            <div className="load">
              { loading === true ? (
                <h1>Carregando... :D</h1>
              ) : (
                <h1>Não encontramos nenhum item com esse filtro... :(</h1>
              )}
            </div>
          ) }
        </div>
      </div>
    </div>
  )
}
