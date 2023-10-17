let apiProductApi = new TempApi.ProductApi();import TempApi from '../src/index';document.getElementById('i02ok').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/MyProfile' ;}};document.getElementById('i172z').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Homepage' ;}};document.getElementById('ikd4x').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Orders' ;}};document.getElementById('i0l69').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Suppliers' ;}};document.getElementById('i9kwo').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Settings' ;}};document.getElementById('ircth').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Login' ;}};document.getElementById('i64aj').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/NewProduct' ;}};document.getElementById('i549k').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/' ;}};document.getElementById('i7lwem').onclick = (event) => {
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
      });
     location.href= '/EditProduct/' + transitionId;}};document.getElementById('iu4u9').onclick = (event) => {
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
      });
     location.href= '/EditProduct/' + transitionId;}};window.onload = () => {apiProductApi.getAllproduct((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("imt3z").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productimage']");
if(insideSubDataElement !== null && data[data.length -i -1].productimage !== undefined){
  insideSubDataElement.src = data[data.length -i -1].productimage.data;
  insideSubDataElement.name = data[data.length -i -1].productimage.name;
}
else if(subDataElements[i].getAttribute('annotationname') === 'productimage' && data[data.length -i -1].productimage !== undefined){
  subDataElements[i].src = data[data.length -i -1].productimage.data;
  subDataElements[i].name = data[data.length -i -1].productimage.name;
}
 } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productname']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].productname;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'productname'){
        subDataElements[i].textContent = data[data.length -i -1].productname;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'productdesc']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].productdesc;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'productdesc'){
        subDataElements[i].textContent = data[data.length -i -1].productdesc;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    
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
    
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};