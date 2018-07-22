import axios from 'axios';


export const GET_ERROR = 'GET_ERROR';

export const registerUser = (userData) => dispatch => {
  axios.post('/api/users/register', userData)
    .then(res => console.log(res.data))
    .catch(err => dispatch({
      type: GET_ERROR,
      payload: err.response.data
    }));
};