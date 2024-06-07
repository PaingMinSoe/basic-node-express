const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'users.json');

const getUsersFromFile = (callback) => {
    fs.readFile(p, (err, data) => {
        if (err) {
            console.error(err);
            callback([]);
        } 
        
        if (data) {
            try {
                callback(JSON.parse(data));
            } catch (err) {
                console.error(err);
                callback([]);
            }
        }
    });
}

module.exports = class User {
    constructor(name) {
        this.name = name;
    }

    save() {
        getUsersFromFile((users) => {
            users.push(this);
            fs.writeFile(p, JSON.stringify(users), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        getUsersFromFile(callback);
    }
}