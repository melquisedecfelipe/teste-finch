import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';

import { Creators as ItemActions } from '../../store/ducks/item';

function Checkbox({ id, favorito, setFavorite }) {
  function handleCheckbox() {
    setFavorite(id);
  }

  return (
    <div className="item-check">
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          value={favorito}
          onChange={() => handleCheckbox()}
          defaultChecked={favorito === true}
        />
        <span />
      </label>
      <p>tornar favorito</p>
    </div>
  );
}
const mapDispatchToProps = dispatch => bindActionCreators(ItemActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Checkbox);
