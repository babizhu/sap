/**
 * Created by liu_k on 2015/12/29.
 */

import { combineReducers } from 'redux'
import {
    RECEIVE_SIDEBAR_DATA
} from '../actions'

function sidebarData(state = { data:'',receivedAt:0}, action = null) {
    switch (action.type) {
        case RECEIVE_SIDEBAR_DATA:

            return  {
                data:action.data,
                receivedAt:action.receivedAt
            };
        default:
            return state
    }
}
const rootReducer = combineReducers({
    sidebarData
});

export default rootReducer