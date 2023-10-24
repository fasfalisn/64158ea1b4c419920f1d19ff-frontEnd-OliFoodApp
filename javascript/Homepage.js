let apiUserApi = new TempApi.UserApi();
let apiOrderApi = new TempApi.OrderApi();
import TempApi from '../src/index';

document.getElementById('i02ok').onclick = (event) => {
  event.preventDefault();
  { location.href = '/MyProfile'; }
};

document.getElementById('ikd4x').onclick = (event) => {
  event.preventDefault();
  { location.href = '/Orders'; }
};

document.getElementById('i5t9j').onclick = (event) => {
  event.preventDefault();
  { location.href = '/MyProducts'; }
};

document.getElementById('i0l69').onclick = (event) => {
  event.preventDefault();
  { location.href = '/Suppliers'; }
};

document.getElementById('i9kwo').onclick = (event) => {
  event.preventDefault();
  { location.href = '/Settings'; }
};

document.getElementById('ircth').onclick = (event) => {
  event.preventDefault();
  localStorage.removeItem('user');
  { location.href = '/Login'; }
};

document.getElementById('ip22g').onclick = (event) => {
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
          .contains(document.getElementById("ip22g")) === true &&
        document.getElementById(key).contains(document.getElementById(parentId)) === false
      ) {
        transitionId = value._id;
        parentId = key;
      }
    });
    location.href = '/EditOrder/' + transitionId;
  }
};

document.getElementById('iy0n52').onclick = (event) => {
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
          .contains(document.getElementById("iy0n52")) === true &&
        document.getElementById(key).contains(document.getElementById(parentId)) === false
      ) {
        transitionId = value._id;
        parentId = key;
      }
    });
    location.href = '/EditOrder/' + transitionId;
  }
};

document.getElementById('itw9tb').onclick = (event) => {
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
          .contains(document.getElementById("itw9tb")) === true &&
        document.getElementById(key).contains(document.getElementById(parentId)) === false
      ) {
        transitionId = value._id;
        parentId = key;
      }
    });
    location.href = '/EditOrder/' + transitionId;
  }
};



document.getElementById('irpxlj').onclick = (event) => {
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
          .contains(document.getElementById("irpxlj")) === true &&
        document.getElementById(key).contains(document.getElementById(parentId)) === false
      ) {
        transitionId = value._id;
        parentId = key;
      }
    });
    location.href = '/Products/' + transitionId;
  }
};

document.getElementById('ixn22h').onclick = (event) => {
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
          .contains(document.getElementById("ixn22h")) === true &&
        document.getElementById(key).contains(document.getElementById(parentId)) === false
      ) {
        transitionId = value._id;
        parentId = key;
      }
    });
    location.href = '/Products/' + transitionId;
  }
};

document.getElementById('iw1pbl').onclick = (event) => {
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
          .contains(document.getElementById("iw1pbl")) === true &&
        document.getElementById(key).contains(document.getElementById(parentId)) === false
      ) {
        transitionId = value._id;
        parentId = key;
      }
    });
    location.href = '/Products/' + transitionId;
  }
};

document.getElementById('inx10f').onclick = (event) => {
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
          .contains(document.getElementById("inx10f")) === true &&
        document.getElementById(key).contains(document.getElementById(parentId)) === false
      ) {
        transitionId = value._id;
        parentId = key;
      }
    });
    location.href = '/Products/' + transitionId;
  }
};

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  
  return day + '/' + month + '/' + year;
}

