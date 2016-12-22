'use strict';

const config = require('./config')();
const data = require('./data')({ config });
const hashGenerator = require('./utils/hashGenerator.js');
const validator = require('./utils/validator.js');

const app = require('./config/application')(data);


const controllers = require('./controllers')( { data, hashGenerator, validator } );

require('./routes')({ app, data, controllers });

app.listen(config.port, () => console.log(`May the force be with you on: ${config.port}`));
