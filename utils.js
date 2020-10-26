const fs = require('fs');

function writeDataToFile(filename, content) {
    try {
        fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
            if (err) {
                console.log(err);
            }
        })
    } catch (error) {
        console.log("ERROR in writing to File: " + error);
    }
}


function getPostdata(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = '';

            req.on('data', (chunk) => {
                body += chunk.toString();
            })

            req.on('end', () => {
                resolve(body)
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    writeDataToFile, getPostdata
}