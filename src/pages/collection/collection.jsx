import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item";

import { selectCollection } from "../../redux/shop/shop.selector";

import './collection.scss'

const CollectionPage = () => (
    <div className="Collection">
        <h2 className="title">Collection</h2>
    </div>
);

const mapstateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapstateToProps)(CollectionPage);
