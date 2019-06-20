var es = require('elasticsearch');
var express = require('express');
var router = express.Router();
// var app = express();
// var bodyParser = require('body-parser');
// var path= require('path');
var esClient = new es.Client({
    hosts: ['http://gauche-armadillo-elasticsearch-coordinating-only.default.svc.cluster.local:9200/']
});
console.log("here");

router.get('/health', function (req, res) {
    esClient.cluster.health({}, function (err, resp, status) {
        if (err) {
            console.log("-- Client Health ERROR--", err);
        } else {
            console.log("-- Client Health --", resp);
            res.send({ resp });
        }
    });
});

router.put('/position', function (req, res) {
    esClient.indices.create({
        index: 'position'
    }, function (err, resp, status) {
        if (err) {
            console.log(err);
        } else {
            console.log(resp);
            res.send({ resp });
        }
    });
});

router.post('/people', function (req, res) {
    esClient.index({
        index: 'people',
        id: '1',
        type: 'profile',
        body: {
            "Name": "Aakash",
        }
    }, function (err, resp, status) {
        if (err) {
            console.log(err);
        } else {
            console.log(resp);
            res.send({ resp });
        }
    });
});

router.post('/addposition', function (req, res) {
    esClient.index({
        index: 'position',
        id: '1',
        type: 'profile',
        body: {
            "Position": "DevOps Intern",
        }
    }, function (err, resp, status) {
        if (err) {
            console.log(err);
        } else {
            console.log(resp);
            res.send({ resp });
        }
    });
});

router.get('/getname', function (req, res) {
    esClient.search({
        index: 'people',
        type: 'profile',
        body: {
            query: {
                match: { "Name": "Aakash" }
            }
        }
    }, function (err, resp, status) {
        console.log(resp);
        res.send({ resp });
    });
});



module.exports = router;