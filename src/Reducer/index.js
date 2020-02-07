import { GET_MULTIPLE, GET_SINGLE, EDIT_SINGLE } from "../Actions/action-types";

const initialState = {
    users: [], 
    single: {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MULTIPLE:
            return Object.assign({}, state, {
                users: action.payload
            });
        case GET_SINGLE:
            return Object.assign({}, state, {
                single: action.payload
            });
        case EDIT_SINGLE:
            return Object.assign({}, state, {
                single: initialState.single
            });
        default:
            return state;
    }
}

export default rootReducer;