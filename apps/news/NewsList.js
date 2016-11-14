// NewsList.js

import React from 'react';
import NewsHeader from './NewsHeader.js';
import NewsItem from './NewsItem.js';

export default class NewsList extends React.Component {
    render() {
        return (
            <div className="newsList">
                <NewsHeader />
                <NewsItem />
            </div>
        );
    }
}/**
 * Created by su on 2016/11/14.
 */
