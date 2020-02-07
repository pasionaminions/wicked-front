import { GET_MULTIPLE, GET_SINGLE, EDIT_SINGLE, POST_USER, DELETE_USER } from "./action-types";

export function get_multiple(json) {
    return {type: GET_MULTIPLE, payload: json}
}

export function get_single(json) {
    return {type: GET_SINGLE, payload: json}

}

export function edit_user(json) {
    return {type: EDIT_SINGLE, payload: json}
}

export function post_user(json) {
    return {type: POST_USER, payload: json}
}

export function delete_user(json) {
    return {type: DELETE_USER, payload: json}
}