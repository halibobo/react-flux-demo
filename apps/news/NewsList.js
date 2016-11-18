// NewsList.js

import React from 'react';
import NewsHeader from './NewsHeader.js';
import NewsItem from './NewsItem.js';
import '../../res/css/newList.css'

export default class NewsList extends React.Component {

    render() {

        return (
            <div className="newsList">
                <NewsHeader />
                <div className="newsList-newsItem">
                    {
                        (this.props.items).map(function(item, index) {
                            return (
                                <div>
                                    <NewsItem key={item.id} item={item} rank={index+1} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

/**
 * Created by su on 2016/11/14.
 */
