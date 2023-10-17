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
    {   location.href= '/Login' ;}};document.getElementById('ii4rs').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/' ;}};
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
    }const convertBase64 = (file) => {
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
document.getElementById('formFile').addEventListener("change", async(e) => {
            
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
              .getElementById('formFile')
              .setAttribute("data-image-base64", base64);
            document
              .getElementById('formFile')
              .setAttribute("name", e.target.files[0].name);
          },
          MIME_TYPE,
          QUALITY
        );
      };});
document.getElementById('iy0oer').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/EditProduct/','');let product = new TempApi.Product();product['productname'] = document.querySelector("[annotationname = 'productname']").value;product['productcategory'] = document.querySelector("[annotationname = 'productcategory']").value;product['productimage'] = {
        data: document.querySelector("[annotationname = 'productimage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'productimage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'productimage']").src,
        name: document.querySelector("[annotationname = 'productimage']").getAttribute("name")
      };product['productunit'] = document.querySelector("[annotationname = 'productunit']").value;product['productdesc'] = document.querySelector("[annotationname = 'productdesc']").value; let opts = {product};apiProductApi.updateproduct( productId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = productname]').value = response.body.query.productname ;document.querySelector('[annotationname = productcategory]').value = response.body.query.productcategory ;
      if(response.body.query.productimage !== undefined){

        if(document.querySelector('[annotationname = productimage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = productimage]').setAttribute('data-image-base64',response.body.query.productimage.data);
        }
        else{
          document.querySelector('[annotationname = productimage]').src = response.body.query.productimage.data;
        }
        document.querySelector('[annotationname = productimage]').name = response.body.query.productimage.name;
      }
      document.querySelector('[annotationname = productunit]').value = response.body.query.productunit ;document.querySelector('[annotationname = productdesc]').value = response.body.query.productdesc ;{   location.href= '/MyProducts' ;}}});};window.onload = () => {let productId = window.location.pathname.replace('/EditProduct/','');apiProductApi.getproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = productname]').value = response.body.query.productname; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = productdesc]').value = response.body.query.productdesc; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = productcategory]').value = response.body.query.productcategory; } catch (e) { console.log(e) };try { 
      if(response.body.query.productimage !== undefined){
        if(document.querySelector('[annotationname = productimage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = productimage]').setAttribute('data-image-base64',response.body.query.productimage.data);
          let fileName = response.body.query.productimage.name;
          let file = new File([response.body.query.productimage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = productimage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = productimage]').src = response.body.query.productimage.data ;
        }
        document.querySelector('[annotationname = productimage]').name = response.body.query.productimage.name ;
      }
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = productunit]').value = response.body.query.productunit; } catch (e) { console.log(e) };}});};