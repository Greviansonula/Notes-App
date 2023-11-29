import React from "react";

function ShowPage({ match }) {
    const note = this.state.notes[match.params.id];

    if (!note) {
        return <div>Note not found</div>;
      }

   
    return (
        <div>
            <h1>{ note.title }</h1>
            <div>{ note.body }</div>
        </div>
    )
}

export default ShowPage