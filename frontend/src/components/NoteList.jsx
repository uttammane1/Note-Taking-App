import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete, onEdit }) => {
  if (notes.length === 0) return <p>No notes available</p>;

  return (
    <div className="note-list">
      {notes?.map(note => (
        <NoteItem
          key={note._id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default NoteList;
