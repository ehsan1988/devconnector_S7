import axios from 'axios';
import setAuthToken from "../utils/setAuthToken";


export const GET_ERROR = 'GET_ERROR';


//Register User
export const registerUser = (userData, history) => dispatch => {
  axios.post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => dispatch({
      type: GET_ERROR,
      payload: err.response.data
    }));
};


// Login User -- get token auth

export const loginUser = userData => dispatch => {
  axios.post('/api/users/login', userData)
    .then(res => {
      //save token in localStorage
      const {token} = res.data;

      //set token to LS
      localStorage.setItem('jwtToken', token);

      //Set token to auth header
      setAuthToken(token);


    })
    .catch(err => dispatch({
      type: GET_ERROR,
      payload: err.response.data
    }))
};