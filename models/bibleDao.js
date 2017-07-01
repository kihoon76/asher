var Logger = require('../lib/logger');
var EventEmitter = require('events').EventEmitter;
var db = require('../lib/db');
var logger = new Logger();

var dao = module.exports = {
	getBibleList : function() {
		var evt = new EventEmitter();
		var resultJson = {
			datas : []
		};

		db.get().collection('bibleConfig').find({}, {fields : {_id:0/*, name:1, ename:1*/}})
		  .sort({order:1})
		  .toArray(function(err, docs) {
			  if(err) {
				  logger.debug(err);
				  evt.emit('end', { 'success' : false, 'err' : err});
			  }
			  else {
				  new Promise(function(resolve, reject){
					  docs.forEach(function(doc, index) {
						  resultJson.datas.push(doc);
						  resolve();
					  });
				  })
				  .then(function() {
					 evt.emit('end', resultJson); 
				  })
				  .catch(function(err) {
					 evt.emit('end', { 'success' : false, 'err' : err}); 
				  });
			  }
		  });
		
		return evt;
	}
};



