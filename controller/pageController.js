const path = require('path')

const test = async (req, res) => {
    res.sendFile(path.join(__dirname,'..','staticPage','mainPage.html'))

}

module.exports = {
    test
}