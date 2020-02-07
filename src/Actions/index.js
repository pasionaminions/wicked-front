import { GET_MULTIPLE, GET_SINGLE } from "./action-types";

// export function get_multiple() {
//     return function (dispatch) {
//         return fetch("https://localhost:44324/api/Users/")
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({ type: LOAD_USERS, payload: json });
//             });
//     }
// }

// export function get_single() {
//     return function (dispatch) {
//         return fetch("https://localhost:44324/api/Users/")
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({ type: ..., payload: json });
//             });
//     }
// }