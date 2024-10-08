import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteList from './components/NoteList.jsx';
import NoteForm from './components/NoteForm';
import Spinner from './components/Spinner';
import Error from './components/Error';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentNote, setCurrentNote] = useState(null);
  const baseUrl = import.meta.env.VITE_URL;

  const fetchNotes = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${baseUrl}/notes/allNotes`);
      setNotes(response.data.data);
    } catch (err) {
      setError('Failed to load notes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAddNote = async (note) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post(`${baseUrl}/notes`,note,{
        headers:{
          'Content-Type': 'application/json'
        }
      });
      console.log(response)
      setNotes([...notes, response.data]);
    } catch (err) {
      setError('Unable to save the note');
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  const handleEditNote = async (id, updatedNote) => {
    setLoading(true);
    setError('');
    try {
      await axios.put(`${baseUrl}/notes/${id}`, updatedNote);
      setNotes(notes.map(note => (note._id === id ? updatedNote : note)));
    } catch (err) {
      setError('Unable to update the note');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteNote = async (id) => {
    setLoading(true);
    setError('');
    try {
      await axios.delete(`${baseUrl}/notes/${id}`);
      setNotes(notes.filter(note => note._id !== id));
    } catch (err) {
      setError('Unable to delete the note');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Note Taking App</h1>
      {loading && <Spinner />}
      {error && <Error message={error} />}
      <NoteForm
        currentNote={currentNote}
        onAddNote={handleAddNote}
        onEditNote={handleEditNote}
      />
      <NoteList
        notes={notes}
        onEdit={setCurrentNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
};

export default App;
