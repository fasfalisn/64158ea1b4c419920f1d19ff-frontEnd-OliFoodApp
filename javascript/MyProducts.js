let apiUserApi = new TempApi.UserApi();
import TempApi from '../src/index';
document.getElementById('i02ok').onclick = (event) => {
  event.preventDefault();
  {
    location.href= '/MyProfile' ;
  }
};
document.getElementById('i172z').onclick = (event) => {
  event.preventDefault();
  {
    location.href= '/Homepage' ;
  }
};
document.getElementById('ikd4x').onclick = (event) => {
  event.preventDefault();
  {
    location.href= '/Orders' ;
  }
};
document.getElementById('i0l69').onclick = (event) => {
  event.preventDefault();
  {
    location.href= '/Suppliers' ;
  }
};
document.getElementById('i9kwo').onclick = (event) => {
  event.preventDefault();
  {
    location.href= '/Settings' ;
  }
};
document.getElementById('ircth').onclick = (event) => {
  event.preventDefault();
  localStorage.removeItem('user');
  {
    location.href= '/Login' ;
  }
};
document.getElementById('i64aj').onclick = (event) => {
  event.preventDefault();
  {
    location.href= '/NewProduct' ;
  }
};
document.getElementById('i549k').onclick = (event) => {
  event.preventDefault();
  {
    location.href= '/' ;
  }
};
document.getElementById('i7lwem').onclick = (event) => {
  event.preventDefault();
  {
    let transitionId = window.location.href.split('/').at(-1);
    let parentId = "";
    const storedData = window.localStorage.getItem("data");
    const newMap = new Map(JSON.parse(storedData));
    newMap.forEach((value, key) => {
      if (
        document.getElementById(key) !== null &&
        document
        .getElementById(key)
        .contains(document.getElementById("i7lwem")) === true &&
        document.getElementById(key).contains(document.getElementById(parentId)) === false
      ) {
        transitionId = value._id;
        parentId = key;
      }
    }
                  );
    location.href= '/EditProduct/' + transitionId;
  }
};
document.getElementById('iu4u9').onclick = (event) => {
  event.preventDefault();
  {
    let transitionId = window.location.href.split('/').at(-1);
    let parentId = "";
    const storedData = window.localStorage.getItem("data");
    const newMap = new Map(JSON.parse(storedData));
    newMap.forEach((value, key) => {
      if (
        document.getElementById(key) !== null &&
        document
        .getElementById(key)
        .contains(document.getElementById("iu4u9")) === true &&
        document.getElementById(key).contains(document.getElementById(parentId)) === false
      ) {
        transitionId = value._id;
        parentId = key;
      }
    }
                  );
    location.href= '/EditProduct/' + transitionId;
  }
};
window.onload = () => {
  const spinner = document.getElementById('spinner');
  const list = document.getElementById('irwbh');
  spinner.style.display = 'block';
  list.style.display = 'none';

  let user = JSON.parse(localStorage.getItem('user'));
  if(!user){
    location.href = "/Login"
    }
  let userId = user._id;

  if (user.usercategory === 'Προμηθευτής') {
    document.getElementById('i37m4').style.display = 'none';
  }
  else {
    document.getElementById('iy7v8').style.display = 'none';
    location.href = "/Homepage";
  }
  
  try {
    document.getElementById('iuo4f').textContent = user.username;
  } catch (e) {
    console.log(e);
  }

  apiUserApi.getuser( userId, (error, data, response) => {
    if (error) {
      console.error(error);
    }
    else {
      console.log('API called successfully. Returned data: ' + data);
      spinner.style.display = 'none';
      list.style.display = 'block';
      const map = new Map();
      try {
        document.querySelector('[annotationname = userproducts]').setAttribute('selected-element',response.body.query.userproducts.undefined);
        const insideSubdocument = document.querySelector("[annotationname = 'userproducts']");
        if (insideSubdocument !==null) {
          const tableDatauserproducts = response.body.query.userproducts;
          const tableDataElementproductImage = insideSubdocument.querySelectorAll("[annotationname = 'productImage']");
          const tableDataElementproductName = insideSubdocument.querySelectorAll("[annotationname = 'productName']");
          const tableDataElementproductDesc = insideSubdocument.querySelectorAll("[annotationname = 'productDesc']");
          tableDatauserproducts.forEach((data, indexuserproducts) => {
            if(tableDataElementproductImage.length <= indexuserproducts) {
              return;
            }
            try {
              if (tableDataElementproductImage[indexuserproducts] !== null) {
                tableDataElementproductImage[indexuserproducts].src = tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productImage.data;
              }
            }
            catch(e) {
              console.log(e);
            };
            try {
              if (tableDataElementproductName[indexuserproducts] !== null) {
                tableDataElementproductName[indexuserproducts].textContent = tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productName;
              }
            }
            catch(e) {
              console.log(e);
            };
            try {
              if (tableDataElementproductDesc[indexuserproducts] !== null) {
                tableDataElementproductDesc[indexuserproducts].textContent = tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productDesc;
              }
            }
            catch(e) {
              console.log(e);
            };
            {
              let parenttableDataElementproductImage =  tableDataElementproductImage[indexuserproducts];
              while(parenttableDataElementproductImage.tagName !== "TR") {
                parenttableDataElementproductImage = parenttableDataElementproductImage.parentNode;
              }
              map.set(
                parenttableDataElementproductImage.getAttribute("id"),
                tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1]
              );
            }
          }
                                       );
          [...tableDataElementproductImage].forEach((element, index) => {
            parent = tableDataElementproductImage[index];
            if (index >= tableDatauserproducts.length) {
              while(parent.tagName !== "TR") {
                parent = parent.parentNode;
              }
              parent.style.display = "none";
            }
            else {
              tableDataElementproductImage[index].style.display = "";
            }
          }
                                                   );
        }
        if(response.body.query.userproducts._id){
          map.set(
            document.querySelector(
              "[annotationname = 'userproducts']"
            ).getAttribute("id"),
            response.body.query.userproducts
          );
        }
      }
      catch (e) {
        console.log(e) };
      // Retrieve current data from local storage
      const storedData = window.localStorage.getItem("data");
      const currentData = storedData
      ? new Map(JSON.parse(storedData))
      : new Map();
      // Add new data to current data
      const newData = Array.from(map.entries());
      newData.forEach(([key, value]) => {
        currentData.set(key, value);
      }
                     );
      // Save updated data to local storage
      window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
      );
    }
  }
                    );
};
