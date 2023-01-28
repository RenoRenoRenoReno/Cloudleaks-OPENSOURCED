# Cloudleaks-OPENSOURCED
Cloudleaks is a Roblox leaking file bot
Founded And Programmed by Reno#0943
I have open sourced the bot by decision.

# Tutorial/HowToUse
First of all we need to create a application for the bot
First go to the Discord Developer Portal: [Portal](https://discord.com/developers/applications)
Second Click "New Application" to create a new application:

![image](https://user-images.githubusercontent.com/101154856/215276923-5b9842da-e3ba-489d-9e0b-609cd3583708.png)

Now we need to name the application/bot

![image](https://user-images.githubusercontent.com/101154856/215276947-6582aa6d-495f-4d09-a581-0bdc072ecabb.png)

After your done naming the bot
We need to actually make the bot.
First of all go to this section when you created your application:

![image](https://user-images.githubusercontent.com/101154856/215276983-6218190e-10a3-4c4e-8e16-5ac2e3c81104.png)

After you've done that
you should see this:

![image](https://user-images.githubusercontent.com/101154856/215276994-709211da-48dc-4f4f-bad7-c1e367097ebc.png)

Click on add bot if you havent done that already:

![image](https://user-images.githubusercontent.com/101154856/215277051-c3425241-59ec-43c3-a67b-4e394b75b01a.png)

After you've done that you should see something like this:

![image](https://user-images.githubusercontent.com/101154856/215277077-3c2766da-b23b-4480-a591-da5dcfd4dce9.png)

Now to get the Bot Token
Click on Reset Token on the Bot Section:

![image](https://user-images.githubusercontent.com/101154856/215277104-a2e89bc9-6bb4-4710-a443-fd16857bb8aa.png)


After that,
you'll be able to get access to your token (After you clicked "Yes, Do it"

![image](https://user-images.githubusercontent.com/101154856/215277189-c3f00e0c-a924-4b46-93a7-2deda7dbf292.png)

You won't be able to use the token I just sent as I have re-generated the Bot Token.

# How to add the bot to my server
If you don't know how to add the bot to your server
Heres how you do it:

First click on OAuth2 in your application:

![image](https://user-images.githubusercontent.com/101154856/215277261-30673954-4711-4b8f-87e4-ce28882cd524.png)

After that you should see this:

![image](https://user-images.githubusercontent.com/101154856/215277267-31a9a561-0f82-4fbc-96d0-091a22061a53.png)

You want to click on URL Generator to get the bot Invite.
After you've done that Click on "Bot"
On the scopes page.

![image](https://user-images.githubusercontent.com/101154856/215277287-38d26020-7e37-4d06-a7f1-6e04840f2e94.png)

After that you should see: "Bot Permissions"

![image](https://user-images.githubusercontent.com/101154856/215277314-732f3504-b7f6-409b-a2a8-eec7a9f1ac7e.png)

Click on the permissions you want the bot to have.
After that you should see a generated URL on the bottom of the webpage, that is your Bot Invite.
Copy and paste it into a new Tab
You'll see something like this once done:

![image](https://user-images.githubusercontent.com/101154856/215277358-b5efdc64-ba6e-4c10-8625-ba55d7e12999.png)

# Intents
Intents is a bots permissions on what it can do
like its limitations and stuff
You'll want to enable all 3 of these for the bot to work:

![image](https://user-images.githubusercontent.com/101154856/215277517-c8631c55-4ff3-4a28-8e38-8dc8518120fe.png)

This is in your Application Under Bot.

# How to make the bot online
You will need the token for this
Go to index.js (Main Source Code)

And then go to the variable:
```js
const Token = "Your Token Here"
```
and Change "Your Token Here" to the token you generated.

# How to make the Bot Online
Once you've done everything in the tutorial
You'll be able to get the bot online.

If you did not enable the intents or token the bot will not go online
but you will expect a Error to popup.

Ok you're still wondering how to make it online
You'll need to type:
```
node .
```
To make the bot online,
make sure you have node.js installed for this work
if you don't install it now.
https://nodejs.org/en/

You should see this once the bot goes online:

![image](https://user-images.githubusercontent.com/101154856/215277904-2e211ae2-1860-47e0-bdaf-4a48cdf0d01b.png)

# How do I add leaks to the bot?
To add leaks you'll need to make a new Directory/Folder called:
```
leaks
```
You can put leaks here.

![image](https://user-images.githubusercontent.com/101154856/215277935-0fd3e483-9dca-41b8-aff9-e8fd841ba707.png)

Just make sure its in the same parent as index.js.

