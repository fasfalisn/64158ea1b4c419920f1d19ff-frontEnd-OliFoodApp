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
    localStorage.removeItem('data');
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
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

const searchInput = document.getElementById('ihxvoh'); 

searchInput.addEventListener('input', function() {
  const subDataElements = [
    ...document.getElementById('imt3z').querySelectorAll("[dataitem='true']")
  ];
  const searchTerm = this.value.toLowerCase();
  subDataElements.forEach(element => {
    const usernameElement = element.querySelector("[annotationname='productName']");
    if (usernameElement && !usernameElement.textContent.includes('Title here')) {
      const username = usernameElement.textContent.toLowerCase();
      if (username.includes(searchTerm)) {
        element.style.display = 'block'; // Show the element
      } else {
        element.style.display = 'none'; // Hide the element
      }
    }
  });
});

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
          const tbody = document.getElementById("i3bch");
          tableDatauserproducts.forEach((data, indexuserproducts) => {
            // Create a new table row as an HTML string
            console.log(tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productName);
            const newRowHTML = `
              <tr dataitem="true" class="list-item-content flex classRule-ihesz">
                      <td class="list-cell-left classRule-isizv">
                        <img alt="Image" listimage src="${tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productImage.data}" annotationname="productImage" target_page="-1" class="list-item-image classRule-i549k pointer"/>
                      </td>
                      <td class="list-cell-right classRule-itrxx">
                        <div class="form-group flex wabli-box classRule-i8tkm">
                          <h1 listtitle annotationname="productName" class="card-title classRule-i5n9k">${tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productName}
                          </h1>
                          <div class="form-group flex wabli-box classRule-iwilq">
                            <div transition-by-id target_page="652d37eb49554d95c91e881c" onClick="function nextPage(){location.href= '/EditProduct/' + '${tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1]._id}';};nextPage();" class="btn btn-primary pointer classRule-i7lwem">Επεξεργασία
                            </div>
                          </div>
                        </div>
                        <p listdescription annotationname="productDesc" class="card-text classRule-il02z">${tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productDesc}
                        </p>
                        <hr class="m-2 classRule-ilhe3"/>
                      </td>
                    </tr>
            `;
          
            // Append the new row HTML to the table body
            tbody.insertAdjacentHTML('beforeend', newRowHTML);

          });
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
