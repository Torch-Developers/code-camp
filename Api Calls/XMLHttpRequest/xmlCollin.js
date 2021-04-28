let xmlHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new xmlHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send();
request.onload = () => {
    //console.log(request);
    if (request.status === 200) {
        console.log(JSON.parse(request.responseText));
    } else {
        console.log(`error ${request.status} ${request.statusText}`);
    }
}