import React from 'react';

const NoteItem = ({ note, onDelete, onEdit }) => {
  return (
    <div className="note-item">
      <h3>{note?.title}</h3>
      <p>{note?.content?.slice(0, 100)}...</p>
      <button onClick={() => onEdit(note)}>Edit</button>
      <button onClick={() => onDelete(note._id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
