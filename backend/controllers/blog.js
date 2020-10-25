exports.timer = (req, res) => {

    res.json({ time: Date().toString() })
}