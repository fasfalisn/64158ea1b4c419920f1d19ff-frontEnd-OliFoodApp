let apiUserApi = new TempApi.UserApi();
import TempApi from '../src/index';
let apiProductApi = new TempApi.ProductApi();
let apiOrderApi = new TempApi.OrderApi();
let order = new TempApi.Order;

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
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  {
    location.href= '/Login' ;
  }
};

document.getElementById('i64aj').onclick = (event) => {
  event.preventDefault();
  let supplierId = window.location.pathname.replace('/OrderSummary/','');
  let customerId = JSON.parse(localStorage.getItem('user'))._id;
  let jsonData = JSON.parse(localStorage.getItem('order')).products;
  const transformedData = Object.keys(jsonData).map((key) => {
      const product = jsonData[key];
      return {
        orderproduct: key, // Use the key as the orderproduct value
        orderproductquantity: product.quantity
      };
    });
    
    const result = { orderproducts: transformedData };
  order["ordersupplier"] = supplierId;
  order["ordercustomer"] = customerId;
  order["orderstatus"] = "Αναμονή";
  order["ordercomment"] = document.querySelector(
        "[annotationname = 'ordercomment']"
    ).value;
  order["orderproducts"] = result.orderproducts;

  apiOrderApi.createorder(order, (error,data,response) => {
      if(error){
          console.log(error);
      }
      else {
          console.log('ok');
      }
  })
  {
    window.document.location = '/Homepage';
  }
  {
    location.href= '/Homepage' ;
  }
};
window.onload = () => {
  const spinner = document.getElementById('spinner');
  const list = document.getElementById('irwbh');
  spinner.style.display = 'block';
  list.style.display = 'none';
    
  const user = JSON.parse(localStorage.getItem('user'));
  if(!user){
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
      document.getElementById("iuo4f").textContent = user.username;
  } catch (e) {
      console.log(e);
  }
  let userId = window.location.pathname.replace('/OrderSummary/','');
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

    const savedOrder = JSON.parse(localStorage.getItem('order')).products;
    const subDataElements =[...document.getElementById("i60fb").querySelectorAll( "[dataitem='true']" )].filter(
        (element, index, array) =>
        !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
    );


    const tbody = document.getElementById("i3bch");
    Object.keys(savedOrder).forEach((item, i) => {
      const savedProduct = savedOrder[item];
      // Create a new table row as an HTML string

      apiProductApi.getproduct(item, (error,data,response) => {
        if(error){
            console.log(error);
        } else {
            let product = response.body.query;
            console.log(product.productName);
            const newRowHTML = `
                    <tr dataitem="true" class="list-item-content flex classRule-ihesz">
                      <td class="list-cell-left classRule-isizv">
                        <img alt="Image" listimage src="${product.productImage.data}" annotationname="productImage" class="list-item-image classRule-i549k"/>
                      </td>
                      <td class="list-cell-right classRule-itrxx">
                        <div class="form-group flex wabli-box classRule-i8tkm">
                          <h1 listtitle annotationname="productName" class="card-title classRule-i5n9k">${product.productName}
                          </h1>
                          <div class="form-group flex wabli-box classRule-iwilq">
                            <div annotationname="productQuantity" class="p-2 mw-100 classRule-i60zm">${savedProduct.quantity}
                            </div>
                            <div annotationname="productUnit" class="p-2 mw-100 classRule-isgn1">${product.productUnit}
                            </div>
                          </div>
                        </div>
                        <p listdescription annotationname="productDesc" class="card-text classRule-il02z">${product.productDesc}
                        </p>
                        <hr class="m-2 classRule-ilhe3"/>
                      </td>
                    </tr>
            `;
          
            // Append the new row HTML to the table body
            tbody.insertAdjacentHTML('beforeend', newRowHTML);

        }
    })
      
    });

};
