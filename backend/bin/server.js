const app = require('../app');

const port = 3306;

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));