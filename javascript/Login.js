let apiUserApi = new TempApi.UserApi(); 
import TempApi from '../src/index'; 
let user = new TempApi.User(); 

document.getElementById('ip8qp').onclick = (event) => {
    event.preventDefault();
    { window.document.location = ''; }
}; 
// document.getElementById('i9gy8').onclick = (event) => {
//     event.preventDefault();
//     user['useremail'] = document.querySelector("[annotationname = 'useremail']").value; 
//     user['password'] = document.querySelector("[annotationname = 'password']").value; 
//     apiUserApi.createuser(user, (error, data, response) => { if (error) { console.error(error); } else { console.log('API called successfully. Returned data: ' + data); { location.href = '/Homepage'; } } });
// }; 

document.getElementById('i9gy8').onclick = (event) => {
    event.preventDefault();
    user['useremail'] = document.querySelector("[annotationname = 'useremail']").value;
    user['password'] = document.querySelector("[annotationname = 'password']").value;
    apiUserApi.loginuser( user['useremail'],user['password'], (error, data, response) => {
      if (error) {
        console.error(error);
      }
      else {
        const expires = new Date();
        expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000);
        document.cookie = `accessToken=${response.body.token};expires=${expires.toUTCString()};path=/`;
        localStorage.setItem('user', JSON.stringify(response.body.user));
        { location.href = '/Homepage'; }
      }
    }
                         );
  };

document.getElementById('ilkqq').onclick = (event) => {
    event.preventDefault();
    { location.href = '/Signup'; }
}; 

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(function(registration) {
    console.log('Service worker successfully registered.');
  })
  .catch(function(error) {
    console.log('Service worker registration failed:', error);
  });
}


window.onload = () => { 
  const token = document.cookie.split('accessToken=')[1].split(';')[0].replace(' ','')
  if (token!=='' && token !== undefined) {
    // Redirect to the home page
    window.location.href = '/Homepage';
  }
};