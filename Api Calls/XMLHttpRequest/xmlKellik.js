let XmlHttpRequest = require("xmlhttprequest").XmlHttpRequest;
let request = new XmlHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/todos/1"); //retrieve data from server
request.send();
request.onload = () => {
    console.log(request);  
    if(request.status === 200){ // success response
        console.log(JSON.parse(request.responseText));
    }else{
        console.log(`error ${request.status}, ${request.statusText}`);





    }
}