import React, { useState } from 'react';
import { Clock, Download, Copy, Trash2 } from 'lucide-react';
import { useVideo } from '../contexts/VideoContext';

interface Note {
  id: string;
  timestamp: number;
  content: string;
}

const NotePanel: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteContent, setNoteContent] = useState('');
  const { currentTime, setCurrentTime } = useVideo();
  
  const addNote = () => {
    if (noteContent.trim() === '') return;
    
    const newNote: Note = {
      id: crypto.randomUUID(),
      timestamp: currentTime,
      content: noteContent.trim()
    };
    
    setNotes(prev => [...prev, newNote]);
    setNoteContent('');
  };
  
  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };
  
  const handleNoteClick = (timestamp: number) => {
    setCurrentTime(timestamp);
  };
  
  const formatTimestamp = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  const exportNotes = () => {
    const notesText = notes
      .sort((a, b) => a.timestamp - b.timestamp)
      .map(note => `[${formatTimestamp(note.timestamp)}] ${note.content}`)
      .join('\n\n');
      
    const blob = new Blob([notesText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'video-notes.txt';
    a.click();
    URL.revokeObjectURL(url);
  };
  
  const copyNotes = () => {
    const notesText = notes
      .sort((a, b) => a.timestamp - b.timestamp)
      .map(note => `[${formatTimestamp(note.timestamp)}] ${note.content}`)
      .join('\n\n');
      
    navigator.clipboard.writeText(notesText);
  };
  
  return (
    <div className="bg-surface rounded-lg shadow-lg p-4 h-[calc(100vh-6rem)] flex flex-col">
      <div className="flex items-center justify-between border-b border-background pb-3 mb-3">
        <h2 className="text-lg font-semibold">Notes</h2>
        <div className="flex space-x-2">
          <button 
            className="p-2 rounded-full text-text-secondary hover:bg-background hover:text-text-primary transition-colors"
            onClick={copyNotes}
            title="Copy to clipboard"
          >
            <Copy size={16} />
          </button>
          <button 
            className="p-2 rounded-full text-text-secondary hover:bg-background hover:text-text-primary transition-colors"
            onClick={exportNotes}
            title="Download notes"
          >
            <Download size={16} />
          </button>
        </div>
      </div>
      
      <div className="flex mb-3">
        <div className="bg-background text-text-secondary py-1 px-2 rounded flex items-center mr-2">
          <Clock size={14} className="mr-1" />
          <span className="text-sm font-mono">{formatTimestamp(currentTime)}</span>
        </div>
        <input
          type="text"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') addNote();
          }}
          placeholder="Take a note at this timestamp..."
          className="flex-grow bg-background border-none rounded py-1 px-2 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={addNote}
          className="ml-2 bg-primary text-background py-1 px-3 rounded hover:bg-primary/90 transition-colors"
        >
          Add
        </button>
      </div>
      
      <div className="flex-grow overflow-y-auto">
        {notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-text-secondary py-8">
            <Clock size={40} className="mb-2" />
            <p className="text-center text-sm">
              Your notes will appear here.<br />
              Take notes while watching to create your study guide.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {notes
              .sort((a, b) => a.timestamp - b.timestamp)
              .map(note => (
                <div 
                  key={note.id}
                  className="bg-background rounded p-3 flex group"
                >
                  <button
                    className="text-primary hover:text-primary/80 mr-2 transition-colors"
                    onClick={() => handleNoteClick(note.timestamp)}
                  >
                    {formatTimestamp(note.timestamp)}
                  </button>
                  <p className="flex-grow text-text-primary">{note.content}</p>
                  <button
                    className="text-text-secondary hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                    onClick={() => deleteNote(note.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotePanel;