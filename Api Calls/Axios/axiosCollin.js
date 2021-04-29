/* Using Fetch to make GET call */

const { default: axios } = require("axios");

axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log(response.data);
    })