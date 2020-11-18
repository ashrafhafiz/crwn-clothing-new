import React from "react";
import { Route } from "react-router-dom";

import "./ShopPage.styles.scss";
import CollectionOverview from "../../components/collection-overview/CollectionOverview.component";
import CollectionPage from "../collection/CollectionPage.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
