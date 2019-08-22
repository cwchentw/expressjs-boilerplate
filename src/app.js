const express = require('express');

let app = express();
const port = 8080;

// @flow
app.get('/', function (req: express$Request, res: express$Response) {
    res.send('Hello World');
});

// @flow
app.listen(port, function () {
    console.log(`Run webserver on port ${port}`);
});
