// src/components/BlogForm.js
import React, { useState } from 'react';
import './styles/BlogForm.css';

const BlogForm = ({ onCreateBlog }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description && category) {
            onCreateBlog({ title, description, category });
            setTitle('');
            setDescription('');
            setCategory('');
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
        }
    };

    return (
        <div>
            <form className="blog-form" onSubmit={handleSubmit}>
                <h2>Create Your Blog</h2>
                <input
                    type="text"
                    placeholder="Blog Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Blog Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="" disabled>Select Category</option>
                    <option value="Technology">Technology</option>
                    <option value="Health">Health</option>
                    <option value="Education">Education</option>
                </select>
                <button type="submit">Create Blog</button>
            </form>
            {showPopup && (
                <div className="popup-message">
                    Blog successfully created!
                </div>
            )}
        </div>
    );
};

export default BlogForm;
