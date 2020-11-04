import { GET_DISHES,GET_DISH,ADD_COMMENT,BASE_URL} from "./types";
import { setAlert } from './Alert';
import axios from 'axios';

export const getDishes = () => dispatch => {
    axios.get(`${BASE_URL}dishes`)
    .then(res => {
        dispatch({
            type : GET_DISHES,
            payload:res.data
        })
    })
    .catch(err => {
        dispatch(setAlert(err.message,'danger'))
    })
}

export const getDish = (id) => dispatch => {
    axios.get(`${BASE_URL}dishes/${id}`)
    .then(res => {
        dispatch({
            type : GET_DISH,
            payload : res.data
        })
    })
    .catch(err => {
        dispatch(setAlert(err.message,'danger'))
    })
}

export const addComment = (id,dish,formData) => dispatch => {
    const { name,comment} = formData;
    const date = new Date().toISOString();
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    const data = {...dish,comments:[{name,comment},...dish.comments]};

    axios.put(`${BASE_URL}dishes/${id}/`,data,config)
    .then(res => {
        dispatch({
            type:ADD_COMMENT,
            payload : { id,name,comment,date}
        })
        dispatch(setAlert('Comment Added Successfully','success'));
    })
    .catch(err => {
        dispatch(setAlert(err.message,'danger'))
    })
}