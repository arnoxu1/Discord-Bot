# QuickReels

A simple discord bot that converts Instagram Reels links into playable videos on Discord.

## Prerequisites

Node JS >= 16.11  
Git

## Setup

Download the source code  
Install [nodejs](https://nodejs.org/en)  
  
You will need to have created a discord bot  
- Create a discord bot here -> https://discord.com/developers/applications  
- Click on "New Application" and create an application
- Go to "Bot" section
- Click on "Add Bot"
- Turn off "Public Bot" (You can turn this back on later if you want)
- Turn on all 3 option under "Privileged Gateway Intents"
- Go to "OAuth2" section
- Select "bot" and "application.commands
- Select "administrator"
- You will be given a link, paste the link somewhere and click on it to invite the bot to your server

Install the following packages:

```bash
npm init -y
```

```bash
npm install discord.js
```

```bash
npm install -g nodemon
```
> add "sudo" before "npm" if you are on Mac  

Rename `.envex` to `.env`  
In the `.env` file, replace the `TOKEN` value with the toek of your bot
- In the [Discord Developer Portal](https://discord.com/developers/applications), go to "Bot" to find your token

Run `nodemon` to start the bot