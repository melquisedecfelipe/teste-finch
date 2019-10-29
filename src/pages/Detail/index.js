import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../services/format';

import './styles.scss';

import Return from '../../assets/return@2x.png';

import { Creators as ItemActions } from '../../store/ducks/item';

function Detail({ detail, getItemDetail, match }) {
  const id = parseInt(match.params.id, 10);

  useEffect(() => {
    getItemDetail(id);
  }, [getItemDetail, id]);

  return (
    <div className="item">
      {detail.map(item => (
        <div className="item-container" key={id}>
          <div className="item-header">
            <div>
              <div className="item-content">
                <h1 key={item.id}>{item.nome}</h1>
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
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  detail: state.item.detail,
});

const mapDispatchToProps = dispatch => bindActionCreators(ItemActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
