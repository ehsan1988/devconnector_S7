import axios from 'axios';


export const GET_ERROR = 'GET_ERROR';

export const registerUser = (userData, history) => dispatch => {
  axios.post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => dispatch({
      type: GET_ERROR,
      payload: err.response.data
    }));
};