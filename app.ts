'use strict';

const config = require('./config')();

let isProd: boolean = config.isProd;
const app = require('./config/application')(isProd);

const data = require('./data')({ config });

const controllers = require('./controllers')({ data });

require('./routes')({ app, data, controllers, isProd });

app.listen(config.port, () => console.log(`May the force be with you on: ${config.port}`));
