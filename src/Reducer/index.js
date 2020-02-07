import { GET_MULTIPLE, GET_SINGLE } from "../actions/action-types";

const initialState = {
    users: [], single: {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MULTIPLE:
            return { users: action.payload }
        case GET_SINGLE:
            /*
                llenar {single} con datos
            */
            return { single }
        default:
            return state;
    }
}

export default rootReducer;