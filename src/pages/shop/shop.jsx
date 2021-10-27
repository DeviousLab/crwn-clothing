import React from "react";
import { Route } from "react-router-dom";

import collectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={collectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
);

export default ShopPage;