var twilio = require('twilio');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var ACCOUNT_SID = "AC274c600e620c77279b970cd1394248b9";
var AUTH_TOKEN = "ded2baf31a81dd4d80ef97e07051b54f";
var TWILIO_NUMBER = "+14697897673";
var USER_NUMBER = "+14694380988";
var SLACK_WEBHOOK_SECRET = "SRNp7SeFCEA0ZFglUTA6HJKx";

var SLACK_TOKEN = "xoxp-185395272242-185322117107-186086144980-85df07f428921e37b653f38265c148ac";
var Slack = require('slack-node');
var slack = new Slack(SLACK_TOKEN);

var client = new twilio(ACCOUNT_SID,AUTH_TOKEN);


app.post('/twilio', function (req, res) {
	  
	console.log(req.body.From);
	if(req.body.From == USER_NUMBER){
		
		var message = req.body.Body;
		console.log(message)

		slack.api('chat.postMessage', {
			  text: message,
			  channel:'#general',
			  username: 'TwilioBot',
			  icon_emoji: ':robot_face:'
			}, function(err, response){
			  console.log(response);
		});
		
	}
})

app.post('/slack', function (req, res) {
	
	if(req.body.token == SLACK_WEBHOOK_SECRET){

		var channelName = req.body.channel_name;
		var message = req.body.text;
		var username = req.body.user_name;
		client.messages.create({
		    body: username+':'+message.substring(10),
		    to: USER_NUMBER,  // Text this number
		    from: TWILIO_NUMBER // From a valid Twilio number
		}, function(err, response){
			console.log(response);
		})
		.then((message) => console.log(message.sid));

	}  
	
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


