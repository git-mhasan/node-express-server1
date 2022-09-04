const fs = require('fs');

const rawdata = fs.readFileSync('user.json');
const users = JSON.parse(rawdata);

// const getUser = require('../utils/userData');
// const users = getUser();


module.exports.getRandomUser = (req, res, next) => {
  const totalUsers = users?.length;
  const randomNumber = Math.floor(Math.random() * totalUsers);
  const randomUser = users.find(user => user.id === randomNumber);
  res.json(randomUser);
};

module.exports.getAllUser = (req, res) => {
  res.json(users);
};

module.exports.saveOneUser = (req, res) => {
  const totalUsers = users?.length;
  const data = req.body;
  if (req.error) {
    res.send(req.error);
  } else {
    const newUser = {
      "id": Number(users[totalUsers - 1].id) + 1,
      "gender": data.gender,
      "name": data.name,
      "contact": data.contact,
      "address": data.address,
      "photoUrl": data.photoUrl
    }
    users.push(newUser);
    try {
      fs.writeFileSync('user.json', JSON.stringify(users));
      res.json(newUser);
    } catch (error) {
      res.send(error);
    }
  }
};

module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  const updateInfo = req.body;
  if (req.error) {
    res.send(req.error);
  } else {
    const parsedId = Number(id);

    updateInfo?.gender ? users[parsedId].gender = updateInfo?.gender : users[parsedId].gender;
    updateInfo?.name ? users[parsedId].name = updateInfo?.name : users[parsedId].name;
    updateInfo?.contact ? users[parsedId].contact = updateInfo?.contact : users[parsedId].contact;
    updateInfo?.address ? users[parsedId].address = updateInfo?.address : users[parsedId].address;
    updateInfo?.photoUrl ? users[parsedId].photoUrl = updateInfo?.photoUrl : users[parsedId].photoUrl;

    try {
      fs.writeFileSync('user.json', JSON.stringify(users));
      res.json(users[parsedId]);
    } catch (error) {
      res.send(error);
    }
  }
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const updateInfo = req.body;
  if (req.error) {
    res.send(req.error);
  } else {
    const parsedId = Number(id);
    const userExist = users.find(user => user.id === parsedId);
    if (!userExist) {
      res.send("No user exist with provided id.");
    } else {
      const updatedUsers = users.filter(user => user.id !== parsedId);
      try {
        fs.writeFileSync('user.json', JSON.stringify(updatedUsers));
        res.json(updatedUsers);
      } catch (error) {
        res.send(error);
      }
    }
  }
};

module.exports.updateBulkUser = (req, res) => {
  const usersUpdate = req.body;

  const newUserList = users?.map(user => {
    const usr = usersUpdate.find(usr => usr.id === user.id) || {}
    if (Object.keys(usr).length !== 0) {
      usr?.gender ? user.gender = usr?.gender : user.gender;
      usr?.name ? user.name = usr?.name : user.name;
      usr?.contact ? user.contact = usr?.contact : user.contact;
      usr?.address ? user.address = usr?.address : user.address;
      usr?.photoUrl ? user.photoUrl = usr?.photoUrl : user.photoUrl;
    }
    return user;
  })
  try {
    fs.writeFileSync('user.json', JSON.stringify(users));
    res.json(newUserList);
  } catch (error) {
    res.send(error);
  }
};

