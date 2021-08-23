import React from 'react';
import SHOP_DATA from './shop.data.js'

import '../../component/collection-preview/collection-preview.jsx'
import CollectionPreview from '../../component/collection-preview/collection-preview.jsx';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
           this.state = {
        collections: SHOP_DATA
    }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherColletcionProps}) =>(
                        <CollectionPreview key={id} {...otherColletcionProps}/>
                    ))
                }
            </div>
        )
    }


}

export default ShopPage;