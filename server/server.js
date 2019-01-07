// var express = require('express'),
var restify = require("restify"),
    nodemailer = require("nodemailer"),
    bodyParser = require("body-parser"),
    corsMiddleware = require("restify-cors-middleware");
    
    require('dotenv').config();
//Middleware Cors
var cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*'],
    allowHeaders: ['API-Token'],
    exposeHeaders: ['Api-Token-Expiry']
});


// Server
var server = restify.createServer();
// handle cross-origin problem
server.pre(cors.preflight);
server.use(cors.actual);
// query and bodyparse to use data sent by url
server.use(restify.plugins.queryParser({
    mapParams: true
}));
server.use(restify.plugins.bodyParser({
    mapParams: true
}));
server.use(restify.plugins.fullResponse());

// setup email config
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "tuc0476@gmail.com",
        pass: "Conjugate1"
    }
});

server.get("/error", function(req, res){
    res.json("Mail Not sent");
})

server.get("/success", function(req, res){
    res.json("Mail sent! We'll get back to you shortly ");
})

server.post("/api/email", function create(req, res, next){
    // console.log(req.params)
    console.log(req.body)
    var mail = {
        from: req.body.fields.Email,
        to: 'tuc0476@gmail.com',
        subject: 'New Mail',
        html: "name: <br />"+ req.body.fields.Name + "<br /> Message: <br />"+ req.body.fields.Message + "<br />email <br />"+ req.body.fields.Email,
    }
    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            console.log("Email sending error!");
            console.log(error);
            res.redirect("/error", next)
        }else{
            console.log("Success")
            res.redirect("/success", next)
        }
        smtpTransport.close();
    });

    res.send(201, req.params)
})

server.listen(process.env.PORT, process.env.IP, function(){
    console.log(`app is working on ${process.env.PORT}`)
})