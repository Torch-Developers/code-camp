/* Using Fetch to make GET call */

const { default: axios } = require("axios");
const fs = require("fs");

const writeUsers = async () => {
    try {

        await axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response.data);
                fs.writeFile("users-axios.json", JSON.stringify(response.data, null, 2), err => {
                    if (err) throw err;
                });
            })
    } catch (err) { (console.error(err)) };
}

writeUsers();