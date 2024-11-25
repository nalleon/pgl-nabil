const { rejects } = require("assert");
const fs = require(`fs`);


function write(fileName, content) {
    return new Promise((resolve, reject) => {
        try {
            fs.writeFileSync(fileName, content);
            resolve("File saved successfully");
        } catch (error) {
            console.error(error);
        }
    });
}


module.exports = {write};