const app = require('../app');

const port = 8081;

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));