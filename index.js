const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, StringSelectMenuBuilder  } = require('discord.js')
const Token = "Your Bot Token"
var fs = require('fs');
const express = require('express')
const app = express()
const port = 3000
const requests = require('request')
const noblox = require('noblox.js');
const { info, table } = require('console');
const { verify } = require('crypto');
const { Z_ASCII } = require('zlib');

app.get('/', (req, res) => res.send('Cloudleaks best!'));

app.listen(port, () => console.log('listening at https://localhost:'+port))

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences
    ]
})

client.on('ready', () => {
    console.log(client.user.username+' is online.')
    const activites = [
        `With ${client.guilds.cache.size} Servers`,
        'The best Roblox leaking bot',
        'Not made with GHOSTBOT.COM'
    ]
    let i = 0
    setInterval(() => client.user.setActivity(`${activites[i++ % activites.length]}`, { TYPE: 'PLAYING' }), 15000)

    const guild = false
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application.commands
    }

    commands?.create({
        name: 'getleak',
        description: 'Get a leak.',
    })
  commands?.create({
    name: 'invite',
    description: 'Get the bot invite'
  })
  commands?.create({
    name: 'game',
    description: 'Play a game inside of discord.'
  })
  commands?.create({
    name: 'verify',
    description: 'Verify your account.',
    options: [
        {
            name: 'userid',
            description: 'What is your roblox accounts user id.',
            required: true,
            type: 10
        }
    ]
  })
  commands?.create({
    name: 'getid',
    description: 'Get the ID of a Roblox Account.',
    options: [
        {
            name: 'username',
            description: 'Whats the username?',
            type: 3,
            required: true
        }
    ]
  })
  commands?.create({
    name: 'addpremium',
    description: 'Add premium to a user',
    options: [
        {
            name: 'user',
            description: 'Who are you trying to add?',
            required: true,
            type: 6
        }
    ]
  })
  commands?.create({
    name: 'generate',
    description: "Generate a premium key."
  })
  commands?.create({
    name: 'redeem',
    description: "Redeem a key.",
    options: [
        {
            name: 'key',
            description: 'Whats the key?',
            required: true,
            type: 3
        }
    ]
  })
})

