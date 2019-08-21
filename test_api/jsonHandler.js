const fs = require("fs");

/**
 * Return promise that reads a File
 * @param {string} pathName 
 * @return {Promise}
 */
function readFile(pathName, query) {
    return new Promise((resolve, reject) => {
        fs.readFile(pathName, 'utf-8', (err, data) => {
            if(err) {
                return reject(err);
            }
            if( query.constructor === Object && Object.keys(query).length !== 0) {//if object is empty
                dt = JSON.parse(data);
                
                dt.data = dt.data.filter( d => {
                    let match = false;
                    for(let param in query) {
                        match = match || (d[param] == query[param]);
                    }
                    return match
                });
                data = JSON.stringify(dt);
            }
            return resolve(data);
        });
    });
}
/**
 * Return promise that write a file
 * @param {*} pathName 
 * @param {*} body 
 */
function writeFile(pathName, body) {
    return new Promise((resolve, reject) => {
        readFile(pathName)
            .then(data => {
                ls = JSON.parse(data);
                ls.data.push(body);
                fs.writeFile(pathName, JSON.stringify(ls), (err, data) => {
                    if(err) {
                        return reject(err);
                    }
                    return resolve(body);
                });
            })
            .catch(err => {
                return reject(err);
            });
    });
}

module.exports = {
    writeFile,
    readFile
};