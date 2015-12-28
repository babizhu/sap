/**
 * Created by liu_k on 2015/12/28.
 */

export const GET_SIDEBAR_JSON = 'GET_SIDEBAR_JSON';


export function getSidebarJson() {
    return {
        type: GET_SIDEBAR_JSON,
        reddit
    }
}