/**
 * Created by su on 2016/11/14.
 */
import FluxActor from './actor/actor'
import {Store} from 'iflux2'


export default class AppStore extends Store {

    bindActor() {
        return [
            new FluxActor
        ]
    }

    onShowTip = (tip) => {
        this.dispatch('showTip', tip);
    };

}