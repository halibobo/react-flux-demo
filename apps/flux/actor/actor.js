/**
 * Created by su on 2016/11/14.
 */

import {Actor, Action} from 'iflux2'

export default class FluxActor extends Actor {

    @Action('showTip')
    showTip(state, tip) {
        return state.set('tip', tip);
    }

};
