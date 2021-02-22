import React, { Component } from 'react';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';
import SHOP_DATA from './ShopData';

class ShopPage extends Component {
  state = { collections: SHOP_DATA };
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => {
          return <PreviewCollection key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}
export default ShopPage;
