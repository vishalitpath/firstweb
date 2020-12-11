import { LOGIN_FLAG } from "../../../constants/actionTypes";

export function loginFlagAction(loginCheck) {
    debugger
    return { type: LOGIN_FLAG, payload: loginCheck }
};