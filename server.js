//  OpenShift sample Node application
var express = require('express'),
    app = express();
    
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var file = process.env.MY_FILE || 'index';

app.engine('html', require('ejs').renderFile);
app.get('/', function (req, res) {
  res.render(file+'.html');
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;