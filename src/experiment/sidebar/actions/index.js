/**
 * Created by liu_k on 2015/12/28.
 */

export const GET_SIDEBAR_JSON = 'GET_SIDEBAR_JSON';


export function selectReddit(reddit) {
    return {
        type: SELECT_REDDIT,
        reddit
    }
}