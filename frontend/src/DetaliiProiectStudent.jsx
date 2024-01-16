import React from "react";
import { Link } from "react-router-dom";

function DetaliiProiectStudent() {
    const containerStyle = {
        background: '#f7a3cd'
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={containerStyle}>
            <div className='bg-white p-3 rounded w-660'>
                <div className="text-left mb-4">
                    <h2 className="text">Numele proiectului:</h2>
                    <p className="text">Proiect 1</p>
                </div>
                <div className="text-left mb-4">
                    <h2 className="text">Autor:</h2>
                    <p className="text">Proiect 1</p>
                </div>
                <div className="text-left mb-4">
                    <h2 className="text">Descrierea:</h2>
                    <p className="text">Proiect 1</p>
                </div>
                <div className="text-left mb-4">
                    <h2 className="text">Link proiect:</h2>
                    <p className="text">Proiect 1</p>
                </div>
                <div className="text-left mb-4">
                    <h2 className="text">Instructiuni accesare:</h2>
                    <p className="text">Proiect 1</p>
                </div>
                <Link to="/adaugaNota" className='btn btn-default border w-100'>Adauga o nota anonima proiectului</Link>
                <Link to="/projectList" className='btn btn-default border w-100'>Inapoi la lista de proiecte</Link>
            </div>
        </div>
    );
}

export default DetaliiProiectStudent;