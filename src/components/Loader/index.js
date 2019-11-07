import React from 'react';
import ContentLoader from 'react-content-loader';

import './styles.scss';

export default function Loader() {
  return (
    <ContentLoader
      className="loader"
      height={335}
      width={300}
      speed={3}
      primaryColor="#f5f5f5"
      secondaryColor="#eeeeee"
    >
      <rect x="0" y="0" rx="0" ry="0" width="350" height="165" />

      <rect x="20" y="190" rx="6" ry="6" width="100" height="25" />
      <rect x="200" y="192.5" rx="6" ry="6" width="90" height="15" />

      <rect x="20" y="225" rx="6" ry="6" width="170" height="25" />

      <rect x="20" y="260" rx="6" ry="6" width="250" height="12.5" />
      <rect x="20" y="280" rx="6" ry="6" width="245" height="12.5" />
      <rect x="20" y="300" rx="6" ry="6" width="210" height="12.5" />
    </ContentLoader>
  );
}
