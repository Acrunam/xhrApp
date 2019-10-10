/* eslint-disable no-console */
const getBtn = document.querySelector('#get-btn');
const postBtn = document.querySelector('#post-btn');

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    // convert the JSON response into a JavaScript Object
    xhr.responseType = 'json';
    if (data) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = (err) => {
      reject(err);
    };
    // convert data into JSON
    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getData = () => {
  // '.then' is an alternative method to 'handle/receive' Promises just
  // as we do with 'async/await'
  sendHttpRequest('GET', 'https://reqres.in/api/users').then((responseData) => {
    console.log(responseData);
  });
};
const sendData = () => {
  sendHttpRequest('POST', 'https://reqres.in/api/register', {
    email: 'eve.holt@reqres.in',
    password: 'pistol',
  }).then((responseData) => {
    console.log(responseData);
  }).catch((err) => {
    console.log(err);
  });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
