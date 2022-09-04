

const validateId = (req, res, next) => {
    // const requestedUser = req.body;
    const { id } = req.params;
    const parsed = Number(id);
    if (isNaN(parsed)) {
        req.error = "No such user exist.";
        // req.error = id;
        next();
    } else {
        next();
    }

}


module.exports = validateId