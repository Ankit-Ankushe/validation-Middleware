const validate = (req, res, next) => {
    if (req.method == 'POST') {
        const data = req.body
        if (typeof (data.id) != 'number' || typeof (data.rating) != 'number' || typeof (data.name) != 'string' || typeof (data.name) != 'string' || typeof (data.description) != 'string' || typeof (data.cast) != 'string' || typeof (data.genre) != 'string') {
            res.status(400).send('request not correct')
        }
    }
    next()
}

module.exports = validate;