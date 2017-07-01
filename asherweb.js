var express = require('express')
   ,app = express()
   ,http = require('http')
   ,fs = require('fs')
   ,handlebars = require('express3-handlebars')
   ,vidStreamer = require('vid-streamer')
   ,db = require('./lib/db')
   ,routes = require('./routes')
   ,iframes = require('./routes/iframe')
   ,worship = require('./routes/worship')
   ,bible = require('./routes/bible')
   ,bodyParser = require('body-parser')
  
   ,path = require('path')
   ,Logger = require('./lib/logger')
   ,viewsPath = path.join(__dirname, 'views');

var logger = new Logger();

app.engine('handlebars', handlebars({
	 //defaultLayout : 'main'
	layoutsDir : viewsPath + '/layouts'
}));

app.set('view engine', 'handlebars');
app.set('views', viewsPath);
app.set('port', process.env.PORT || 8000);


app.disable('x-powered-by');
app.disable('etag');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', routes.index);
app.get('/videos', vidStreamer);
app.get('/asher288', iframes.asher288);
app.get('/schedule', iframes.schedule);
app.get('/missionary', iframes.missionary);
app.get('/ceremony', iframes.ceremony);
app.get('/worship/addform', iframes.worshipform);
app.get('/upload/addform', iframes.uploadform);
app.get('/bibleportal', iframes.bibleportal);

app.post('/worship/sunlist', worship.sunlist);
app.post('/worship/detail', function(req, res) {
	var j = {
		//body : '<div style="height:700px"><span style="font-size:20px">Asher Church</span></div>'
		name : '{bible}'
	}

	res.send('<p>{bible}</p>');
});

app.get('/bible/list', bible.getBibleList);

app.get('/test', function(req, res) {
	db.get().collection('users').findOne({}, function(err, doc) {
		if(err) throw err;
		res.send(doc);
	});
});

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).render('error');
});

app.use(function(req, res) {
	res.status(404).render('not-found');
});


db.connect('mongodb://hoonkn.iptime.org:27017/asher', function(err) {
	if(err) {
		console.log('Unable to connect to Mongo.');
		process.exit(1);
	}
	else {
		app.listen(app.get('port'), function() {
			console.log('Listening on port ' + app.get('port') + '/' + app.get('env'));
		});
	}

});

/*app.listen(app.get('port'), function() {
		console.log('서버 시작');
});
*/
