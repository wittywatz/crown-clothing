import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({ title, image, linkUrl }) => {
  return (
    <div className="menu-item">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="background-image"
      />
      <Link to={linkUrl} className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </Link>
    </div>
  );
};
MenuItem.defaultProps = {
  title: 'ITEM',
};

export default MenuItem;
