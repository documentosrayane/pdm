import axios from 'axios';

const doGet = async (url) => {
  await  axios
    .get(url)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
};

const doPost = async (url, body) => {
  
  await  axios
    .get(url, body)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
};


const doPut = (url, body) => {
  axios.put(url, body).then().catch();
};

const doDelete = (url) => {
  axios.delete(url).then().catch();
};

export { doGet, doPost, doPut, doDelete };
