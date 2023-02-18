console.log ("get start resume progect");
import './pages/start.js'
import './fonts/index.js'
import './img/index.js'
import '../_old/photo.jpg'

const getLogger = require('webpack-log');
const log = getLogger({ name: 'webpack-batman' });

log.info('Jingle Bells, Batman Smells');
log.warn('Robin laid an egg');
log.error('The Batmobile lost a wheel');
log.debug('And the Joker got away');