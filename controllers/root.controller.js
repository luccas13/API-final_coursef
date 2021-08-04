function helloFront (req, res) {
    res.json({message: 'Hello Frontend!!'});
}

module.exports = { helloFront };