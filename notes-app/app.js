const yargs = require('yargs');
const { getNotes, addNote, removeNote } = require('./notes.js');

yargs.command({
	command: 'add',
	describe: 'Add a new note.',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note Content',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
		addNote(argv.title, argv.body);
	}
});
yargs.command({
	command: 'remove',
	describe: 'Remove a note.',
	builder: {
		title: {
			describe: "Note title to remove",
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
		removeNote(argv.title);
	}
});
yargs.command({
	command: 'read',
	describe: 'Read a note.',
	handler: function() {
		console.log('Reading note!');
	}
});
yargs.command({
	command: 'list',
	describe: 'List notes.',
	handler: function() {
		console.log('Listing notes!');
	}
});

yargs.parse();
//console.log(yargs.argv);