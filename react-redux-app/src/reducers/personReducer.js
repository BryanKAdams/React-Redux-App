import { FETCH_MON_START, FETCH_MON_SUCC, FETCH_MON_FAIL } from "../actions"

// Import your actions in your reducer

//Set up your initialState

const initialState = {
    person: null,
    isFetching: false,
    error: ""
}

//create your reducer and default export it.
//Reducer sets state to initial state and takes in an action parameter
const reducer = (state = initialState, action) => {
    //switch is much easier than a bunch of if statements
    switch (action.type) {
        case FETCH_MON_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_MON_SUCC:
            return {
                ...state,
                person: action.payload,
                isFetching: false,
                error: ""
            };
        case FETCH_MON_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;

        //Put Cases/Actions Here
    }

}
export default reducer;
//default export reducer and import into the index.js reducer