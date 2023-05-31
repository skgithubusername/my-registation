import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';

const RegistrationPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [linkedInProfile, setLinkedInProfile] = useState('');
  const [areasOfExpertise, setAreasOfExpertise] = useState('');
  const [experience, setExperience] = useState('');
  const [availability, setAvailability] = useState('');
  const [resume, setResume] = useState(null);

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
  
      const formData = new FormData();
      formData.append('resume', resume);

      
      await axios.post('/students', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: {
          fullName,
          email,
          company,
          position,
          phoneNumber,
          linkedInProfile,
          areasOfExpertise,
          experience,
          availability,
        },
      });

      // Reset the form fields
      setFullName('');
      setEmail('');
      setCompany('');
      setPosition('');
      setPhoneNumber('');
      setLinkedInProfile('');
      setAreasOfExpertise('');
      setExperience('');
      setAvailability('');
      setResume(null);

    //   alert('Registration successful!');
    } catch (error) {
      console.error(error);
      alert('An error occurred while registering. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Registration Page</h1>
      <form onSubmit={handleRegistration}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <input type="text" id="position" value={position} onChange={(e) => setPosition(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="linkedInProfile">LinkedIn Profile:</label>
          <input type="text" id="linkedInProfile" value={linkedInProfile} onChange={(e) => setLinkedInProfile(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="areasOfExpertise">Areas of Expertise:</label>
          <input type="text" id="areasOfExpertise" value={areasOfExpertise} onChange={(e) => setAreasOfExpertise(e.target.value.split(','))} required />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience (in years):</label>
          <input type="number" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="availability">Availability:</label>
          <input type="text" id="availability" value={availability} onChange={(e) => setAvailability(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume:</label>
          <input type="file" id="resume" onChange={(e) => setResume(e.target.files[0])} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
