let apiOrderApi = new TempApi.OrderApi();
import TempApi from "../src/index";
document.getElementById("i02ok").onclick = (event) => {
    event.preventDefault();
    {
        location.href = "/MyProfile";
    }
};
document.getElementById("i172z").onclick = (event) => {
    event.preventDefault();
    {
        location.href = "/Homepage";
    }
};
document.getElementById("ikd4x").onclick = (event) => {
    event.preventDefault();
    {
        location.href = "/Orders";
    }
};
document.getElementById("i5t9j").onclick = (event) => {
    event.preventDefault();
    {
        location.href = "/Products";
    }
};
document.getElementById("i0l69").onclick = (event) => {
    event.preventDefault();
    {
        location.href = "/Suppliers";
    }
};
document.getElementById("i9kwo").onclick = (event) => {
    event.preventDefault();
    {
        location.href = "/Settings";
    }
};
document.getElementById("ircth").onclick = (event) => {
    event.preventDefault();
    localStorage.removeItem('user');
    localStorage.removeItem('data');
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    {
        location.href = "/Login";
    }
};
document.getElementById("i64aj").onclick = (event) => {
    event.preventDefault();
    let orderId = window.location.pathname.replace("/EditOrder/", "");
    let order = new TempApi.Order();
    order["orderstatus"] = "Ακυρώθηκε"
    let opts = {
        order,
    };
    apiOrderApi.updateorder(orderId, opts, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully. Returned data: " + data);
            // document.querySelector(
            //     "[annotationname = ordercustomer]"
            // ).textContent = response.body.query.ordercustomer;
            {
                location.href = "/Orders";
            }
        }
    });
};
document.getElementById("i9a0c").onclick = (event) => {
    event.preventDefault();
    let orderId = window.location.pathname.replace("/EditOrder/", "");
    let order = new TempApi.Order();
    order["orderstatus"] = "Αποδοχή"
    let opts = {
        order,
    };
    apiOrderApi.updateorder(orderId, opts, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully. Returned data: " + data);
            // document.querySelector(
            //     "[annotationname = ordercustomer]"
            // ).textContent = response.body.query.ordercustomer;
            {
                location.href = "/Orders";
            }
        }
    });
};

function getFormattedDate(date) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return day + '/' + month + '/' + year;
  }

window.onload = () => {
    const spinner = document.getElementById('spinner');
    const list = document.getElementById('irwbh');
    spinner.style.display = 'block';
    list.style.display = 'none';
    let savedOrder;
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        location.href = "/Login";
    }

    if (user.usercategory === 'Προμηθευτής') {
        document.getElementById('i37m4').style.display = 'none';
        document.getElementById('4ui3').style.display = 'none';
        document.getElementById('4ui4').style.display = 'none';
      }
      else {
        document.getElementById('iy7v8').style.display = 'none';
        document.getElementById("i9a0c").style.display = 'none';
        document.getElementById("i64aj").style.display = 'none';
      }

    try {
        document.getElementById("iuo4f").textContent = user.username;
    } catch (e) {
        console.log(e);
    }
    let orderId = window.location.pathname.replace("/EditOrder/", "");
    apiOrderApi.getorder(orderId, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully. Returned data: " + data);
            const dayIsoFormat = new Date(response.body.query.createdAt);
            spinner.style.display = 'none';
            list.style.display = 'block';
            savedOrder = response.body.query.orderproducts;
            if(response.body.query.orderstatus !== 'Αναμονή'){
                document.getElementById("i9a0c").style.display = 'none';
                document.getElementById("i64aj").style.display = 'none';
            }
            const map = new Map();
            try {
                document
                    .querySelector("[annotationname = ordercustomer]")
                    .setAttribute(
                        "selected-element",
                        response.body.query.ordercustomer.undefined
                    );
                const insideSubdocument = document.querySelector(
                    "[annotationname = 'ordercustomer']"
                );
                if (insideSubdocument !== null) {
                    try {
                        const attributeSubdocumentElement =
                            insideSubdocument.querySelector(
                                "[annotationname = 'username']"
                            );
                        if (attributeSubdocumentElement !== null) {
                            attributeSubdocumentElement.textContent =
                            (user.usercategory === 'Πελάτης') ? response.body.query.ordersupplier.username : response.body.query.ordercustomer.username;
                        }
                    } catch (e) {
                        console.log(e);
                    }
                    try {
                        const attributeSubdocumentElement =
                            insideSubdocument.querySelector(
                                "[annotationname = 'useraddress']"
                            );
                        if (attributeSubdocumentElement !== null) {
                            attributeSubdocumentElement.textContent =
                                response.body.query.ordercustomer.useraddress;
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
                if (response.body.query.ordercustomer._id) {
                    map.set(
                        document
                            .querySelector("[annotationname = 'ordercustomer']")
                            .getAttribute("id"),
                        response.body.query.ordercustomer
                    );
                }
            } catch (e) {
                console.log(e);
            }
            try {
                document.querySelector(
                    "[annotationname = ordercomment]"
                ).value = response.body.query.ordercomment;
            } 
            catch (e) {
                console.log(e);}
            try {
                if(response.body.query.ordernote){
                    document.querySelector(
                    "[annotationname = ordernote]"
                    ).value = response.body.query.ordernote;
                }
            } 
            catch (e) {
                console.log(e);}
            try {
                const subDataElements =[...document.getElementById("i60fb").querySelectorAll( "[dataitem='true']" )].filter(
                    (element, index, array) =>
                    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
                  );

                
          const tbody = document.getElementById("imt3z");
          savedOrder.forEach((item, i) => {
            // Create a new table row as an HTML string
            console.log(item.orderproduct.productName);
            const newRowHTML = `
                    <tr dataitem="true" class="list-item-content flex classRule-ihesz">
                      <td class="list-cell-left classRule-isizv">
                        <img alt="Image" href="" listimage src="${item.orderproduct.productImage.data}" class="list-item-image classRule-i549k"/>
                      </td>
                      <td class="list-cell-right classRule-itrxx">
                        <div class="form-group flex wabli-box classRule-i8tkm">
                          <h1 listtitle annotationname = 'productName' class="card-title classRule-i5n9k">${item.orderproduct.productName}
                          </h1>
                          <div class="form-group flex wabli-box classRule-iwilq">
                            <div annotationname = 'productCategory' class="p-2 mw-100 classRule-i60zm">${item.orderproductquantity}
                            </div>
                            <div annotationname = 'productUnit' class="p-2 mw-100 classRule-isgn1">${item.orderproduct.productUnit}
                            </div>
                            <i class="fs-5 classRule-ijncg bi-x-circle">
                            </i>
                          </div>
                        </div>
                        <p listdescription annotationname = 'productDesc' class="card-text classRule-il02z">${item.orderproduct.productDesc}
                        </p>
                        <hr class="m-2 classRule-ilhe3"/>
                      </td>
                    </tr>
            `;
          
            // Append the new row HTML to the table body
            tbody.insertAdjacentHTML('beforeend', newRowHTML);

          });
                
            } catch (e) {
                console.log(e);
            }
            // Retrieve current data from local storage
            const storedData = window.localStorage.getItem("data");
            const currentData = storedData
                ? new Map(JSON.parse(storedData))
                : new Map();
            // Add new data to current data
            const newData = Array.from(map.entries());
            newData.forEach(([key, value]) => {
                currentData.set(key, value);
            });
            // Save updated data to local storage
            window.localStorage.setItem(
                "data",
                JSON.stringify(Array.from(currentData.entries()))
            );
        }
    });
};
