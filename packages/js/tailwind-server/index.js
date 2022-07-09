const api = require('./api');
const PORT = process.env.PORT || 3000;

api.listen(3000, console.log(`Process Started on ${PORT}`));
