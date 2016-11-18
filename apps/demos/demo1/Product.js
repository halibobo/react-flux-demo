/**
 * Created by su on 2016/11/16.
 */
import React from 'react';


export default class Product extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            titleChange: false
        }
    }

    componentDidMount() {
        msg.on('app:titleChange', this._onTitleChange);
    }

    componentWillUnmount() {
        msg.removeListener('app:titleChange', this._onTitleChange);
    }

}