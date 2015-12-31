/**
 * Created by liu_k on 2015/12/28.
 */
/**
 * Created by liu_k on 2015/12/28.
 */
//import polyfill from 'es6-promise'

//
//import fetch from 'whatwg-fetch'
//import fetch from 'isomorphic-fetch'
//import 'es5-shim'
import 'fetch-detector'
import 'fetch-ie8'
import Promise from 'es6-promise'
//import 'fetch-polyfill'//加上他就能支持ie11


//var Promise = require('es6-promise').Promise;
//import Promise from 'es6-promise'

//Promise.polyfill();
//import 'es6-promise'

//export const GET_SIDEBAR_JSON = 'GET_SIDEBAR_JSON';
export const RECEIVE_SIDEBAR_DATA = 'RECEIVE_SIDEBAR_DATA';

//
//export function getSidebarJson() {
//    return {
//        type: GET_SIDEBAR_JSON,
//    }
//}

export function fetchSidebarData() {
    return dispatch => {
        return fetch(`http://localhost:8000/t.json`)
            .then(response => response.json())
            .then(json => dispatch(receiveSidebarData( json)))
    }
}

function receiveSidebarData(json) {
   // let map = json.data.children.map(child => child.data);
   //for( let item of map){
   //    console.log(item);
   //}
    return {
        type: RECEIVE_SIDEBAR_DATA,
        //data: json.data.children.map(child => child.data),
        data: json.stories.map(child => child.title),
        receivedAt: Date.now()
    }
}