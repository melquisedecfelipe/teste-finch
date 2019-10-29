import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';

import './styles.scss';

import Item from '../../components/Item';
import Search from '../../components/Search';
import Loader from '../../components/Loader';

import { Creators as ItemActions } from '../../store/ducks/item';

function Home({
  items,
  title,
  subtitle,
  search,
  favoriteCount,
  history,
  setItems,
  getAll,
  getExclusive,
  getPromotion,
  getFavorite,
  setSearch,
}) {
  const [loading, setLoading] = useState(true);
  const locationPath = history.location.pathname;

  function handleInput(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    async function loadItems() {
      if (localStorage.length === 0) {
        const { data } = await api.get('/5d3b57023000005500a2a0a6');
        setItems(data.produtos);
      }

      const storageItems = JSON.parse(localStorage.getItem('items'));

      switch (locationPath) {
        case '/':
          getAll(storageItems);
          break;
        case '/exclusivos':
          getExclusive(storageItems);
          break;
        case '/promocao':
          getPromotion(storageItems);
          break;
        case '/favoritos':
          getFavorite(storageItems);
          break;
        default:
          break;
      }

      setLoading(false);
    }

    loadItems();
  }, [
    setItems,
    getAll,
    getExclusive,
    getPromotion,
    getFavorite,
    setSearch,
    locationPath,
    favoriteCount,
  ]);

  const filteredItems = items.filter(elem =>
    elem.nome.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-header">
          <div>
            <h1>
              Empresa XPTO
              <span>{title}</span>
            </h1>
            <p>{subtitle}</p>
          </div>
          <div className="home-search">
            <Search handleInput={handleInput} />
          </div>
        </div>
        <div className="home-content">
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

const mapStateToProps = state => ({
  items: state.item.items,
  title: state.item.title,
  subtitle: state.item.subtitle,
  search: state.item.search,
  favoriteCount: state.item.favoriteCount,
});

const mapDispatchToProps = dispatch => bindActionCreators(ItemActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
