import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';
// import { withRouter } from 'react-router-dom';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import './CollectionPage.scss';
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  const renderContent = () => {
    return items.map((item) => <CollectionItem key={item.id} item={item} />);
  };
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">{renderContent()}</div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.category)(state),
});
export default connect(mapStateToProps)(CollectionPage);
