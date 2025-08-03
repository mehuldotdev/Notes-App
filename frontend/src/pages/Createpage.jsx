import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { ArrowLeftIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../lib/axios';
const Createpage = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e)=> {
    e.preventDefault();
    if(!title.trim() || !content.trim()){
      toast.error("All fields are required")
      return;
    }
    setloading(true)
    try {
      await api.post("/notes", {
        title,
        content
      })
      toast.success("Note created successfully!")
      navigate("/");
    } catch (error) {
      console.log("Error in note creation", error);
      toast.error("Failed to create note")
    } finally {
      setloading(false)
    }
  }

  return (
    <div className='min-h-screen bg-base-200'>
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-2xl mx-auto'>
        <Link to="/" className='btn btn-ghost mb-6'>
        <ArrowLeftIcon className='size-5' />
        Back to notes
        </Link>
        <div className='card bg-base-100'>
          <div className='card-body'>
            <h2 className='card-title text-2xl mb-4'>Create a new note</h2>
            <form onSubmit={handleSubmit}>
              <div className='form-control flex flex-col gap-4 mb-4'>
                <label className='label'>
                  <span className='label-text mr-7.5'>Title</span>
                </label>
                <input type="text"
                placeholder='My new note'
                className='input w-full input-primary'
                value={title}
                onChange={(e)=>settitle(e.target.value)}
                />
              </div>
              
              <div className='form-control flex flex-col gap-4 mb-4'>
                <label className='label'>
                  <span className='label-text mr-7.5'>Content</span>
                </label>
                <textarea
                className='textarea textarea-bordered w-full h-32 input-primary'
                placeholder='Write your note description...'
                value={content}
                onChange={(e)=>setcontent(e.target.value)}
                />
              </div>
              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Creating..." : "Create Note"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Createpage