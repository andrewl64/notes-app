const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
	return 'Youe notes....';
}

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.find(note => note.title === title);


	if (!duplicateNote) {
		notes.push({
			title,
			body
		});

		saveNotes(notes);
		console.log(chalk.bgGreen.white('Note added!'));

	} else {
		console.log(chalk.bgRed.white("Title already exists!"));
	}

}

const saveNotes = (notes) => {
	const noteJSON = JSON.stringify(notes);

	fs.writeFileSync('notes.json', noteJSON);
}

const loadNotes = () => {
	
	try {
		const noteBuffer = fs.readFileSync('notes.json');
		const noteJSON = noteBuffer.toString();
		return JSON.parse(noteJSON);
	} catch (e) {
		return [];
	}

}

const removeNote = (title) => {
	const notes = loadNotes();

	const newNotes = notes.filter(note => note.title !== title);

	if (newNotes.length < notes.length) {
		saveNotes(newNotes);
		console.log(chalk.bgGreen.white('Note removed!'))
	} else {
		console.log(chalk.bgRed.white('Title does not exist!'));
	}
}

const listNotes = () => {
	console.log(chalk.bgYellowBright.blue('Your Notes:'));
	loadNotes().forEach(e => console.log('-> ' + e.title));
}

const readNote = (title) => {
	let x = loadNotes().find(e => e.title === title);

	if (x) {
		console.log(chalk.bgYellowBright.green(x.title));
		console.log(x.body);
	} else {
		console.log(chalk.bgRed.white("No note with that title found!"));
	}
}

module.exports = {
	getNotes,
	addNote,
	removeNote,
	listNotes,
	readNote
};