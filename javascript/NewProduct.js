let apiProductApi = new TempApi.ProductApi();
import TempApi from "../src/index";
let apiUserApi = new TempApi.UserApi();
let product = new TempApi.Product();
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
document.getElementById("iy0oer").onclick = (event) => {
    event.preventDefault();
    product["productName"] = document.querySelector(
        "[annotationname = 'productName']"
    ).value;
    product["productCategory"] = document.querySelector(
        "[annotationname = 'productCategory']"
    ).value;
    product["productImage"] = {
        data:
            document
                .querySelector("[annotationname = 'productImage']")
                .getAttribute("data-image-base64") !== null
                ? document
                      .querySelector("[annotationname = 'productImage']")
                      .getAttribute("data-image-base64")
                : document.querySelector("[annotationname = 'productImage']")
                      .src,
        name: document
            .querySelector("[annotationname = 'productImage']")
            .getAttribute("name"),
    };
    product["productUnit"] = document.querySelector(
        "[annotationname = 'productUnit']"
    ).value;
    product["productDesc"] = document.querySelector(
        "[annotationname = 'productDesc']"
    ).value;
    apiProductApi.createproduct(product, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully. Returned data: " + data);
            const productId = response.body.query._id;
          let user = JSON.parse(localStorage.getItem('user'));
          const userId = user._id;
          user.userproducts.push(productId);
          // localStorage.setItem('user', JSON.stringify(user));
          let opts = {
            user};
          apiUserApi.updateuser( userId, opts, (error, data, response) => {
            if (error) {
              console.error(error);
            }
            else {
        
              console.log('API called successfully. Returned data: ' + data);
              console.log(response.body.query);
              localStorage.setItem('user', JSON.stringify(response.body.query));
              location.href = "/MyProducts";
              
            }
          }
                               );
            
        }
    });
};
window.onload = () => {
    
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    location.href = "/Login"
  }

  if (user.usercategory === 'Προμηθευτής') {
    document.getElementById('i37m4').style.display = 'none';
  }
  else {
    document.getElementById('iy7v8').style.display = 'none';
    location.href = "/Homepage";
  }

  try {
    document.getElementById('iuo4f').textContent = user.username;
  } catch (e) {
    console.log(e);
  }
};
