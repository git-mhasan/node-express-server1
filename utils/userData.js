const fs = require('fs');

// const rawdata = fs.readFileSync('user.json');
// const users = JSON.parse(rawdata);

module.exports.getUser = () => {
    const rawdata = fs.readFileSync('user.json');
    const users = JSON.parse(rawdata);

    return users;
}