function getInfo(id) {
    const info = noblox.getPlayerInfo(id)
    return info
}
function setID(id) {
    const USERID = id
    return id
}
const keys = []
const redeemedkeys = []
client.on('interactionCreate', (interaction) => {
    const { commandName, options } = interaction
    if (commandName == 'getleak') {
        const leaksDIR = 'leaks/'
        const files = fs.readdirSync('leaks/')
        const amount = options.getNumber('amount')
        if (amount > 10) {
            return interaction.reply("Your max files cannot be over 10.")
        }
        const Amount = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('LeakFileAmount')
                .setPlaceholder('No Amount Selected')
                .addOptions(
                    {
                        label: '1',
                        description: 'get 1',
                        value: '1',
                    },
                    {
                        label: '2',
                        description: 'Get 2',
                        value: '2',
                    },
                    {
                        label: '3',
                        description: 'get 3',
                        value: '3',
                    },
                    {
                        label: '4',
                        description: 'Get 4',
                        value: '4',
                    },
                    {
                        label: '5',
                        description: 'get 5',
                        value: '5',
                    },
                    {
                        label: '6',
                        description: 'Get 6',
                        value: '6',
                    },
                    {
                        label: '7',
                        description: 'get 7',
                        value: '7',
                    },
                    {
                        label: '8',
                        description: 'Get 8',
                        value: '8',
                    },
                    {
                        label: '9',
                        description: 'get 9',
                        value: '9',
                    },
                    {
                        label: '10',
                        description: 'Get 10',
                        value: '10',
                    },
                ),
        );
        const Selection = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('LeakFileSelection')
                .setPlaceholder('No Leak Type Selected')
                .addOptions(
                    {
                        label: 'Default',
                        description: 'Get a random leak from files.',
                        value: 'default',
                    },
                    {
                        label: 'Criminality Leaks',
                        description: 'Get Criminality Leaks',
                        value: 'criminality_leaks',
                    },
                ),
        );
        var num = 0
        interaction.reply({
            content: 'Amount of files?',
            components: [Amount]
        })
        client.on(Events.InteractionCreate, async interaction1 => {
            if (!interaction1.isStringSelectMenu()) return;

            const selected = interaction1.values[0];

            if (interaction1.customId == 'LeakFileAmount') {
                interaction1.user.send({
                    content: 'What type of file?',
                    components: [Selection]
                })
            } else if (interaction1.customId == 'LeakFileSelection') {
                const amount = 10
                if (selected == 'default') {
                    for ( var i = 0; i < amount; i++ ) {
                        const file = files[Math.floor(Math.random() * files.length)] 
                        interaction.user.send({
                            content:  'Here is your file <@'+interaction.user.id+">, [The amount is WIP so here are 10 files for the trouble]",
                            files: [
                                'leaks/'+file
                            ]
                        })
                    }   
                } else if (selected == 'criminality_leaks') {
                    const files2 = fs.readdirSync('criminality-leaks/')
                    const file = files[Math.floor(Math.random() * files.length)] 
                    interaction.user.send({
                        content:  'Here is your file <@'+interaction.user.id+">, [The amount is WIP so here are 10 files for the trouble]",
                        files: [
                            'leaks/'+file
                        ]
                    })
                }
            }
        })
        //interaction.reply("your files are loading.")
        //interaction.reply("Please wait. This command is being re-furnished 🧼")
    } else if (commandName == 'invite') {
      const invite = ' https://discord.com/api/oauth2/authorize?client_id=1058549521644257330&permissions=1488676509763&scope=bot'
      const Embed = new EmbedBuilder().setTitle("Invite Us!").addFields(
        {
          name: 'Invite Link::',
          value: "[invite]("+invite+")"
        },
        {
          name: 'Servers:',
          value: "I'm in "+client.guilds.cache.size+" servers."
        }
      )

      interaction.reply({
        content: '',
        embeds: [Embed]
      })
    } else if (commandName == 'game') {
        const gameConfiguration = {
            ['Player Speed']: 1, //How many tiles does it step on
            ['Player Health']: 100, //How much health does the player have.
            ['Time Limit']: 60, //How much time does the player have to finish the game
            ['Damages']: {
                ['Gas']: 15, //How much damage does gas take away from the player
                ['Fall Damage']: {
                    ['Enabled']: false, //Is fall damage enabled?
                    ['Damage']: 0 // How much damage does it take
                }
            },
            ['Bank']: 0, //How much money does the player have in the bank.
            ['Cash']: 0, //How much cash does the player have in hand.
            ['Command Unfinished']: true, //Is the command unfinished
            ['Game Discontinued']: true, //Is the game discontinued?
            ['Game Title']: 'Puzzle' //What is the game title?
        }
        const playerInfo = {
            ['Player Name']: interaction.user.username
        }
        if (gameConfiguration['Game Discontinued'] === true) {
            return interaction.reply("This command is discontinued.")
        }
        if (gameConfiguration['Command Unfinished'] === true) {
            return interaction.reply("This command is not finished.")
        }

        const Embed = new EmbedBuilder().setTitle(gameConfiguration['Game Title']).addFields(
            {
                name: 'Game',
                value: 'nil'
            }
        )
        interaction.reply({
            content: '',
            embeds: [Embed]
        })
    } else if (commandName == 'verify') {
        const userid = options.getNumber('userid')
        async function run() {
            async function getInfo() {
                const info = noblox.getPlayerInfo(userid)
                return info
            }
            const info = await getInfo()
            const words = ['hi', 'hello', 'no', 'way', 'for', 'real', 'crazy', 'insane', 'devforums', 'devforum', 'programmer', 'yes', 'plane', 'city', 'building', 'why', 'question', 'mark', 'pen', 'board', 'pencil', 'rules', 'paper', 'user', 'username', 'game', 'roblox', 'god', 'what', 'jump', 'forreal', 'must', 'i', 'animal', 'people', 'person']
            const string = words[Math.floor(Math.random() * words.length)]
            const string2 = words[Math.floor(Math.random() * words.length)]
            const string3 = words[Math.floor(Math.random() * words.length)]
            const string4 = words[Math.floor(Math.random() * words.length)]
            const string5 = words[Math.floor(Math.random() * words.length)]
            const string6 = words[Math.floor(Math.random() * words.length)]
            const string7 = words[Math.floor(Math.random() * words.length)]
            const string8 = words[Math.floor(Math.random() * words.length)]
            const string9 = words[Math.floor(Math.random() * words.length)]
            const string10 = words[Math.floor(Math.random() * words.length)]
            const string11 = words[Math.floor(Math.random() * words.length)]
            const string12 = words[Math.floor(Math.random() * words.length)]
            const string13 = words[Math.floor(Math.random() * words.length)]
            const string14 = words[Math.floor(Math.random() * words.length)]
            const string15 = words[Math.floor(Math.random() * words.length)]
            const string16 = words[Math.floor(Math.random() * words.length)]
            const string17 = words[Math.floor(Math.random() * words.length)]
            const string18 = words[Math.floor(Math.random() * words.length)]
            const string19 = words[Math.floor(Math.random() * words.length)]
            const string20 = words[Math.floor(Math.random() * words.length)]
            const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('YesVerification-'+interaction.user.id)
					.setLabel('Yes')
					.setStyle(ButtonStyle.Success)
                    .setDisabled(false)
			);
            const cancel = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId('CancelVerification-'+interaction.user.id)
                .setLabel('Cancel')
                .setStyle(ButtonStyle.Danger)
            )
            const verifyEMBED = new EmbedBuilder().setTitle("Verification").addFields(
                {
                    name: 'Is This You?',
                    value: info.username+' ('+info.displayName+')'
                },
                {
                    name: 'Blurb/User Description:',
                    value: info.blurb
                }
            ).setColor('Blue').setDescription("To confirm this is you please put: ```"+string+' '+string2+' '+string3+' '+string4+' '+string5+' '+string6+' '+string7+' '+string8+' '+string9+' '+string10+' '+string11+' '+string12+' '+string13+' '+string14+' '+string15+' '+string16+' '+string17+' '+string18+' '+string19+' '+string20+'``` in your blurb/user description. Once done please click ``Yes``')
            interaction.reply({
                content: '',
                embeds: [verifyEMBED],
                components: [row, cancel]
            })
            let cancelled = false
            client.on(Events.InteractionCreate, interaction => {
                if (!interaction.isButton()) {
                    return
                }
                async function run2() {
                    const filter = i => i.customId === 'primary' && i.user.id === interaction.user.id;
                    const info1 = await noblox.getPlayerInfo(userid)

                    if (interaction.customId == 'CancelVerification-'+interaction.user.id) {
                        const cancelEMBED = new EmbedBuilder().setTitle("Verification").setColor('Red').setDescription("This verification process has been cancelled.")
                        interaction.user.send('Cancelled')
                        cancelled = true
                    }

                    if (interaction.customId == 'YesVerification0'+interaction.user.id && cancelled == true) {
                        return interaction.reply("This is cancelled.")
                    }
                    if (interaction.customId == 'YesVerification-'+interaction.user.id && info1.blurb.includes(string+' '+string2+' '+string3+' '+string4+' '+string5+' '+string6+' '+string7+' '+string8+' '+string9+' '+string10+' '+string11+' '+string12+' '+string13+' '+string14+' '+string15+' '+string16+' '+string17+' '+string18+' '+string19+' '+string20)) {
                        const roleToGive = interaction.guild.roles.cache.find(role => role.name === "Members")
                        const member = interaction.guild.members.cache.get(interaction.user.id)
                        member.roles.add(roleToGive)
                        interaction.reply("Verification has been complete "+info1.username+'.')
                    }  else if (!interaction.customId == 'YesVerification-'+interaction.user.id) {
                        return interaction.reply({
                            content: 'Unexpected Verification Please Try Again.',
                            ephemeral: true
                        })
                    } else if (!info1.blurb.includes(string)) {
                        return interaction.user.send({
                            content: 'Could not find the string please try again.',
                            ephemeral: true
                        })
                    }
                }
                run2()
            })
        }

        run()
    } else if (commandName == 'getid') {
        const username = options.getString('username')
        async function run() {
            async function getid(Username) {
                const user = noblox.getIdFromUsername(Username)
                return user
            }

            const user = await getid(username)

            interaction.reply("Here is your ID: "+user+'.')
        }
        run()
    } else if (commandName == 'addpremium') {
        interaction.reply("This command is a WIP")
    } else if (commandName == 'generate') {
        if (!interaction.user.id == '939211379179675698') {
            return interaction.reply('You cannot use this command')
        }
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        const string = letters[Math.floor(Math.random() * letters.length)]
        const string2 = letters[Math.floor(Math.random() * letters.length)]
        const string3 = letters[Math.floor(Math.random() * letters.length)]
        const string4 = letters[Math.floor(Math.random() * letters.length)]
        const string5 = letters[Math.floor(Math.random() * letters.length)]
        const string6 = letters[Math.floor(Math.random() * letters.length)]
        const string7 = letters[Math.floor(Math.random() * letters.length)]
        const string8 = letters[Math.floor(Math.random() * letters.length)]
        const string9 = letters[Math.floor(Math.random() * letters.length)]
        const string10 = letters[Math.floor(Math.random() * letters.length)]
        const string11 = letters[Math.floor(Math.random() * letters.length)]
        const string12 = letters[Math.floor(Math.random() * letters.length)]
        const string13 = letters[Math.floor(Math.random() * letters.length)]
        const string14 = letters[Math.floor(Math.random() * letters.length)]
        const string15 = letters[Math.floor(Math.random() * letters.length)]
        const string16 = letters[Math.floor(Math.random() * letters.length)]
        interaction.reply({
            content: 'Here is your key: ``'+string+''+string2+''+string3+''+string4+'-'+string5+''+string6+''+string7+''+string8+'-'+string9+''+string10+''+string11+''+string12+'-'+string13+string14+string15+string16+'``',
            ephemeral: true
        })
        keys.fill(string+''+string2+''+string3+''+string4+'-'+string5+''+string6+''+string7+''+string8+'-'+string9+''+string10+''+string11+''+string12+'-')
        console.log(keys)
    } else if (commandName == 'redeem') {
        const key = options.getString('key')
        if (keys.find.apply(keys, key)) {
            return interaction.reply("This key is not redeemed!!")
        }
        interaction.reply('no!')
    }
})

client.login(Token)
