import React from 'react';
import { useSelector } from 'react-redux';

import CollectionPreview from '../preview-collection/preview-collection';
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import './collections-overview.scss';

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);

    return (
        <div className="collections-overview">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
};

export default CollectionsOverview;