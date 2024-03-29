import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item";

import { selectCollection } from "../../redux/shop/shop.selector";

import {
    CollectionPageContainerStyle,
    CollectionTitle,
    CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainerStyle>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </CollectionItemsContainer>
        </CollectionPageContainerStyle>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
