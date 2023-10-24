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
    {
        location.href = "/Login";
    }
};
document.getElementById("i549k").onclick = (event) => {
    event.preventDefault();
    {
        window.document.location = "";
    }
};
document.getElementById("itrm2").onclick = (event) => {
    event.preventDefault();
    {
        window.document.location = "";
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
                const subDataElements =[...document.getElementById("i60fb").querySelectorAll( "[dataitem='true']" )].filter(
                    (element, index, array) =>
                    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
                  );
                savedOrder.forEach((item,i) => {
                    console.log(item);
                    // const savedProduct = savedOrder[item];
                    // let product;
                    
                    if(subDataElements.length > i)
                    {
                                console.log(item);
                                  try {
                                    const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productName']");
                                    if(insideSubDataElement !== null){
                                      insideSubDataElement.textContent = item.orderproduct.productName;
                                    }
                                    else if(subDataElements[i].getAttribute('annotationname') === 'productName'){
                                      subDataElements[i].textContent = item.orderproduct.productName;
                                    }
                                  }
                                  catch (e) {
                                    console.log(e) };
                                  try {
                                    const insideSubDataElement = subDataElements[i].querySelector("[listimage]");
                                    if(insideSubDataElement !== null){
                                      insideSubDataElement.src = item.orderproduct.productImage.data;
                                    }
                                  }
                                  catch (e) {
                                    console.log(e) };
                                try {
                                    const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productCategory']");
                                    if(insideSubDataElement !== null){
                                    insideSubDataElement.textContent = item.orderproductquantity;
                                    }
                                    else if(subDataElements[i].getAttribute('annotationname') === 'productCategory'){
                                    subDataElements[i].textContent = item.orderproductquantity;
                                    }
                                }
                                catch (e) {
                                    console.log(e) };
                                  try {
                                    const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productUnit']");
                                    if(insideSubDataElement !== null){
                                      insideSubDataElement.textContent = item.orderproduct.productUnit;
                                    }
                                    else if(subDataElements[i].getAttribute('annotationname') === 'productUnit'){
                                      subDataElements[i].textContent = item.orderproduct.productUnit;
                                    }
                                  }
                                catch (e) {
                                console.log(e) };
                                try {
                                    const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productDesc']");
                                    if(insideSubDataElement !== null){
                                        insideSubDataElement.textContent = item.orderproduct.productDesc;
                                    }
                                    else if(subDataElements[i].getAttribute('annotationname') === 'productDesc'){
                                        subDataElements[i].textContent = item.orderproduct.productDesc;
                                    }
                                    }
                                    catch (e) {
                                    console.log(e) };
                                    
                    
                    //   map.set(subDataElements[i].getAttribute('id'), savedOrder[savedOrder.length-i-1])
                    }
                    
                  }
                              );
                  [...subDataElements].forEach(
                    (element, index) => {
                        console.log(element);
                        parent = subDataElements[index];
                        if (index >= savedOrder.length) {
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
