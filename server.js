var liveReload = require('livereload');
var express = require('express');
var app = express();
var fs = require('fs');

const ary = [
    'md',
    'text'
];

const liveReloadServer = liveReload.createServer({
	port: 8081,
  debug: true,
        exts: ary
}).watch(__dirname);

app.use(express.static(__dirname));

app.get('/', function(request,response){
        fs.readFile('./index.html', function (err, html){
            if (err) {
                throw err; 
            }       
            response.writeHeader(200, {"Content-Type": "text/html"});  
            response.write(html);  
            response.end();  
    });
    
});


/*
app.all('*', function (request, response){
    response.send(404, '<h1>ERROR - PAGE NOT FOUND</h1>');
})
*/

app.listen(process.env.PORT || 3000, process.env.IP || '0,0,0,0', function () {
  console.log('Example app listening on port 3000!');
});