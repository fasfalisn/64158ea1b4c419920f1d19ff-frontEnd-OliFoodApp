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
    {
        location.href = "/Login";
    }
};
const onClickPaginationButtonivcw6h = (chunk, pagination) => {
    for (let i = 0; i < pagination.children.length; i++) {
        if (
            pagination.children[i].classList.value.includes("active") === true
        ) {
            pagination.children[i].classList.remove("active");
        }
    }
    let numberOfFrontButtons = findTypeOfPaginationivcw6h(pagination);
    pagination.children[chunk + numberOfFrontButtons - 1].classList.add(
        "active"
    );
    const filtergetAllSuppliers = {
        usercategory: {
            $eq: "Πελάτης",
        },
    };
    apiUserApi.getByParamsuser(filtergetAllSuppliers, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully. Returned data: " + data);
            const subDataElements = [
                ...document
                    .getElementById("ivcw6h")
                    .querySelectorAll("[dataitem='true']"),
            ].filter(
                (element, index, array) =>
                    !array.reduce(
                        (hasAncestorFlag, dataItem) =>
                            hasAncestorFlag ||
                            (element.compareDocumentPosition(dataItem) &
                                Node.DOCUMENT_POSITION_CONTAINS) ===
                                8,
                        false
                    )
            );
            const map = new Map();
            [...subDataElements].forEach((element, index) => {
                if (
                    index >=
                    data.length - (chunk - 1) * subDataElements.length
                ) {
                    subDataElements[index].style.display = "none";
                } else {
                    subDataElements[index].style.display = "";
                }
            });
            data.forEach((item, i) => {
                let revertIndex = data.length - i - 1;
                if (
                    data.length - chunk * subDataElements.length <=
                        revertIndex &&
                    revertIndex <
                        data.length - (chunk - 1) * subDataElements.length
                ) {
                    try {
                        const insideSubDataElement = subDataElements[
                            i - (chunk - 1) * subDataElements.length
                        ].querySelector("[annotationname = 'username']");
                        if (insideSubDataElement !== null) {
                            insideSubDataElement.textContent =
                                data[data.length - i - 1].username;
                        } else if (
                            subDataElements[
                                i - (chunk - 1) * subDataElements.length
                            ].getAttribute("annotationname") === "username"
                        ) {
                            subDataElements[
                                i - (chunk - 1) * subDataElements.length
                            ].textContent = data[data.length - i - 1].username;
                        }
                    } catch (e) {
                        console.log(e);
                    }
                    map.set(
                        subDataElements[
                            i - (chunk - 1) * subDataElements.length
                        ].getAttribute("id"),
                        data[data.length - i - 1]
                    );
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
            });
        }
    });
};
const findTypeOfPaginationivcw6h = (pagination) => {
    let firstChild = pagination.children[0];
    let secondChild = pagination.children[1];
    if (
        (firstChild.attributes.getNamedItem("pagination-first") !== null ||
            firstChild.attributes.getNamedItem("pagination-previous") !==
                null) &&
        (secondChild.attributes.getNamedItem("pagination-first") !== null ||
            secondChild.attributes.getNamedItem("pagination-previous") !== null)
    ) {
        return 2;
    } else if (
        firstChild.attributes.getNamedItem("pagination-first") !== null ||
        firstChild.attributes.getNamedItem("pagination-previous") !== null ||
        secondChild.attributes.getNamedItem("pagination-first") !== null ||
        secondChild.attributes.getNamedItem("pagination-previous") !== null
    ) {
        return 1;
    } else {
        return 0;
    }
};
const returnChunkIndexivcw6h = (chunk, numberOfPages, cause) => {
    if (cause === "+") {
        if (chunk < numberOfPages) {
            return chunk + 1;
        } else {
            return chunk;
        }
    } else if (cause === "-") {
        if (chunk > 2) {
            return chunk - 1;
        } else {
            return 1;
        }
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
        location.href = "/ConnectCustomers/" + transitionId;
    }
};
document.getElementById("i6mkue").onclick = (event) => {
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
                    .contains(document.getElementById("i6mkue")) === true &&
                document
                    .getElementById(key)
                    .contains(document.getElementById(parentId)) === false
            ) {
                transitionId = value._id;
                parentId = key;
            }
        });
        location.href = "/ConnectCustomers/" + transitionId;
    }
};
document.getElementById("irh828").onclick = (event) => {
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
                    .contains(document.getElementById("irh828")) === true &&
                document
                    .getElementById(key)
                    .contains(document.getElementById(parentId)) === false
            ) {
                transitionId = value._id;
                parentId = key;
            }
        });
        location.href = "/ConnectCustomers/" + transitionId;
    }
};
document.getElementById("ith29o").onclick = (event) => {
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
                    .contains(document.getElementById("ith29o")) === true &&
                document
                    .getElementById(key)
                    .contains(document.getElementById(parentId)) === false
            ) {
                transitionId = value._id;
                parentId = key;
            }
        });
        location.href = "/ConnectCustomers/" + transitionId;
    }
};
document.getElementById("iea1kr").onclick = (event) => {
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
                    .contains(document.getElementById("iea1kr")) === true &&
                document
                    .getElementById(key)
                    .contains(document.getElementById(parentId)) === false
            ) {
                transitionId = value._id;
                parentId = key;
            }
        });
        location.href = "/ConnectCustomers/" + transitionId;
    }
};
document.getElementById("iplai5").onclick = (event) => {
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
                    .contains(document.getElementById("iplai5")) === true &&
                document
                    .getElementById(key)
                    .contains(document.getElementById(parentId)) === false
            ) {
                transitionId = value._id;
                parentId = key;
            }
        });
        location.href = "/ConnectCustomers/" + transitionId;
    }
};
document.getElementById("irml4z").onclick = (event) => {
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
                    .contains(document.getElementById("irml4z")) === true &&
                document
                    .getElementById(key)
                    .contains(document.getElementById(parentId)) === false
            ) {
                transitionId = value._id;
                parentId = key;
            }
        });
        location.href = "/ConnectCustomers/" + transitionId;
    }
};
document.getElementById("iifbqu").onclick = (event) => {
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
                    .contains(document.getElementById("iifbqu")) === true &&
                document
                    .getElementById(key)
                    .contains(document.getElementById(parentId)) === false
            ) {
                transitionId = value._id;
                parentId = key;
            }
        });
        location.href = "/ConnectCustomers/" + transitionId;
    }
};
document.getElementById("i70tjj").onclick = (event) => {
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
                    .contains(document.getElementById("i70tjj")) === true &&
                document
                    .getElementById(key)
                    .contains(document.getElementById(parentId)) === false
            ) {
                transitionId = value._id;
                parentId = key;
            }
        });
        location.href = "/ConnectCustomers/" + transitionId;
    }
};
document.getElementById("i6jxj3").onclick = (event) => {
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
                    .contains(document.getElementById("i6jxj3")) === true &&
                document
                    .getElementById(key)
                    .contains(document.getElementById(parentId)) === false
            ) {
                transitionId = value._id;
                parentId = key;
            }
        });
        location.href = "/ConnectCustomers/" + transitionId;
    }
};
document.getElementById("i948n").onclick = (event) => {
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
                    .contains(document.getElementById("i948n")) === true &&
                document
                    .getElementById(key)
                    .contains(document.getElementById(parentId)) === false
            ) {
                transitionId = value._id;
                parentId = key;
            }
        });
        location.href = "/ConnectCustomers/" + transitionId;
    }
};
document.getElementById("iiluk").onclick = (event) => {
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
                    .contains(document.getElementById("iiluk")) === true &&
                document
                    .getElementById(key)
                    .contains(document.getElementById(parentId)) === false
            ) {
                transitionId = value._id;
                parentId = key;
            }
        });
        location.href = "/ConnectCustomers/" + transitionId;
    }
};


