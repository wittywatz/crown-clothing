import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionPage from '../CollectionPage/CollectionPage';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';

const ShopPage = () => {
  let { path } = useRouteMatch();
  // console.log(url);
  return (
    <div className="shop-page">
      <Switch>
        <Route exact path={path} component={CollectionsOverview} />
        <Route path={`${path}/:category`} component={CollectionPage} />
      </Switch>
    </div>
  );
};
export default connect(null)(ShopPage);
