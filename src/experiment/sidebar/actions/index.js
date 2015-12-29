/**
 * Created by liu_k on 2015/12/28.
 */

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
        return fetch(`http://www.reddit.com/r/reactjs.json`)
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
        data: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}