﻿var express = require('express')
  , routes = require('./routes')
  , proxy = require('./routes/proxy')
  , services = require('./routes/service')
  , http = require('http')
  , path = require('path')
  , url = require('url');

jQuery = require('jquery');
$ = require('cheerio');

$.ajax = jQuery.ajax;
$.post = jQuery.post;
$.get = jQuery.get;

$.grep = jQuery.grep;
$.each = jQuery.each;
$.noop = jQuery.noop;

// $.map = jQuery.map;

$.map = function(array, callback) {
  var list = [];
  for(var i = 0;i<array.length;i++) {
    list_cb = callback(array[i]);
    if(list_cb != null){
      list = list.concat(list_cb);
    }
  }
  return list;
}

BG = require('./lib/background.js');
var scan_url_server = require('./lib/scanLinks.js');
dao = require("./lib/dao.js");

var app = express();

var MemoryStore = express.session.MemoryStore;

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.cookieParser()); 
  app.use(express.session({
		secret: 'mon',
		store:new MemoryStore({ reapInterval: 60000 * 10 }) 
	}));
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

RELIABLE_CHECKPOINT = "http://www.baidu.com/";
// DEFAULT_CHECK_INTERVAL = 108E5;
DEFAULT_CHECK_INTERVAL = 18E5;
RESCHEDULE_DELAY = 9E5;
MINIMUM_CHECK_SPACING = 100;
BROWSER_ICON = "img/browser_icon.png";
EPSILON = 500;
WATCHDOG_INTERVAL = 9E5;
WATCHDOG_TOLERANCE = 12E4;
MAX_CONNECT_COUNT = 20;
PAGE_PER_COUNT = 10;

var sqlite3 = require('sqlite3');
db = new sqlite3.Database('databases/monitor.db');

app.get('/', routes.index);

try {
  app.get('/services/:method',function(req,res){
      services[req.params.method](req, res);
  });
} catch (e) {
  send(500,"500了");
}

app.all('/proxy/http*',proxy.proxy)
app.all('*',function(req, res, next){
  if(req.headers.referer){
    var ref = url.parse(req.headers.referer);
    if(ref.host==req.headers.host && ref.pathname.indexOf('/proxy/http') == 0){
  		return proxy.handleUnknown(req, res)
  	}
  }
  next();
});

dao.cleanPeddingStatus(function(){
   BG.watchdog();
   scan_url_server.startScan();
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
