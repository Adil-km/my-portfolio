import { Button } from "./Button"
import '../App.css'
import React, { useState } from 'react';

export const Contact= () =>{
    // Optional: Track form data using useState if needed
    const [formData, setFormData] = useState({
      name: '',
      email: '',
    });
  
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevents the default form submission behavior
      // Display an alert when the form is submitted
      alert('Form submitted!');
      
      // You can also access the form data here if needed, for example:
      console.log('Form data:', formData);
    };
  
    // Optional: Handle input changes if you're managing form data
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
  