import React from "react";
import { Link } from "react-router-dom";

function SuccessAdaugareNota() {
    const containerStyle = {
        background: '#f7a3cd'
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={containerStyle}>
            <div className='bg-white p-3 rounded w-100'>
                <div className="text-center mb-4">
                    <h1 className="text">Feedback-ul tau a fost adaugat cu success!</h1>
                </div>
            </div>
            <Link to = "/studentHome" className="btn btn-primary btn-lg m-2">Inapoi la pagina principala</Link>
        </div>
    );
}

export default SuccessAdaugareNota;