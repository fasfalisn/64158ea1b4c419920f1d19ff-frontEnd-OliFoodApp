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
document.getElementById('i5t9j').onclick = (event) => {
  event.preventDefault();
  {
    location.href= '/Products' ;
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
  {
    location.href= '/Login' ;
  }
};
document.getElementById('iz189').onclick = (event) => {
  event.preventDefault();
  {
    let transitionId = window.location.href.split('/').at(-1);
    
    location.href= '/Profile/' + transitionId;
  }
};
document.getElementById('i64aj').onclick = (event) => {
  event.preventDefault();
  {
    // Get a reference to the table
    const table = document.getElementById("imt3z");

    // Create an object to store the selected products and quantities
    const selectedProducts = {products: {}};

    // Loop through the rows in the table (skip the header row)
    const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    for (const row of rows) {
      // const productName = row.querySelector("h2[annotationname=productName]").textContent.trim();
      // const productPrice = row.querySelector("p[annotationname=productPrice]").textContent.trim();  
        const quantityInput = row.cells[1].getElementsByTagName("input")[0];
        const quantity = parseInt(quantityInput.value, 10); // Convert input value to an integer
        console.log(quantity);
        // Check if the quantity is greater than 0, meaning the user selected this product
        if (quantity > 0) {
          const productIdElement = row.querySelector("[data-product-id]");
          const productId = productIdElement.getAttribute("data-product-id");
            // Create a unique product ID (you can use a more meaningful ID if available)
            // Store the selected product and quantity in the object
            selectedProducts.products[productId] = {
              id: productId,
              quantity: quantity
            }
        }
    }

    localStorage.setItem('order', JSON.stringify(selectedProducts));
    let userId = window.location.pathname.replace("/Products/", "");
    // Print the selected products and quantities to the console
    console.log(selectedProducts);
      location.href = "/OrderSummary/" + userId;
  }
};

const searchInput = document.getElementById('ihxvoh'); 

const subDataElements = [
  ...document.getElementById('imt3z').querySelectorAll("[dataitem='true']")
];

searchInput.addEventListener('input', function() {
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

  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    location.href = "/Login"
  }

  if (user.usercategory === 'Προμηθευτής') {
    document.getElementById('i37m4').style.display = 'none';
    location.href = "/Homepage";
  }
  else {
    document.getElementById('iy7v8').style.display = 'none';
  }

  try {
    document.getElementById('iuo4f').textContent = user.username;
  } catch (e) {
    console.log(e);
  }

  let userId = window.location.pathname.replace('/Products/','');
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
        document.querySelector('[annotationname = username]').textContent = response.body.query.username;
      }
      catch (e) {
        console.log(e) };
      try {
        document.querySelector('[annotationname = useraddress]').textContent = response.body.query.useraddress;
      }
      catch (e) {
        console.log(e) };
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
                        <img alt="Image" listimage src="${tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productImage.data}" id="i549k" annotationname="productImage" class="list-item-image classRule-i549k"/>
                      </td>
                      <td class="list-cell-right classRule-itrxx">
                        <div class="form-group flex wabli-box classRule-i8tkm">
                          <div class="form-group flex wabli-box classRule-i3n1t">
                            <i class="fs-5 classRule-iqbms bi-heart-fill">
                            </i>
                            <h1 listtitle data-product-id=${tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1]._id} annotationname="productName" class="card-title classRule-i5n9k">${tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productName}
                            </h1>
                          </div>
                          <div id="iwilq" class="form-group flex wabli-box classRule-iwilq">
                            <input type="text" required class="form-control p-2 classRule-iu8gw"/>
                            <div annotationname="productUnit" class="p-2 mw-100 classRule-i60zm">${tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productUnit}
                            </div>
                          </div>
                        </div>
                        <p listdescription annotationname="productDesc" class="card-text classRule-il02z">${tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productDesc}
                        </p>
                        <hr id="ilhe3" class="m-2 classRule-ilhe3"/>
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
