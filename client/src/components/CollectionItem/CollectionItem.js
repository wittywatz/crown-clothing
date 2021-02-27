import React from 'react';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/actions';
import CustomButton from '../CustomButton/CustomButton';
import './CollectionItem.scss';
const CollectionItem = ({ item, addCartItem }) => {
  const { price, name, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addCartItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default connect(null, { addCartItem })(CollectionItem);
