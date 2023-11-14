import axios from 'axios';

const API_KEY = 'AIzaSyCLUHXAV_vwdglvWVbo-4-dFlqpqW1dBIc';
const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts';


const signIn = async (email, password) => {
  try {
    await axios.post(`${BASE_URL}:signInWithPassword?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true,
    });
  } catch (error) {
    if (error.response.data.error.message === 'INVALID_LOGIN_CREDENTIALS') {
      throw Error('Usuario/Senha Invalido');
    }
  }
};

export { signIn };