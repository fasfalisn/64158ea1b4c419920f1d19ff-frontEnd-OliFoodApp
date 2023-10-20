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
  {
    location.href= '/Login' ;
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
          const tableDataElementproductImage = insideSubdocument.querySelectorAll("[annotationname = 'productImage']");
          const tableDataElementproductName = insideSubdocument.querySelectorAll("[annotationname = 'productName']");
          const tableDataElementproductUnit = insideSubdocument.querySelectorAll("[annotationname = 'productUnit']");
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
                tableDataElementproductName[indexuserproducts].setAttribute('data-product-id',tableDatauserproducts[tableDatauserproducts.length -indexuserproducts -1]._id); 
              }
            }
            catch(e) {
              console.log(e);
            };
            try {
              if (tableDataElementproductUnit[indexuserproducts] !== null) {
                tableDataElementproductUnit[indexuserproducts].textContent = tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productUnit;
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
