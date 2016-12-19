'use strict';

const app = require('./config/application')();

const data = require('./data')();

const controllers = require('./controllers')({ data });

require('./routes')({ app, data, controllers });

app.listen(3000, () => console.log('May the force be with you on :3000'));
