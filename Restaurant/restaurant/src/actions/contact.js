import { ADD_CONTACT,BASE_URL } from './types';
import { setAlert } from './Alert';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

export const addContact = (formData) => dispatch => {
    const {name,email,contact} = formData;
    const id = uuid();
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    axios.post(`${BASE_URL}contacts`,{id,name,email,contact},config)
    .then(res => {
        dispatch({
            type : ADD_CONTACT,
            payload:{id,name,email,contact}
        })
        dispatch(setAlert('Contact Added Successfully','success'));
    })
    .catch(err => {
        dispatch(setAlert(err.message,'danger'))
    })
}