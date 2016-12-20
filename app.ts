'use strict';

const config = require('./config');

const app = require('./config/application')();

const data = require('./data')({ config });

const controllers = require('./controllers')({ data });

require('./routes')({ app, data, controllers });

app.listen(config.port, () => console.log(`May the force be with you on :${config.port}`));
