import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import NewsList from './news/NewsList.js';

class Hello extends React.Component {
    render() {
        return (
            <NewsList />
        );
    }
}

render(<Hello />, $('#content')[0]);