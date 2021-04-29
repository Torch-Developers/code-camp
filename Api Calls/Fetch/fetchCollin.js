/* Using Fetch to make GET call to api and write the JSON data to a file */
const fetch = require('node-fetch');
const fs = require("fs");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    .then(users => {
        console.log(users);
        fs.writeFile("users.json", JSON.stringify(users, null, 2), err => {
            if (err) throw err;
        });
    })