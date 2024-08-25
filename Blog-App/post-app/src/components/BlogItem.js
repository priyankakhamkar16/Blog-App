import React, { useState } from 'react';
import './styles/BlogItem.css';

function BlogItem({ blog, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedBlog, setEditedBlog] = useState(blog);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEdit(editedBlog);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedBlog({ ...editedBlog, [name]: value });
    };

    return (
        <div className="blog-item">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        name="title"
                        value={editedBlog.title}
                        onChange={handleChange}
                    />
                    <textarea
                        name="description"
                        value={editedBlog.description}
                        onChange={handleChange}
                    />
                    <select
                        name="category"
                        value={editedBlog.category}
                        onChange={handleChange}
                    >
                        <option value="Technology">Technology</option>
                        <option value="Health">Health</option>
                        <option value="Education">Education</option>
                    </select>
                    <button onClick={handleSaveClick}>Save</button>
                </>
            ) : (
                <>
                    <h2>{blog.title}</h2>
                    <p>{blog.description}</p>
                    <p><strong>Category:</strong> {blog.category}</p>
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={onDelete}>Delete</button>
                </>
            )}
        </div>
    );
}

export default BlogItem;
