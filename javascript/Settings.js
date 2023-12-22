let apiUserApi = new TempApi.UserApi();
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
        location.href = "/MyProducts";
    }
};
document.getElementById("i0l69").onclick = (event) => {
    event.preventDefault();
    {
        location.href = "/Suppliers";
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
function calculateSize(img, maxWidth, maxHeight) {
    let width = img.width;
    let height = img.height;

    // calculate the width and height, constraining the proportions
    if (width > height) {
        if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
        }
    } else {
        if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
        }
    }
    return [width, height];
}
const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
document.getElementById("formFile").addEventListener("change", async (e) => {
    const MAX_WIDTH = 300;
    const MAX_HEIGHT = 300;
    const MIME_TYPE = "image/jpeg";
    const QUALITY = 0.9;
    const file = e.target.files[0]; // get the file
    const blobURL = URL.createObjectURL(file);
    const img = new Image();
    img.src = blobURL;
    img.onerror = function () {
        URL.revokeObjectURL(this.src);
        console.log("Cannot load image");
    };
    img.onload = function () {
        URL.revokeObjectURL(this.src);
        const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        canvas.toBlob(
            async (blob) => {
                const base64 = await convertBase64(blob);

                document
                    .getElementById("formFile")
                    .setAttribute("data-image-base64", base64);
                document
                    .getElementById("formFile")
                    .setAttribute("name", e.target.files[0].name);
            },
            MIME_TYPE,
            QUALITY
        );
    };
});
document.getElementById("i9gy8").onclick = (event) => {
    event.preventDefault();
    let userId = JSON.parse(localStorage.getItem('user'))._id;

    let user = new TempApi.User();
    user["useremail"] = document.querySelector(
        "[annotationname = 'useremail']"
    ).value;
    user["userphone"] = document.querySelector(
        "[annotationname = 'userphone']"
    ).value;
    user["username"] = document.querySelector(
        "[annotationname = 'username']"
    ).value;
    user["usercategory"] = document.querySelector(
        "[annotationname = 'usercategory']"
    ).value;
    user["userstatus"] = document.querySelector(
        "[annotationname = 'userstatus']"
    ).value;
    user["userimage"] = {
        data:
            document
                .querySelector("[annotationname = 'userimage']")
                .getAttribute("data-image-base64") !== null
                ? document
                      .querySelector("[annotationname = 'userimage']")
                      .getAttribute("data-image-base64")
                : document.querySelector("[annotationname = 'userimage']").src,
        name: document
            .querySelector("[annotationname = 'userimage']")
            .getAttribute("name"),
    };
    user["usertown"] = document.querySelector(
        "[annotationname = 'usertown']"
    ).value;
    user["useraddress"] = document.querySelector(
        "[annotationname = 'useraddress']"
    ).value;
    user["usertax"] = document.querySelector(
        "[annotationname = 'usertax']"
    ).value;
    let opts = { user };
    apiUserApi.updateuser(userId, opts, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully. Returned data: " + data);
            document.querySelector("[annotationname = useremail]").value =
                response.body.query.useremail;
            document.querySelector("[annotationname = userphone]").value =
                response.body.query.userphone;
            document.querySelector("[annotationname = username]").value =
                response.body.query.username;
            document.querySelector("[annotationname = usercategory]").value =
                response.body.query.usercategory;
            document.querySelector("[annotationname = userstatus]").value =
                response.body.query.userstatus;
            if (response.body.query.userimage !== undefined) {
                if (
                    document
                        .querySelector("[annotationname = userimage]")
                        .getAttribute("type") === "file"
                ) {
                    document
                        .querySelector("[annotationname = userimage]")
                        .setAttribute(
                            "data-image-base64",
                            response.body.query.userimage.data
                        );
                } else {
                    document.querySelector("[annotationname = userimage]").src =
                        response.body.query.userimage.data;
                }
                document.querySelector("[annotationname = userimage]").name =
                    response.body.query.userimage.name;
            }
            document.querySelector("[annotationname = usertown]").value =
                response.body.query.usertown;
            document.querySelector("[annotationname = useraddress]").value =
                response.body.query.useraddress;
            document.querySelector("[annotationname = usertax]").value =
                response.body.query.usertax;
            {
                location.href = "/MyProfile";
            }
        }
    });
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
  }
  else {
    document.getElementById('iy7v8').style.display = 'none';
  }

  try {
    document.getElementById('iuo4f').textContent = user.username;
  } catch (e) {
    console.log(e);
  }
  let userId = user._id;

    apiUserApi.getuser(userId, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully. Returned data: " + data);
            spinner.style.display = 'none';
            list.style.display = 'block';
            const map = new Map();
            try {
                document.querySelector("[annotationname = username]").value =
                    response.body.query.username;
            } catch (e) {
                console.log(e);
            }
            try {
                document.querySelector("[annotationname = useremail]").value =
                    response.body.query.useremail;
            } catch (e) {
                console.log(e);
            }
            try {
                document.querySelector("[annotationname = userphone]").value =
                    response.body.query.userphone;
            } catch (e) {
                console.log(e);
            }
            try {
                document.querySelector(
                    "[annotationname = usercategory]"
                ).value = response.body.query.usercategory;
            } catch (e) {
                console.log(e);
            }
            try {
                document.querySelector("[annotationname = userstatus]").value =
                    response.body.query.userstatus;
            } catch (e) {
                console.log(e);
            }
            try {
                if (response.body.query.userimage !== undefined) {
                    if (
                        document
                            .querySelector("[annotationname = userimage]")
                            .getAttribute("type") === "file"
                    ) {
                        document
                            .querySelector("[annotationname = userimage]")
                            .setAttribute(
                                "data-image-base64",
                                response.body.query.userimage.data
                            );
                        let fileName = response.body.query.userimage.name;
                        let file = new File(
                            [response.body.query.userimage.data],
                            fileName,
                            { lastModified: new Date().getTime() },
                            "utf-8"
                        );
                        let container = new DataTransfer();
                        container.items.add(file);

                        document.querySelector(
                            "[annotationname = userimage]"
                        ).files = container.files;
                    } else {
                        document.querySelector(
                            "[annotationname = userimage]"
                        ).src = response.body.query.userimage.data;
                    }
                    document.querySelector(
                        "[annotationname = userimage]"
                    ).name = response.body.query.userimage.name;
                }
            } catch (e) {
                console.log(e);
            }
            try {
                document.querySelector("[annotationname = usertown]").value =
                    response.body.query.usertown;
            } catch (e) {
                console.log(e);
            }
            try {
                document.querySelector("[annotationname = useraddress]").value =
                    response.body.query.useraddress;
            } catch (e) {
                console.log(e);
            }
            try {
                document.querySelector("[annotationname = usertax]").value =
                    response.body.query.usertax;
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
