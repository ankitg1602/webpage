var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;



var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
	.all(function (req, res, next) {
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		next();
	})

.get(function (req, res, next) {
	res.end('Will send all the leaderes to you!');
})

.post(function (req, res, next) {
	res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function (req, res, next) {
	res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId')
	.all(function (req, res, next) {
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		next();
	})

.get(function (req, res, next) {
	res.end('Will send details of the leader: ' + req.params.leaderId + ' to you!');
})

.put(function (req, res, next) {
	res.write('Updating the leader: ' + req.params.leaderId + '\n');
	res.end('Will update the leader: ' + req.body.name +
		' with details: ' + req.body.description);
})

.delete(function (req, res, next) {
	res.end('Deleting leadership: ' + req.params.leaderId);
});

module.exports = leaderRouter
