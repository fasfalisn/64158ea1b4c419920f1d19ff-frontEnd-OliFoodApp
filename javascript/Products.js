let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';document.getElementById('i02ok').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/MyProfile' ;}};document.getElementById('i172z').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Homepage' ;}};document.getElementById('ikd4x').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Orders' ;}};document.getElementById('i5t9j').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Products' ;}};document.getElementById('i0l69').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Suppliers' ;}};document.getElementById('i9kwo').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Settings' ;}};document.getElementById('ircth').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Login' ;}};document.getElementById('i549k').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '';}};document.getElementById('itrm2').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '';}};document.getElementById('i64aj').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/OrderSummary' ;}};window.onload = () => {let userId = window.location.pathname.replace('/Products/','');apiUserApi.getuser( userId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { 
        document.querySelector('[annotationname = userproducts]').setAttribute('selected-element',response.body.query.userproducts.undefined);
        const insideSubdocument = document.querySelector("[annotationname = 'userproducts']");
        if (insideSubdocument !==null) {
          const tableDatauserproducts = response.body.query.userproducts;
    
    
    
      const tableDataElementproductname = insideSubdocument.querySelectorAll("[annotationname = 'productname']");
      const tableDataElementproductdesc = insideSubdocument.querySelectorAll("[annotationname = 'productdesc']");
    tableDatauserproducts.forEach((data, indexuserproducts) => {
      if(tableDataElementproductname.length <= indexuserproducts) {
        return;
      }
       
    try {
      if (tableDataElementproductname[indexuserproducts] !== null) {
        tableDataElementproductname[indexuserproducts].textContent = tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productname;
      }
    }
    catch(e) {console.log(e);}; 
    try {
      if (tableDataElementproductdesc[indexuserproducts] !== null) {
        tableDataElementproductdesc[indexuserproducts].textContent = tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1].productdesc;
      }
    }
    catch(e) {console.log(e);};
      
      {
        let parenttableDataElementproductname =  tableDataElementproductname[indexuserproducts];
        while(parenttableDataElementproductname.tagName !== "TR") {
          parenttableDataElementproductname = parenttableDataElementproductname.parentNode;
        }
        map.set(
          parenttableDataElementproductname.getAttribute("id"),
          tableDatauserproducts[tableDatauserproducts.length - indexuserproducts -1]
        );
      }
    
    });
    
      [...tableDataElementproductname].forEach((element, index) => {
        parent = tableDataElementproductname[index];
        if (index >= tableDatauserproducts.length) {
          while(parent.tagName !== "TR") {
            parent = parent.parentNode;
          }
          parent.style.display = "none";
        }
        else {
          tableDataElementproductname[index].style.display = "";
        }
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
     } catch (e) { console.log(e) };
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
    }});};