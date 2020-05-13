import {combineReducers} from "redux"
import entrieReducer from "./entrieReducer"
import {firestoreReducer} from "redux-firestore"
import  authReducer from "./authReducer"
import { firebaseReducer } from "react-redux-firebase"

const rootReducer = combineReducers({
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    project:entrieReducer,
    auth:authReducer
})

export default rootReducer;