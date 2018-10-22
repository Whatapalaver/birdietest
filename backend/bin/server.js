const app = require('../index');

const port = 8082;

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));