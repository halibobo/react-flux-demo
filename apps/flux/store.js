/**
 * Created by su on 2016/11/14.
 */
import {FluxActor} from './actor/actor'


export default class AppStore extends Store {
    appShowTip = (tip) => {
        this.dispatch('showTip', tip);
    };

}