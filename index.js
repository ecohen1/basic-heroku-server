var express = require('express'),
	app = express(),
	port = process.ENV.port || 3000,
	bp = require('body-parser');

app.use(bp.urlencoded({extended : true}));

app

	.get('/',function(req,res) {
		res.json({msg:'hi'});		
	})

	.post('/test',function(req,res){
		res.json({msg:req.body.test});
	})

	.listen(port);