import * as REST from "../lib/rest";
import * as ACTIONS from "../Actions"

const url = "https://wickapi.azurewebsites.net/api/pasionausers";

export function get_multiple() {
    return function (dispatch) {
        return REST.get(url).then((json) => dispatch(ACTIONS.get_multiple(json)))    
    }
}

export function get_single(id) {
    return function (dispatch) {
        return REST.get(url + "/" + id).then((json) => dispatch(ACTIONS.get_single(json)))    
    }
}

export function edit_user(id, user) {
    return function (dispatch) {
        return REST.put(url + "/" + id, user).then((json) => dispatch(ACTIONS.edit_user(json)))    
    }
}

export function post_user(user) {
    return function (dispatch) {
        return REST.post(url, user).then((json) => dispatch(ACTIONS.post_user(json)))    
    }
}

export function delete_user(id) {
    return function (dispatch) {
        return REST.del(url + "/" + id).then((json) => dispatch(ACTIONS.delete_user(json)))    
    }
}