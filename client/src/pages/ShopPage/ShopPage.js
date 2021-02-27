import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionPage from '../CollectionPage/CollectionPage';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import {
  firestore,
  convertCollectionsSnapShotToMap,
} from '../../firebase/Firebase';
import { fetchCollections } from '../../redux/actions';
import { createStructuredSelector } from 'reselect';
import { shopCollections } from '../../redux/shop/shopSelector';
import WithSpinner from '../../components/withSpinnner/WithSpinner';

class ShopPage extends Component {
  unsubscribeFromSnapShot = null;
  componentDidMount() {
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(async (snapshot) => {
      const collections = convertCollectionsSnapShotToMap(snapshot);
      // console.log(collections);
      this.props.fetchCollections(collections);
    });
  }
  render() {
    // let { path } = useRouteMatch();
    // console.log(this.props.shopCollections);
    return (
      <div className="shop-page">
        <Switch>
          <Route
            exact
            path={this.props.match.path}
            component={
              this.props.shopCollections ? CollectionsOverview : WithSpinner
            }
          />
          <Route
            path={`${this.props.match.path}/:category`}
            component={
              this.props.shopCollections ? CollectionPage : WithSpinner
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  shopCollections,
});
export default connect(mapStateToProps, { fetchCollections })(ShopPage);
