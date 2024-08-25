import React from 'react';
import './styles/Filter.css';

function Filter({ onFilter }) {
    const handleFilterChange = (e) => {
        onFilter(e.target.value);
    };

    return (
        <div className="filter">
            <label>
                <input 
                    type="radio" 
                    name="category" 
                    value="" 
                    onChange={handleFilterChange} 
                    defaultChecked 
                />
                All
            </label>
            <label>
                <input 
                    type="radio" 
                    name="category" 
                    value="Technology" 
                    onChange={handleFilterChange} 
                />
                Technology
            </label>
            <label>
                <input 
                    type="radio" 
                    name="category" 
                    value="Health" 
                    onChange={handleFilterChange} 
                />
                Health
            </label>
            <label>
                <input 
                    type="radio" 
                    name="category" 
                    value="Education" 
                    onChange={handleFilterChange} 
                />
                Education
            </label>
        </div>
    );
}

export default Filter;
