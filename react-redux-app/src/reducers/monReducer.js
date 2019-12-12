// Import your actions in your reducer

//Set up your initialState

const initialState = {
    pokemon: null,
    isFetching: false,
    error: ""
}

//create your reducer and default export it.
//Reducer sets state to initial state and takes in an action parameter
const reducer = (state = initialState, action) => {
    //switch is much easier than a bunch of if statements
    switch(action.type) {
        //Put Cases/Actions Here
    }

}
export default reducer;
//default export reducer and import into the index.js reducer