const onClickPaginationButtonivcw6h = (chunk, pagination) => {
  for (let i = 0; i < pagination.children.length; i++) {
    if (
      pagination.children[i].classList.value.includes("active") === true
    ) {
      pagination.children[i].classList.remove("active");
    }
  }
  let numberOfFrontButtons =  findTypeOfPaginationivcw6h(pagination);
  const filter = { usercategory: { $eq: "Προμηθευτής" } };
  pagination.children[chunk+numberOfFrontButtons-1].classList.add("active");
  apiUserApi.getByParamsuser( filter, (error, data, response) => {
    if (error) {
      console.error(error);
    }
    else {
      console.log('API called successfully. Returned data: ' + data);
      const subDataElements =[...document.getElementById("ivcw6h").querySelectorAll( "[dataitem='true']" )].filter(
        (element, index, array) =>
        !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
      );
      const map = new Map();
      [...subDataElements].forEach((element, index) => {
        if (index >= data.length - (chunk-1)*subDataElements.length) {
          subDataElements[index].style.display = 'none';
        }
        else {
          subDataElements[index].style.display = "";
        }
      }
                                  );
      data.forEach((item, i) => {
        let revertIndex = data.length - i -1;
        if(data.length - chunk*subDataElements.length <= revertIndex && revertIndex < data.length - (chunk-1)*subDataElements.length){
          try {
            const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'userimage']");
            if(insideSubDataElement !== null && data[data.length -i -1].userimage !== undefined){
              insideSubDataElement.src = data[data.length -i -1].userimage.data;
              insideSubDataElement.name = data[data.length -i -1].userimage.name;
            }
            else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'userimage' && data[data.length -i -1].userimage !== undefined){
              subDataElements[i-(chunk-1) *subDataElements.length].src = data[data.length -i -1].userimage.data;
              subDataElements[i-(chunk-1) *subDataElements.length].name = data[data.length -i -1].userimage.name;
            }
          }
          catch (e) {
            console.log(e) };
          try {
            const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'username']");
            if(insideSubDataElement !== null){
              insideSubDataElement.textContent = data[data.length -i -1].username;
            }
            else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'username'){
              subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].username;
            }
          }
          catch (e) {
            console.log(e) };
          map.set(subDataElements[i-(chunk-1) * subDataElements.length].getAttribute('id'), data[data.length-i-1])
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
        }
                       );
        // Save updated data to local storage
        window.localStorage.setItem(
          "data",
          JSON.stringify(Array.from(currentData.entries()))
        );
      }
                  )
    }
  }
                            );
}
const findTypeOfPaginationivcw6h = (pagination) => {
  let firstChild = pagination.children[0];
  let secondChild = pagination.children[1];
  if (
    (firstChild.attributes.getNamedItem("pagination-first") !== null ||
     firstChild.attributes.getNamedItem("pagination-previous") !== null) &&
    (secondChild.attributes.getNamedItem("pagination-first") !== null ||
     secondChild.attributes.getNamedItem("pagination-previous") !== null)
  ) {
    return 2;
  }
  else if  (
    (firstChild.attributes.getNamedItem("pagination-first") !== null ||
     firstChild.attributes.getNamedItem("pagination-previous") !== null) ||
    (secondChild.attributes.getNamedItem("pagination-first") !== null ||
     secondChild.attributes.getNamedItem("pagination-previous") !== null)
  ) {
    return 1;
  }
  else{
    return 0;
  }
}
const returnChunkIndexivcw6h = (chunk, numberOfPages, cause) => {
  if(cause === '+'){
    if(chunk < numberOfPages){
      return chunk + 1;
    }
    else{
      return chunk;
    }
  }
  else if(cause === '-'){
    if(chunk > 2){
      return chunk - 1;
    }
    else{
      return 1;
    }
  }
}

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
    document.getElementById('iydox').style.display = 'none';
    document.getElementById('iz189').style.display = 'none';
    document.getElementById('i37m4').style.display = 'none';
  }
  else {
    document.getElementById('iy7v8').style.display = 'none';
  }

  try {
    document.getElementById('iuo4f').textContent = user.username;
  } catch (e) {
    console.log(e);
  }

  const filtermyorders = {
    $or: [
      { ordercustomer: user._id },
      { ordersupplier: user._id }
    ]
  };
  apiOrderApi.getByParamsorder(filtermyorders, (error, data, response) => {
    if (error) {
      console.error(error);
    }
    else {
      console.log('API called successfully. Returned data: ' + data);
      spinner.style.display = 'none';
      list.style.display = 'block';
      const subDataElements = [...document.getElementById("ixoyu").querySelectorAll("[dataitem='true']")].filter(
        (element, index, array) =>
          !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
      );
      const map = new Map();
      data.forEach((item, i) => {
        if (subDataElements.length > i) {
          try {
            const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'orderstatus']");
            console.log(insideSubDataElement);
            if (insideSubDataElement !== null) {
              insideSubDataElement.textContent = data[data.length - i - 1].orderstatus;
            }
            else if (subDataElements[i].getAttribute('annotationname') === 'orderstatus') {
              subDataElements[i].textContent = data[data.length - i - 1].orderstatus;
            }
          }
          catch (e) {
            console.log(e)
          };
          try {
            const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'orderdate']");
            const dayIsoFormat = new Date(data[data.length -i -1].createdAt);
            if(insideSubDataElement !== null){
              insideSubDataElement.textContent = getFormattedDate(dayIsoFormat);
            }
            else if(subDataElements[i].getAttribute('annotationname') === 'orderdate'){
              subDataElements[i].textContent = getFormattedDate(dayIsoFormat);
            }
          }
          catch (e) {
            console.log(e) };
          try {
            const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'ordercustomer']");
            console.log(insideSubdocument);
            if (insideSubdocument !== null) {
              insideSubdocument.textContent = (user.usercategory === 'Πελάτης') ? data[data.length - i - 1].ordersupplier.username : data[data.length - i - 1].ordercustomer.username;
                
            }
            if (data[data.length - i - 1].ordercustomer._id) {
              map.set(
                subDataElements[i].querySelector(
                  "[annotationname = 'ordercustomer']"
                ).getAttribute("id"),
                data[data.length - i - 1].ordercustomer
              );
            }
          }
          catch (e) {
            console.log(e)
          };
          // try {
          //   const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'ordersupplier']");
          //   if (insideSubdocument !== null) {
          //   }
          //   if (data[data.length - i - 1].ordersupplier._id) {
          //     map.set(
          //       subDataElements[i].querySelector(
          //         "[annotationname = 'ordersupplier']"
          //       ).getAttribute("id"),
          //       data[data.length - i - 1].ordersupplier
          //     );
          //   }
          // }
          // catch (e) {
          //   console.log(e)
          // };
          map.set(subDataElements[i].getAttribute('id'), data[data.length - i - 1])
        }
      }
      );
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
      [...subDataElements].forEach((element, index) => {
        if (index >= data.length) subDataElements[index].style.display = 'none';
      }
      )
    }
  }
  );

  const filtergetAllSuppliers = { usercategory: { $eq: "Προμηθευτής" } };


  apiUserApi.getByParamsuser(filtergetAllSuppliers, (error, data, response) => {
    if (error) { console.error(error); } else {
      console.log('API called successfully. Returned data: ' + data);

      const subDataElements = [...document.getElementById("ivcw6h").querySelectorAll("[dataitem='true']")].filter(
        (element, index, array) =>
          !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
      );

      let chunk = 1;
      const map = new Map(); 
      data.forEach((item, i) => {
        if (subDataElements.length > i) {
          try {
            const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'userimage']");
            if (insideSubDataElement !== null && data[data.length - i - 1].userimage !== undefined) {
              insideSubDataElement.src = data[data.length - i - 1].userimage.data;
              insideSubDataElement.name = data[data.length - i - 1].userimage.name;
            }
            else if (subDataElements[i].getAttribute('annotationname') === 'userimage' && data[data.length - i - 1].userimage !== undefined) {
              subDataElements[i].src = data[data.length - i - 1].userimage.data;
              subDataElements[i].name = data[data.length - i - 1].userimage.name;
            }
          } catch (e) { console.log(e) }; try {
            const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'username']");
            if (insideSubDataElement !== null) {
              insideSubDataElement.textContent = data[data.length - i - 1].username;

            }
            else if (subDataElements[i].getAttribute('annotationname') === 'username') {
              subDataElements[i].textContent = data[data.length - i - 1].username;

            }
          } catch (e) { console.log(e) };
          map.set(subDataElements[i].getAttribute('id'), data[data.length - i - 1])

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

      let numberOfPages = Math.ceil(data.length/subDataElements.length);
      let pagination = document.getElementById("ivcw6h").querySelector('[pagination-list="true"]');
      let paginationAttributes = [
        "pagination-first",
        "pagination-last",
        "pagination-previous",
        "pagination-next",
      ];
      for (let i = 0; i < pagination.children.length; ) {
        let foundAttr = false;
        paginationAttributes.forEach((attr) => {
          if (pagination.children[i].attributes.getNamedItem(attr) !== null) {
            foundAttr = true;
          }
        }
                                    );
        if (foundAttr === false) {
          pagination.removeChild(pagination.children[i]);
        }
        else {
          i++;
        }
      }
      for (let i = 0; i < numberOfPages; i++) {
        let child = document.createElement("li");
        child.classList.add("page-item");
        if (i === numberOfPages - 1) {
          child.classList.add("active");
        }
        let insideChild = document.createElement("a");
        insideChild.classList.add("page-link");
        let textnode = document.createTextNode(numberOfPages - i);
        insideChild.appendChild(textnode);
        insideChild.setAttribute("href", "#!");
        child.appendChild(insideChild);
        child.onclick = function () {
          if (chunk !== numberOfPages - i) {
            chunk = numberOfPages - i;
            onClickPaginationButtonivcw6h(chunk, pagination);
          }
        };
        let numberOfFrontButtons =  findTypeOfPaginationivcw6h(pagination);
        pagination.insertBefore(child, pagination.children[numberOfFrontButtons]);
      }
      for (let i = 0; i < pagination.children.length; i++) {
        let child = pagination.children[i];
        if ( child.getAttribute("pagination-first") === "true" && numberOfPages > 0 ) {
          child.onclick = function () {
            if(chunk !== 1){
              chunk = 1;
              onClickPaginationButtonivcw6h(1, pagination);
            }
          };
        }
        if ( child.getAttribute( "pagination-last" ) === "true" && numberOfPages > 0 ) {
          child.onclick = function () {
            if(chunk !== numberOfPages){
              chunk = numberOfPages;
              onClickPaginationButtonivcw6h( numberOfPages, pagination);
            }
          };
        }
        if ( child.getAttribute("pagination-previous") === "true" && numberOfPages > 0 ) {
          child.onclick = function () {
            if(chunk !== returnChunkIndexivcw6h(chunk,numberOfPages,'-')){
              chunk = returnChunkIndexivcw6h(chunk,numberOfPages,'-');
              onClickPaginationButtonivcw6h(chunk, pagination);
            }
          };
        }
        if ( child.getAttribute("pagination-next") === "true" && numberOfPages > 0) {
          child.onclick = function () {
            if(chunk !== returnChunkIndexivcw6h(chunk,numberOfPages,'+')){
              chunk = returnChunkIndexivcw6h(chunk,numberOfPages,'+');
              onClickPaginationButtonivcw6h(chunk, pagination);
            }
          };
        }
      };


      [...subDataElements].forEach((element, index) => { if (index >= data.length) subDataElements[index].style.display = 'none'; })
    }
  });
};