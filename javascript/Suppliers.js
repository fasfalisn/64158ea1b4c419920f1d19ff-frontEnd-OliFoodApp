document.getElementById('i172z').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Homepage' ;}};document.getElementById('ikd4x').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Orders' ;}};document.getElementById('i5t9j').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/MyProducts' ;}};document.getElementById('i9kwo').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Settings' ;}};document.getElementById('ircth').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Login' ;}};document.getElementById('irpxlj').onclick = (event) => {
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
     location.href= '/Products/' + transitionId;}};document.getElementById('ixn22h').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Products' ;}};document.getElementById('iw1pbl').onclick = (event) => {
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
     location.href= '/Products/' + transitionId;}};document.getElementById('i7x5ci').onclick = (event) => {
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
            .contains(document.getElementById("i7x5ci")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/Products/' + transitionId;}};window.onload = () => {};