// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BlogForm from './components/BlogForm';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import BlogList from './components/BlogList';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer'; // Import Footer component
import './App.css';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const createBlog = (blog) => {
    setBlogs([...blogs, { ...blog, id: Date.now() }]);
  };

  const updateBlog = (updatedBlog) => {
    setBlogs(blogs.map(blog => (blog.id === updatedBlog.id ? updatedBlog : blog)));
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  const filteredBlogs = blogs.filter(blog => {
    return (
      (filterCategory === '' || blog.category === filterCategory) &&
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="app-container">
      <Navbar />
      <AboutUs /> 
      <div className="content-container">
        <BlogForm onCreateBlog={createBlog} />
        <SearchBar onSearch={handleSearch} />
        <Filter onFilter={handleFilter} />
        <BlogList blogs={filteredBlogs} onDeleteBlog={deleteBlog} onEditBlog={updateBlog} />
      </div>
      <Footer /> {/* Add Footer component here */}
    </div>
  );
};

export default App;
