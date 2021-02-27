import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { collectionsForPreview } from '../../redux/shop/shopSelector';
import PreviewCollection from '../PreviewCollection/PreviewCollection';
import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <PreviewCollection key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: collectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
