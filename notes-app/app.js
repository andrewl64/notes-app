const yargs = require('yargs');
const { getNotes, addNote, removeNote, listNotes, readNote} = require('./notes.js');

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
	handler(argv) {addNote(argv.title, argv.body)}
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
	handler(argv) {removeNote(argv.title)}
});
yargs.command({
	command: 'read',
	describe: 'Read a note.',
	builder: {
		title: {
			describe: 'Note title to read',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {readNote(argv.title)}
});
yargs.command({
	command: 'list',
	describe: 'List notes.',
	handler() {listNotes()}
});

yargs.parse();