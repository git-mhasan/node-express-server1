

const verifyUpdate = (req, res, next) => {

    // user schema
    //     "id"
    //     "gender"
    //     "name"
    //     "contact"
    //     "address"
    //     "photoUrl"

    // for bulk update an array of user is expected
    const users = req.body;

    if (users?.length !== 0) {
        users.map()
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