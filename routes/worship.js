/**
 * It will always be the same db object
 * because require caches the result the first time it is called. 
 * Therefore it will return the same object, 
 * which will have the same get method, 
 * which in return will have access to the same state.db variable
 */

var Logger = require('../lib/logger');
var worshipDao = require('../models/worshipDao');
var logger = new Logger();

exports.sunlist = function(req, res) {

    req.accepts('application/json');
    res.contentType('json');

    logger.debug(req.body);
    var cb = worshipDao.getSunWorshipList(req.body);

    cb.on('end', function(result){
        logger.debug('called event emit end');
		res.json(result);
	});
}