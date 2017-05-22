var twilio = require('twilio');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var ACCOUNT_SID = "Twilio Account SID";
var AUTH_TOKEN = "Twilio Authentication token";
var TWILIO_NUMBER = "Twilio Number";
var USER_NUMBER = "User Number";
var SLACK_WEBHOOK_SECRET = "Slack Outgoing Webhook token";

var SLACK_TOKEN = "Slack token";
var Slack = require('slack-node');
var slack = new Slack(SLACK_TOKEN);

var client = new twilio(ACCOUNT_SID,AUTH_TOKEN);

//Function to Send message from User to Slack
app.post('/twilio', function (req, res) {
	  
	console.log(req.body.From);
	if(req.body.From == USER_NUMBER){
		// Request Context will have all the necessary message Info
		var message = req.body.Body;
		console.log(message)

		//Slack api call to send the message to Slack
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

//Function to Send message from Slack to User
app.post('/slack', function (req, res) {
	
	if(req.body.token == SLACK_WEBHOOK_SECRET){
		//Request Context will have all the necessary message info
		var channelName = req.body.channel_name;
		var message = req.body.text;
		var username = req.body.user_name;

		//Twilio api call to send the message to User
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


