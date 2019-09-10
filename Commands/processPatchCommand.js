// Shows latest patch, numerical version formatted as phase.conceptVersion.update 
// (0.1.1 means creation phase, 1st concept, 1st version)

export function processPatchCommand(args, msg) {
    msg.author.send(`
      ...\n
      **VERSION 0.0.1**
      \n-Accounts can now be created and deleted.
      \n-List of areas available to explore (based on your current level) can be displayed.
      \n-Resources available in areas 1, 2, and 3 added     
    `)
}