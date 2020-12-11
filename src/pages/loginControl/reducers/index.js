import { LOGIN_FLAG } from "../../../constants/actionTypes";

const initialState = {
    loginCheck: false
};

function loginFlagReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_FLAG:
            debugger
            return {
                ...state,
                loginCheck: action.payload
            }
        default: return state;
    }

};

export default loginFlagReducer;