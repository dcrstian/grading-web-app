import React from "react";
import { Link } from "react-router-dom";

function ProfessorLogin() {
    const containerStyle = {
        background: '#f7a3cd'
    };
    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={containerStyle}>
            <div className='bg-white p-3 rounded w-200'>
                <h1>Acceseaza contul tau de profesor</h1>
                <form>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder='Introdu adresa ta de email'
                            name='email'
                            className='form-control rounded-0'
                        />
                    </div>
                    <div className='mb-3'>
                        <label
                            htmlFor="password">Parola</label>
                        <input
                            type="password"
                            placeholder='Creaza o parola pentru contul tau'
                            name='password'
                            className='form-control rounded-0'
                        />
                    </div>
                    <Link to="/homeProfessor" className='btn btn-success w-100'>Intra in cont</Link>
                    <Link to="/login" className='btn btn-default border w-100'>Inapoi</Link>
                </form>
            </div>
        </div>
    )
}

export default ProfessorLogin