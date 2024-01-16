import React from "react";
import { Link } from "react-router-dom";

function DetaliiProiect() {
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
                    <h2 className="text">Grupa:</h2>
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
                    <h2 className="text">Nota obtinuta:</h2>
                    <p className="text">Proiect 1</p>
                </div>
                <Link to = "/homeProfessor" className="btn btn-primary btn-lg m-2">Inapoi la pagina principala</Link>
            </div>
        </div>
    );
}

export default DetaliiProiect;