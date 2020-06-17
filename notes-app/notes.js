const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
	return 'Youe notes....';
}

const addNote = (title, body) => {
	const notes = loadNotes();

	const duplicateNotes = notes.filter(note => {
		return note.title === title;
	});


	if (duplicateNotes.length === 0) {
		notes.push({
			title,
			body
		});

		saveNotes(notes);
	} else {
		console.log("Title already exists!");
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

	const newNotes = notes.filter(note => {
		return note.title !== title;
	});

	if (newNotes.length < notes.length) {
		saveNotes(newNotes);
		console.log(chalk.bgWhite.green('Note removed!'))
	} else {
		console.log(chalk.bgWhite.red('Title does not exist!'));
	}
}

module.exports = {
	getNotes,
	addNote,
	removeNote
};