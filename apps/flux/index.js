/**
 * Created by su on 2016/11/14.
 */

import React from 'react'
import {Relax, msg} from 'iflux2'

@Relax
export default class Main extends React.Component {

    static defaultProps = {
        appShowTip: noop,
    };

};
