

// nodemon app.js add --title="Diwali Sale" --body="50% discount on Diwali sale"

const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {  // arguments 
        a: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        b: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})



yargs.command({
    command: 'sum',
    describe: 'Add a new note',
    builder: {  // arguments 
        a: {
            describe: 'Note title',
            demandOption: true,
            type: 'number'
        },
        b: {
            describe: 'Note body',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log('sum of a & b are : ' + (argv.a+argv.b));
    }
})

yargs.parse()