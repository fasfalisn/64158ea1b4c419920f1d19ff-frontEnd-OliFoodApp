let apiUserApi = new TempApi.UserApi();
import TempApi from "../src/index";
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
        location.href = "/MyProducts";
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
document.getElementById("irpxlj").onclick = (event) => {
    event.preventDefault();
    {
        let transitionId = window.location.href.split("/").at(-1);
        let parentId = "";
        const storedData = window.localStorage.getItem("data");
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
            if (
                document.getElementById(key) !== null &&
                document
                    .getElementById(key)
                    .contains(document.getElementById("irpxlj")) === true &&
                document
                    .getElementById(key)
                    .contains(document.getElementById(parentId)) === false
            ) {
                transitionId = value._id;
                parentId = key;
            }
        });
        location.href = "/Products/" + transitionId;
    }
};
document.getElementById("ixn22h").onclick = (event) => {
    event.preventDefault();
    {
      let transitionId = window.location.href.split("/").at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
          if (
              document.getElementById(key) !== null &&
              document
                  .getElementById(key)
                  .contains(document.getElementById("ixn22h")) === true &&
              document
                  .getElementById(key)
                  .contains(document.getElementById(parentId)) === false
          ) {
              transitionId = value._id;
              parentId = key;
          }
      });
      location.href = "/Products/" + transitionId;
  }
};
document.getElementById("iw1pbl").onclick = (event) => {
    event.preventDefault();
    {
        let transitionId = window.location.href.split("/").at(-1);
        let parentId = "";
        const storedData = window.localStorage.getItem("data");
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
            if (
                document.getElementById(key) !== null &&
                document
                    .getElementById(key)
                    .contains(document.getElementById("iw1pbl")) === true &&
                document
                    .getElementById(key)
                    .contains(document.getElementById(parentId)) === false
            ) {
                transitionId = value._id;
                parentId = key;
            }
        });
        location.href = "/Products/" + transitionId;
    }
};
document.getElementById("i7x5ci").onclick = (event) => {
    event.preventDefault();
    {
        let transitionId = window.location.href.split("/").at(-1);
        let parentId = "";
        const storedData = window.localStorage.getItem("data");
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
            if (
                document.getElementById(key) !== null &&
                document
                    .getElementById(key)
                    .contains(document.getElementById("i7x5ci")) === true &&
                document
                    .getElementById(key)
                    .contains(document.getElementById(parentId)) === false
            ) {
                transitionId = value._id;
                parentId = key;
            }
        });
        location.href = "/Products/" + transitionId;
    }
};
window.onload = () => {
  const spinner = document.getElementById('spinner');
  const list = document.getElementById('ivcw6h');
  spinner.style.display = 'block';
  list.style.display = 'none';

  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    location.href = "/Login";
  }
  if (user.usercategory === 'Προμηθευτής') {
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

    const filtergetAllSuppliers = { usercategory: { $eq: "Προμηθευτής" } };
    apiUserApi.getByParamsuser( filtergetAllSuppliers, (error, data, response) => {
      if (error) {
        console.error(error);
      }
      else {
        console.log('API called successfully. Returned data: ' + data);
        spinner.style.display = 'none';
        list.style.display = 'block';
        const subDataElements =[...document.getElementById("ivcw6h").querySelectorAll( "[dataitem='true']" )].filter(
          (element, index, array) =>
          !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
        );
        const map = new Map();
        data.forEach((item,i) => {
          if(subDataElements.length > i)
          {
            try {
              const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'userimage']");
              if(insideSubDataElement !== null && data[data.length -i -1].userimage !== undefined){
                insideSubDataElement.src = data[data.length -i -1].userimage.data;
                insideSubDataElement.name = data[data.length -i -1].userimage.name;
              }
              else if(subDataElements[i].getAttribute('annotationname') === 'userimage' && data[data.length -i -1].userimage !== undefined){
                subDataElements[i].src = data[data.length -i -1].userimage.data;
                subDataElements[i].name = data[data.length -i -1].userimage.name;
              }
            }
            catch (e) {
              console.log(e) };
            try {
              const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'username']");
              if(insideSubDataElement !== null){
                insideSubDataElement.textContent = data[data.length -i -1].username;
              }
              else if(subDataElements[i].getAttribute('annotationname') === 'username'){
                subDataElements[i].textContent = data[data.length -i -1].username;
              }
            }
            catch (e) {
              console.log(e) };
            map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
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
        [...subDataElements].forEach((element,index) => {
          if(index >= data.length) subDataElements[index].style.display = 'none';
        }
                                    )}
    }
                              );
};
