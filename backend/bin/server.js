const app = require('../index');

const port = process.env.PORT || 8082;

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));