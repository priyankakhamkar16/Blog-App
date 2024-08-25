import React from 'react';
import BlogItem from './BlogItem';
import './styles/BlogList.css';

function BlogList({ blogs, onDeleteBlog, onEditBlog }) {
    return (
        <div className="blog-list">
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <BlogItem 
                        key={blog.id} 
                        blog={blog} 
                        onDelete={() => onDeleteBlog(blog.id)} 
                        onEdit={onEditBlog} 
                    />
                ))
            ) : (
                <p>No blogs available. Create some blogs!</p>
            )}
        </div>
    );
}

export default BlogList;
