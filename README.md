# Twilio-Slack-Pipeline
A communication pipe between slack and SMS/text messagingusing slack and twilio APIs.

Tools:
	1. Node.js(Latest Version)
	2. Slack,Twilio and Express dependencies for Node
	3. Free Slack account with a team on which you have API access.
	4. Free twilio account i.e. a phone number with SMS capabilities

To configure your Node environment:

Step 1	First create a directory named “Speetra”, change to it and run npm init.  

Step 2	Install all the dependencies i.e. express, twilio and node-slack, as per the installation guide.

Step 3	In the “Speetra” directory, create a file named index.js

To configure your Slack account:

Step 1 	To get started, we need to obtain an access token for the Slack team. Go to Slack Web API and create a Slack team and Generate a test token for your Slack team and use it in the code.

Step 2	Go to the Slack Outgoing Webhooks page then click the “outgoing webhook integration”. This step allow you send a message from Slack.

Step 2	Scroll down to the Integration Settings section. Select “#general” as the channel to listen on. Enter “@twiliobot” within the “Trigger Word(s)” value. Copy your ngrok Forwarding URL(Explain below) plus “/slack” into the URL(s) text box.

Step 3	Copy the generated token and use it as “Slack_Webhook_Secret”.

Setting up your Twilio number:

Step 1	Sign up for Twilio and configure a phone number you want to use for the bot.

Step 2	Copy and paste the https version of the grok Forwarding URL(Explain below) plus “/twilio” into our phone number configuration under “A messages comes in”.

Step 3	Copy and paste the Account SID and Auth Token from your account configuration.

Setting up your ngrok account:

Step 1	To expose my local web server via an externally-accessible domain I used ngrok.

Step 2	Download ngrok and run it with this command:./ngrok http ‘port number’.

Step 3	Used the https URL in Slack and Twilio.






