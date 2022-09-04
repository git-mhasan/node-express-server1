

const verifyUpdate = (req, res, next) => {

    // user schema
    //     "id"
    //     "gender"
    //     "name"
    //     "contact"
    //     "address"
    //     "photoUrl"
    const user = req.body;

    if (Object.keys(user).length !== 0) {
        if (
            // user.hasOwnProperty('id') &
            user.hasOwnProperty('gender') ||
            user.hasOwnProperty('name') ||
            user.hasOwnProperty('contact') ||
            user.hasOwnProperty('address') ||
            user.hasOwnProperty('photoUrl')
        ) {
            // res.json(user);
            next();
        }
        else {
            req.error = "unexpected update property";
            next();
        }
    }
}
module.exports = verifyUpdate