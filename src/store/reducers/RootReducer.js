import ProjectReducer from './ProjectReducer';
import AuthReducer from './AuthReducer';
import {combineReducers} from 'redux'


const RootReducer = combineReducers({
    Auth : AuthReducer,
    Project : ProjectReducer
})

export default RootReducer;