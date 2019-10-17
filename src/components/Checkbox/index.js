import React from 'react';

import './styles.scss';

export default function Checkbox({ id, favoritos, handleCheckbox }) {
  return (
    <div className="item-check">
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          value={favoritos}
          onChange={() => handleCheckbox()}
          defaultChecked={favoritos === true}
        />
        <span />
      </label>
      <p>tornar favorito</p>
    </div>
  );
}
