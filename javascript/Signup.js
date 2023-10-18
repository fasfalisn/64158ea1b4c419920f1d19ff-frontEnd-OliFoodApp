document.getElementById('i9gy8').onclick = (event) => {
    event.preventDefault();
    if(document.getElementById('idqx3').value !== document.getElementById('form3Example4c').value){
        console.log('passwords don\'t match')
        return;
      }
      if(document.getElementById('form2Example3c').checked !== true){
        console.log('please accept the terms of use');
        return;
      }
      user['username'] = document.querySelector("[annotationname = 'username']").value;
      user['useremail'] = document.querySelector("[annotationname = 'useremail']").value;
      user['usercategory'] = document.querySelector("[annotationname = 'usercategory']").value;
      user['password'] = document.querySelector("[annotationname = 'password']").value;
      apiUserApi.registeruser( user['useremail'], user['password'], user['username'], user['usercategory'] , (error, data, response) => {
        if (error) {
          console.error(error);
        }
        else {
          console.log('API called successfully. Returned data: ' + data);
          {
              location.href = '/Login';
          }
        }
      }
                           );
}; 

document.getElementById('if0cy').onclick = (event) => {
    event.preventDefault();
    { location.href = '/Login'; }
}; 

window.onload = () => { };