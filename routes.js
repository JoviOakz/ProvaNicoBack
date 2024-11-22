const bodyParser = require('body-parser');
const person = require('./src/routes/person');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        person,
    )
}