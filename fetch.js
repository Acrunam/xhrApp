/* eslint-disable no-console */
const getBtn = document.querySelector('#get-btn');
const postBtn = document.querySelector('#post-btn');

const sendHttpRequest = (method, url, data) => fetch(url, {
  method,
  body: JSON.stringify(data),
  headers: data ? { 'Content-Type': 'application/json' } : {},
}).then(async (response) => {
  if (!response.ok) {
    const errResData = await response.json();
    const error = new Error('Something went wrong');
    error.data = errResData;
    throw error;
  }
  return response.json();
});
const getData = () => {
  sendHttpRequest('GET', 'https://reqres.in/api/users').then((responseData) => {
    console.log(responseData);
  });
};
const sendData = () => {
  sendHttpRequest('POST', 'https://reqres.in/api/register', {
    email: 'eve.holt@reqres.in',
    // password: 'pistol',
  }).then((responseData) => {
    console.log(responseData);
  }).catch((err) => {
    console.log(err, err.data);
  });
};
getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
