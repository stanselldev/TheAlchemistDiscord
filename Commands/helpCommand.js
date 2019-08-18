export function helpCommand(args, msg) {
    msg.author.send(`
      ...\n
      ***GETTING STARTED***
      \`\`\`
      Use '!account create' to get started. 

      \nOnce your account is created, it's time to get to work. A good place to begin is having a look around. Try '!explore' to see what's nearby.

      \nHere's a list of all currently available commands and what they do:

      \n!help - Gives this menu as a private message
      !patch - Gives information on the latest patch version as a private message

      \n!account create - create a new account
      !account delete - delete your account
      !account view - see your account status and info

      \n!explore - displays areas available to explore
      \`\`\`
    `)
}