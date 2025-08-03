import { Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import api from '../src/lib/axios';
import toast from 'react-hot-toast';

const handleDelete = async (e, id, setNotes) => {
  e.stopPropagation();
  e.preventDefault();
  if (!window.confirm("Are you sure you want to delete the note?")) return;

  try {
    await api.delete(`/notes/${id}`);
    setNotes((prev) => prev.filter(note => note._id !== id));
    toast.success("Note deleted successfully!");
  } catch (error) {
    console.error("Error in note deletion", error);
    toast.error("Error in note deletion");
  }
};

const NoteCard = ({ note, setNotes }) => {
  return (
    <div className="card p-5 bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]">
      <Link to={`/note/${note._id}`} className="card-body cursor-pointer">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
      </Link>
      <div className="card-actions justify-between items-center mt-4">
        <span className="text-sm text-base-content/60">{note.createdAt}</span>
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => handleDelete(e, note._id, setNotes)}
            className="btn btn-ghost btn-xs text-error"
          >
            <Trash2Icon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
