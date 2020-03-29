import { ACTION_TYPES } from "../Actions/workOut";


const initialState = {
    list: []
}

export const workOut = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state;
    }
};
