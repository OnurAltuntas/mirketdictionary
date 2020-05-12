import {combineReducers} from "redux"
import entriesReducer from "./entriesReducer"
import {firestoreReducer} from "redux-firestore"
import  authReducer from "./authReducer"
import { firebaseReducer } from "react-redux-firebase"

const rootReducer = combineReducers({
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    project:entriesReducer,
    auth:authReducer
})

export default rootReducer;