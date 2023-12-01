import React from "react";
import { Link } from "react-router-dom";


export default class NewPage extends React.Component {
    state = {
        note: {
            title: '',
            body: '',
            createdAt: undefined,
            updatedAt: undefined
        }
    }

    updateValue = (e) => {
        const { note } = this.state
        this.setState({
            // Get the name of element that trigger updateValue and value from the element
            note: { ...note, [e.target.name]: e.target.value }
        });
    }

    handleSave = (e) => {
        e.preventDefault();

        const id = this.props.onSave(this.state.note)
        this.props.history.replace(`/notes/${ id }`)
    }

    render(){
        const { note } = this.state
        return (
            <div className="note-form">
                <h1>New Note</h1>
                <form onSubmit={this.handleSave}>
                    <div className="note-form-field">
                        <label>Title</label>
                        <input type="text" name="title" value={note.title} onChange={this.updateValue} />
                    </div>
                    <div className="note-form-field note-form-field-text">
                        <textarea name="body" value={note.body} onChange={this.updateValue} />
                    </div>
                    <div className="note-form-button">
                        <button className="btn">Save</button>
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}