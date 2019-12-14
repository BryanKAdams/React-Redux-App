import axios from 'axios';

export const FETCH_MON_START = 'FETCH_MON_START';
export const FETCH_MON_SUCC = 'FETCH_MON_SUCC';
export const FETCH_MON_FAIL = 'FETCH_MON_FAIL';

//Dispatch actions
export const getPerson = () => dispatch => {
    dispatch({type: FETCH_MON_START});
    axios.get('https://randomuser.me/api/')
    .then(res => {
        console.log(res)
        dispatch({type: FETCH_MON_SUCC, payload: res.data });
    })
    .catch(err => {dispatch({type: FETCH_MON_FAIL, payload: err.response})})
}