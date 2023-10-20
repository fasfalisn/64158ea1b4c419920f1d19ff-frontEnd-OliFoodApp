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
  {
    location.href= '/Login' ;
  }
};
document.getElementById('itrm2').onclick = (event) => {
  event.preventDefault();
  {
    window.document.location = '';
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

    Object.keys(savedOrder).forEach((item,i) => {
        const savedProduct = savedOrder[item];
        let product;
        
        if(subDataElements.length > i)
        {
            apiProductApi.getproduct(item, (error,data,response) => {
                if(error){
                    console.log(error);
                } else {
                    product = response.body.query;
                    console.log(product);
                      try {
                        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productName']");
                        if(insideSubDataElement !== null){
                          insideSubDataElement.textContent = product.productName;
                        }
                        else if(subDataElements[i].getAttribute('annotationname') === 'productName'){
                          subDataElements[i].textContent = product.productName;
                        }
                      }
                      catch (e) {
                        console.log(e) };
                    try {
                        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productQuantity']");
                        if(insideSubDataElement !== null){
                        insideSubDataElement.textContent = savedProduct.quantity;
                        }
                        else if(subDataElements[i].getAttribute('annotationname') === 'productQuantity'){
                        subDataElements[i].textContent = savedProduct.quantity;
                        }
                    }
                    catch (e) {
                        console.log(e) };
                    // try {
                    //   const insideSubDataElement = subDataElements[i].querySelector("[listimage]");
                    //   if(insideSubDataElement !== null){
                    //     insideSubDataElement.src = product.productImage.data;
                    //   }
                    // }
                    // catch (e) {
                    //     console.log(e) };
                      try {
                        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productUnit']");
                        if(insideSubDataElement !== null){
                          insideSubDataElement.textContent = product.productUnit;
                        }
                        else if(subDataElements[i].getAttribute('annotationname') === 'productUnit'){
                          subDataElements[i].textContent = product.productUnit;
                        }
                      }
                      catch (e) {
                        console.log(e) };
                }
            })
        
        //   map.set(subDataElements[i].getAttribute('id'), savedOrder[savedOrder.length-i-1])
        }
        
      }
                  );

          [...subDataElements].forEach(
            (element, index) => {
                parent = subDataElements[index];
                if (index >= Object.keys(savedOrder).length) {
                    while (parent.tagName !== "TR") {
                        parent = parent.parentNode;
                    }
                    console.log(parent);
                    parent.style.display = "none";
                } else {
                    subDataElements[
                        index
                    ].style.display = "";
                }
            }
        );





//   try {
//     document.querySelector('[annotationname = userproducts]').setAttribute('selected-element',response.body.query.userproducts.undefined);
//     const insideSubdocument = document.querySelector("[annotationname = 'userproducts']");
//     if (insideSubdocument !==null) {
//       const tableDatauserproducts = response.body.query.userproducts;
//       const tableDataElementproductImage = insideSubdocument.querySelectorAll("[annotationname = 'productImage']");
//       const tableDataElementproductName = insideSubdocument.querySelectorAll("[annotationname = 'productName']");
//       const tableDataElementproductUnit = insideSubdocument.querySelectorAll("[annotationname = 'productUnit']");
//       const tableDataElementproductDesc = insideSubdocument.querySelectorAll("[annotationname = 'productDesc']");
//       tableDatauserproducts.forEach((data, indexuserproducts) => {
//         if(tableDataElementproductImage.length <= indexuserproducts) {
//           return;
//         }
//         try {
//           if (tableDataElementproductImage[indexuserproducts] !== null) {
//             tableDataElementproductImage[indexuserproducts].src = tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productImage;
//           }
//         }
//         catch(e) {
//           console.log(e);
//         };
//         try {
//           if (tableDataElementproductName[indexuserproducts] !== null) {
//             tableDataElementproductName[indexuserproducts].textContent = tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productName;
//           }
//         }
//         catch(e) {
//           console.log(e);
//         };
//         try {
//           if (tableDataElementproductUnit[indexuserproducts] !== null) {
//             tableDataElementproductUnit[indexuserproducts].textContent = tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productUnit;
//           }
//         }
//         catch(e) {
//           console.log(e);
//         };
//         try {
//           if (tableDataElementproductDesc[indexuserproducts] !== null) {
//             tableDataElementproductDesc[indexuserproducts].textContent = tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productDesc;
//           }
//         }
//         catch(e) {
//           console.log(e);
//         };
//         {
//           let parenttableDataElementproductImage =  tableDataElementproductImage[indexuserproducts];
//           while(parenttableDataElementproductImage.tagName !== "TR") {
//             parenttableDataElementproductImage = parenttableDataElementproductImage.parentNode;
//           }
//           map.set(
//             parenttableDataElementproductImage.getAttribute("id"),
//             tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1]
//           );
//         }
//       }
//                                    );
//       [...tableDataElementproductImage].forEach((element, index) => {
//         parent = tableDataElementproductImage[index];
//         if (index >= tableDatauserproducts.length) {
//           while(parent.tagName !== "TR") {
//             parent = parent.parentNode;
//           }
//           parent.style.display = "none";
//         }
//         else {
//           tableDataElementproductImage[index].style.display = "";
//         }
//       }
//                                                );
//     }
//     if(response.body.query.userproducts._id){
//       map.set(
//         document.querySelector(
//           "[annotationname = 'userproducts']"
//         ).getAttribute("id"),
//         response.body.query.userproducts
//       );
//     }
//   }
//   catch (e) {
//     console.log(e) };
};