const searchInput = document.getElementById('ihxvoh'); 

const subDataElements = [
  ...document.getElementById('ivcw6h').querySelectorAll("[dataitem='true']")
];

searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  subDataElements.forEach(element => {
    const usernameElement = element.querySelector("[annotationname='username']");
    if (usernameElement && !usernameElement.textContent.includes('Πελάτης')) {
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
  const list = document.getElementById('ivcw6h');
  spinner.style.display = 'block';
  list.style.display = 'none';

  const user = JSON.parse(localStorage.getItem('user'));
  if (!user || user.useremail !== 'georgesiro85@gmail.com') {
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

    const filtergetAllSuppliers = {
        usercategory: {
            $eq: "Πελάτης",
        },
    };
    apiUserApi.getByParamsuser(
        filtergetAllSuppliers,
        (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                console.log("API called successfully. Returned data: " + data);
                spinner.style.display = 'none';
                list.style.display = 'flex';
                const subDataElements = [
                    ...document
                        .getElementById("ivcw6h")
                        .querySelectorAll("[dataitem='true']"),
                ].filter(
                    (element, index, array) =>
                        !array.reduce(
                            (hasAncestorFlag, dataItem) =>
                                hasAncestorFlag ||
                                (element.compareDocumentPosition(dataItem) &
                                    Node.DOCUMENT_POSITION_CONTAINS) ===
                                    8,
                            false
                        )
                );
                const map = new Map();
                let chunk = 1;
                data.forEach((item, i) => {
                    if (subDataElements.length > i) {
                        try {
                            const insideSubDataElement = subDataElements[
                                i - (chunk - 1) * subDataElements.length
                            ].querySelector("[annotationname = 'username']");
                            if (insideSubDataElement !== null) {
                                insideSubDataElement.textContent =
                                    data[data.length - i - 1].username;
                            } else if (
                                subDataElements[
                                    i - (chunk - 1) * subDataElements.length
                                ].getAttribute("annotationname") === "username"
                            ) {
                                subDataElements[
                                    i - (chunk - 1) * subDataElements.length
                                ].textContent =
                                    data[data.length - i - 1].username;
                            }
                        } catch (e) {
                            console.log(e);
                        }
                        map.set(
                            subDataElements[i].getAttribute("id"),
                            data[data.length - i - 1]
                        );
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
                let numberOfPages = Math.ceil(
                    data.length / subDataElements.length
                );
                let pagination = document
                    .getElementById("ivcw6h")
                    .querySelector('[pagination-list="true"]');
                let paginationAttributes = [
                    "pagination-first",
                    "pagination-last",
                    "pagination-previous",
                    "pagination-next",
                ];
                for (let i = 0; i < pagination.children.length; ) {
                    let foundAttr = false;
                    paginationAttributes.forEach((attr) => {
                        if (
                            pagination.children[i].attributes.getNamedItem(
                                attr
                            ) !== null
                        ) {
                            foundAttr = true;
                        }
                    });
                    if (foundAttr === false) {
                        pagination.removeChild(pagination.children[i]);
                    } else {
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
                    let numberOfFrontButtons =
                        findTypeOfPaginationivcw6h(pagination);
                    pagination.insertBefore(
                        child,
                        pagination.children[numberOfFrontButtons]
                    );
                }
                for (let i = 0; i < pagination.children.length; i++) {
                    let child = pagination.children[i];
                    if (
                        child.getAttribute("pagination-first") === "true" &&
                        numberOfPages > 0
                    ) {
                        child.onclick = function () {
                            if (chunk !== 1) {
                                chunk = 1;
                                onClickPaginationButtonivcw6h(1, pagination);
                            }
                        };
                    }
                    if (
                        child.getAttribute("pagination-last") === "true" &&
                        numberOfPages > 0
                    ) {
                        child.onclick = function () {
                            if (chunk !== numberOfPages) {
                                chunk = numberOfPages;
                                onClickPaginationButtonivcw6h(
                                    numberOfPages,
                                    pagination
                                );
                            }
                        };
                    }
                    if (
                        child.getAttribute("pagination-previous") === "true" &&
                        numberOfPages > 0
                    ) {
                        child.onclick = function () {
                            if (
                                chunk !==
                                returnChunkIndexivcw6h(
                                    chunk,
                                    numberOfPages,
                                    "-"
                                )
                            ) {
                                chunk = returnChunkIndexivcw6h(
                                    chunk,
                                    numberOfPages,
                                    "-"
                                );
                                onClickPaginationButtonivcw6h(
                                    chunk,
                                    pagination
                                );
                            }
                        };
                    }
                    if (
                        child.getAttribute("pagination-next") === "true" &&
                        numberOfPages > 0
                    ) {
                        child.onclick = function () {
                            if (
                                chunk !==
                                returnChunkIndexivcw6h(
                                    chunk,
                                    numberOfPages,
                                    "+"
                                )
                            ) {
                                chunk = returnChunkIndexivcw6h(
                                    chunk,
                                    numberOfPages,
                                    "+"
                                );
                                onClickPaginationButtonivcw6h(
                                    chunk,
                                    pagination
                                );
                            }
                        };
                    }
                }
                [...subDataElements].forEach((element, index) => {
                    if (index >= data.length)
                        subDataElements[index].style.display = "none";
                });
            }
        }
    );
};
