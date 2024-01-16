import React from 'react'
import { Link } from "react-router-dom";

function ProfessorHome() {
    const containerStyle = {
        background: '#f7a3cd'
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={containerStyle}>
            <div className="container">
                <ul className="list-group mt-4">
                    <li className="list-group-item d-flex justify-content-between align-items-center mb-2" style={{ height: '50px' }}>
                        <Link to="/detaliiProiect">
                            <span>Proiect 1</span>
                        </Link>
                        <span>Author</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center mb-2" style={{ height: '50px' }}>
                        <Link to="/detaliiProiect">
                            <span>Proiect 1</span>
                        </Link>
                        <span>Author</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center mb-2" style={{ height: '50px' }}>
                        <Link to="/detaliiProiect">
                            <span>Proiect 1</span>
                        </Link>
                        <span>Author</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center mb-2" style={{ height: '50px' }}>
                        <Link to="/detaliiProiect">
                            <span>Proiect 1</span>
                        </Link>
                        <span>Author</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center mb-2" style={{ height: '50px' }}>
                        <Link to="/detaliiProiect">
                            <span>Proiect 1</span>
                        </Link>
                        <span>Author</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center mb-2" style={{ height: '50px' }}>
                        <Link to="/detaliiProiect">
                            <span>Proiect 1</span>
                        </Link>
                        <span>Author</span>
                    </li>
                </ul>
            </div>
            <Link to = "/login" className="btn btn-primary btn-lg m-2">Iesi din cont</Link>
        </div>
    );
}

export default ProfessorHome