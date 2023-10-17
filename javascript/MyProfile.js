let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';document.getElementById('i02ok').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/MyProfile' ;}};document.getElementById('i172z').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Homepage' ;}};document.getElementById('ikd4x').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Orders' ;}};document.getElementById('i5t9j').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/MyProducts' ;}};document.getElementById('i0l69').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Suppliers' ;}};document.getElementById('i9kwo').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Settings' ;}};document.getElementById('ircth').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Login' ;}};document.getElementById('i6zhnz').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/' ;}};document.getElementById('i9gy8').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Settings' ;}};window.onload = () => {let userId = window.location.pathname.replace('/MyProfile/','');apiUserApi.getuser( userId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = username]').textContent = response.body.query.username; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = useremail]').textContent = response.body.query.useremail; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = usercategory]').textContent = response.body.query.usercategory; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = userstatus]').textContent = response.body.query.userstatus; } catch (e) { console.log(e) };try { 
      if(response.body.query.userimage !== undefined){
        if(document.querySelector('[annotationname = userimage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = userimage]').setAttribute('data-image-base64',response.body.query.userimage.data);
          let fileName = response.body.query.userimage.name;
          let file = new File([response.body.query.userimage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = userimage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = userimage]').src = response.body.query.userimage.data ;
        }
        document.querySelector('[annotationname = userimage]').name = response.body.query.userimage.name ;
      }
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = usertown]').textContent = response.body.query.usertown; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = useraddress]').textContent = response.body.query.useraddress; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = usertax]').textContent = response.body.query.usertax; } catch (e) { console.log(e) };
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