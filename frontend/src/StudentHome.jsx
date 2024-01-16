import React from 'react';
import { Link } from "react-router-dom";

function StudentHome() {
  const containerStyle = {
    background: '#f7a3cd'
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={containerStyle}>
      <div className='bg-white p-3 rounded w-200'>
        <div className="text-center mb-4">
          <h1 className="text">Bun venit in contul tau de student!</h1>
          <h2 className="text">Ce ai in plan pentru astazi?</h2>
          <p className="text">(P.S: Sesiunea e aproape gata!:))))</p>
        </div>
        <div>
          <Link to="/addProject" className="btn btn-primary btn-lg m-2">Adauga un proiect nou</Link>
          <Link to="/projectList" className="btn btn-primary btn-lg m-2">Vezi proiectele colegilor</Link>
          <Link to = "/login" className="btn btn-primary btn-lg m-2">Iesi din cont</Link>
        </div>
      </div>
    </div>
  );
}

export default StudentHome;
