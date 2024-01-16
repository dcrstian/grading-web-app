import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddProject() {
  const containerStyle = {
    background: '#f7a3cd'
  };

  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
    console.log('Description:', description);
    console.log('Link:', link);
    // Add your API call or other logic here
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={containerStyle}>
      <div className='bg-white p-3 rounded w-200'>
        <h1>Adauga un proiect pentru evaluare</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Descrie Proiectul in maximum 500 cuvinte
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="8"
              value={description}
              onChange={handleDescriptionChange}
              maxLength="500"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="link" className="form-label">
              Adauga link-ul de github unde ai salvat proiectul
            </label>
            <input
              type="text"
              className="form-control"
              id="link"
              value={link}
              onChange={handleLinkChange}
              required
            />
          </div>
          <Link to="/successAddProject" className="btn btn-primary btn-lg m-2">Adauga</Link>
          <Link to = "/studentHome" className="btn btn-primary btn-lg m-2">Inapoi la pagina principala</Link>
        </form>
      </div>
    </div>
  );
}

export default AddProject;
