import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';

class Hello extends React.Component {
    render() {
        return (
            <div>Hello World</div>
        );
    }
}

render(<Hello />, $('#content')[0]);