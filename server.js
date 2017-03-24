var express = require('express')
var app = express()
var port = process.env.PORT || 8080

app.get('/', function(req, res) {
  //console.log(req)
  //console.log('divide', req.headers['user-agent'])
  
  var lang = req.headers['accept-language'].slice(0, req.headers['accept-language'].indexOf(','))
  var software = req.headers['user-agent'].slice(13, req.headers['user-agent'].indexOf(')'))
  
  
  var data = { 
    'ipaddress': req.headers['x-forwarded-for'],
    'language': lang,
    'software': software
  }

  res.send(data)
})

app.listen(port, function(){
  console.log('App listening on port ' + port)
})

