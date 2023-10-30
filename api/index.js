const mongoose = require('mongoose')
const express = require('express')
const { validate,ValidationError } = require('express-validation')
const cors = require('cors')
const app = express()
const { getPort, getMongoDbUrl } = require('../generator')
const apiRoutes = require('../src/routes/enquiry.routes')
mongoose.connect(getMongoDbUrl()).then((result) => console.log("Database Connected Successfully. "+getMongoDbUrl() )).catch((e)=>console.log('e', e))

app.use(express.json())
app.use(cors())



app.get('/api',(req,res)=>{
    res.send(`
    <html>
<head>
	<title>Learning Javascript</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <style>
    * {
	margin: 0;
	padding: 0;
}

body {
	background-color: #EEE;
}

.fly-in-text {
	list-style: none;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translateX(-50%) translateY(-50%);
}

.fly-in-text li {
	display: inline-block;
	margin-right:50px;
	font-family: Open Sans, Arial;
	font-weight: 300;
	font-size: 4em;
	opacity: 1;
	transition: all 2.5s ease;
}

@media screen and (max-width: 1275px) {
    .fly-in-text li {
		margin-right:30px;
		font-weight: 300;
		font-size: 3em;
	}
}

@media screen and (max-width: 900px) {
    .fly-in-text li {	
    	display: block;
		margin-right:20px;
		font-weight: 300;
		font-size: 3em;
	}
}

@media screen and (max-width: 768px) {
    .fly-in-text li {	
    	display: block;
		margin-right:20px;
		font-weight: 300;
		font-size: 3em;
		text-align: center;
        margin: 0 auto;
}
	}
}

.fly-in-text li:last-child {
	margin-right: 0;
}

.fly-in-text.hidden li {
	opacity: 0;
} 

.fly-in-text.hidden li:nth-child(1) {
	transform: translateX(-200px) translateY(-200px);
}
.fly-in-text.hidden li:nth-child(2) {
	transform: translateX(20px) translateY(100px);
}
.fly-in-text.hidden li:nth-child(3) {
	transform: translateX(-150px) translateY(-80px);
}
.fly-in-text.hidden li:nth-child(4) {
	transform: translateX(10px) translateY(-200px);
}
.fly-in-text.hidden li:nth-child(5) {
	transform: translateX(-300px) translateY(200px);
}
.fly-in-text.hidden li:nth-child(6) {
	transform: translateX(80px) translateY(-20px);
}
.fly-in-text.hidden li:nth-child(4) {
	transform: translateX(30px) translateY(200px);
}
    </style>
</head>
<body>
	<ul class="fly-in-text hidden">
		<li>W</li>
		<li>E</li>
		<li>L</li>
		<li>C</li>
		<li>O</li>
		<li>M</li>
		<li>E</li>
	</ul>
</body>
<script>
$(function() {
	setTimeout(function() {
		$('.fly-in-text').removeClass('hidden');
	},500);
})();
</script>
</html>
    `)
})

app.use('/api/enquiry', apiRoutes)

app.use(function (error, request, response, next) {
    if (error instanceof ValidationError) {
        return response.status(error.statusCode).json({ status: false, message: error.details.body[0].message })
    }

})
app.listen(3001, () => {
    console.log(`Application Is Running On Port ${getPort()}.`)
})

module.exports = app