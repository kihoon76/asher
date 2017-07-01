var Logger = require('../lib/logger');
var EventEmitter = require('events').EventEmitter;
var db = require('../lib/db');
var logger = new Logger();

function _getSunWorshipList(evt, param, count) {
	var resultJson = {
		 datas : []
		,total : count
	};

	db.get().collection('worship').find()
	  .sort({date:-1})
	  .skip(parseInt(param.start))
	  .limit(parseInt(param.limit))
	  .toArray(function(err, docs) {
			if(err) {
				logger.debug(err);
				evt.emit('end', { 'success' : false, 'err' : err});
			}
			else {
				new Promise(function(resolve, reject) {
					docs.forEach(function(doc, index) {
						resultJson.datas.push(doc);
						logger.debug(JSON.stringify(resultJson));
						resolve();
					});
				})
				.then(function() {
					logger.debug('docs foreach end..........');
					evt.emit('end', resultJson);
				})
				.catch(function(err) {
					evt.emit('end', { 'success' : false, 'err' : err});
				});
			}	
		});
}

var dao = module.exports = {
	getSunWorshipList : function(param) {
		var evt = new EventEmitter();

		db.get().collection('worship').count({}, function(err, count) {
			logger.debug('Total ==========> ' + count);
			_getSunWorshipList(evt, param, count);
		});
		
		logger.debug('param.start =======================> ' + param.start);
		logger.debug('param.limit =======================> ' + param.limit);
		return evt;
	}
};



