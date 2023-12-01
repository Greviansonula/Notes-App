import PouchDB from 'pouchdb'
import NoteList from './components/notelist';

export default class DB {
    constructor(name) {
        this.db = new PouchDB(name)
    }

    async getAllNotes() {
        let allNotes = await this.db.allDocs({ include_docs: true });
        let notes = {};

        allNotes.rows.forEach(n => notes[n.id] = n.doc)

        return NoteList;
    }
}