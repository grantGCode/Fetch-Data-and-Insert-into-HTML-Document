const post =  fetch('https://jsonplaceholder.typicode.com/todos/1') 
.then((textData) => textData.json())
.then((postData) => {
    const creatPElement = document.createElement('p');
    //creatPElement.appendChild(document.createTextNode(postData));
    creatPElement.insertAdjacetText(postData) 
        function insertElement() {
            const element = document.querySelector('div:first-child');
            element.insertAdjacentElement('afterend', creatPElement);
        };
    insertElement();

});
    //.forEach

