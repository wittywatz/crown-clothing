import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ title, image }) => {
  return (
    <div className="menu-item">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
MenuItem.defaultProps = {
  title: 'ITEM',
};

export default MenuItem;
