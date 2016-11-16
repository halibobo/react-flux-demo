/**
 * Created by su on 2016/11/14.
 */

import React from 'react'
import {Relax, msg} from 'iflux2'
import {fromJS} from 'immutable'


const noop = () => {
};

@Relax
export default class Main extends React.Component {

    static defaultProps = {
        onShowTip: noop,
    }

    handleClick = (tip) =>{
        onShowTip(tip);
    }

    render() {

        // 目前微信支查询自营商品fromOwner=1
        return (
            <div className="home" style={{minHeight: 100}}>
                <div
                    onShowTip={this.props.onShowTip}>
                    <input type="button" value="Focus the text input" onClick={this.handleClick("aa")} />
                </div>
            </div>
        )
    }

};
