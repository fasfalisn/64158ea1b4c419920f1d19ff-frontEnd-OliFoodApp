document.getElementById('i02ok').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Profile' ;}};document.getElementById('ikd4x').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Orders' ;}};document.getElementById('i5t9j').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/MyProducts' ;}};document.getElementById('i0l69').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Suppliers' ;}};document.getElementById('i9kwo').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Settings' ;}};document.getElementById('ircth').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Login' ;}};document.getElementById('ip22g').onclick = (event) => {
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
     location.href= '/EditOrder/' + transitionId;}};document.getElementById('irpxlj').onclick = (event) => {
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
     location.href= '/Products/' + transitionId;}};document.getElementById('iw1pbl').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Products' ;}};window.onload = () => {};