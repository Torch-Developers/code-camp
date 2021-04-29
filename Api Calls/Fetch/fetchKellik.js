const fetch = require('node-fetch');
const fs = require('fs');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        return response.json();
    })
    .then(users =>{
        console.log(users);
        fs.writeFile("imported-users.xml",JSON.stringify(users,null,2),err => {
            if (err) throw err;
        });
    });

