import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdaugareNotaAnonima() {
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
                <h1>Adauga un feedback pentru proiect</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="link" className="form-label">
                            Adauga o nota proiectului
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="link"
                            value={link}
                            onChange={handleLinkChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Adauga aici o sugestie pentru autor (maximum 200 caractere)
                        </label>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="2"
                            value={description}
                            onChange={handleDescriptionChange}
                            maxLength="200"
                            required
                        ></textarea>
                    </div>
                    <Link to="/successAdaugareNota" className="btn btn-primary btn-lg m-2">Adauga</Link>
                    <Link to="/projectList" className="btn btn-primary btn-lg m-2">Inapoi la lista de proiecte</Link>
                </form>
            </div>
        </div>
    );
}

export default AdaugareNotaAnonima;
