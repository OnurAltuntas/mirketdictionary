import {combineReducers} from "redux"
import entriesReducer from "./entriesReducer"
import {firestoreReducer} from "redux-firestore"


const rootReducer = combineReducers({
    firestore:firestoreReducer,
    project:entriesReducer,
})

export default rootReducer;