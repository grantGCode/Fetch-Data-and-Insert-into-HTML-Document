const post =  fetch('https://jsonplaceholder.typicode.com/todos/1') 
.then((textData) => textData.json())
.then((postData) => { const data = {...postData};
const mainDiv = document.getElementById("parentDiv");

    const creatPElement1 = document.createElement('p');
    const elementData1 = document.createTextNode(`userId: ${data.userId}`);
    creatPElement1.appendChild(elementData1); 
    mainDiv.appendChild(creatPElement1);
    
    const creatPElement2 = document.createElement('p');
    const elementData2 = document.createTextNode(`id: ${data.id}`);
    creatPElement2.appendChild(elementData2); 
    mainDiv.appendChild(creatPElement2);
    
    const creatPElement3 = document.createElement('p');
    const elementData3 = document.createTextNode(`title: ${data.title}`);
    creatPElement3.appendChild(elementData3); 
    mainDiv.appendChild(creatPElement3);

    const creatPElement4 = document.createElement('p');
    const elementData4 = document.createTextNode(`completed: ${data.completed}`);
    creatPElement4.appendChild(elementData4); 
    mainDiv.appendChild(creatPElement4);

});