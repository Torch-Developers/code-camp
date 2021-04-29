/* Using Fetch to make GET call */

const axios = require('axios');
const fs = require('fs');

axios.get("https://jsonplaceholder.typicode.com/users", {responseType:'Stream'})
    .then(response => {
        console.log(response.data);
        fs.writeFile('imported-users.json',response.data,err => {
            if(err) throw err;
        });
    });
 