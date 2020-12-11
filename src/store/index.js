import { createStore ,combineReducers} from 'redux';
import loginFlagReducer from '../pages/loginControl/reducers';
import counterReducer from "../components/counter/counterReducer";

const rootReducers = combineReducers({
    loginFlagReducer: loginFlagReducer,
    counterReducer: counterReducer
});
const store = createStore(rootReducers)

export default store;