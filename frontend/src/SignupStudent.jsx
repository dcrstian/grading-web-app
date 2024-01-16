import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function SignupStudent() {
    const containerStyle = {
        background: '#f7a3cd'
    };

    // const[name, setName] = useState()
    // const[email, setEmail] = useState()
    // const[grupa, setGrupa] = useState()
    // const[password, setPassword] = useState()
    // const[error, setError] = useState()
    // const navigate = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:3001/registerStudent', {name, email, password, grupa})
    //     .then(result => {console.log(result)
    //         navigate('/login')
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         setError(err.response.data.message || 'An error occurred during registration.');
    //     });
    // }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={containerStyle}>
            <div className='bg-white p-3 rounded w-200'>
                <h1>Creeaza-ti contul de student</h1>
                <form>
                <div className='mb-3'>
                        <label htmlFor="name">Nume</label>
                        <input 
                            type="text" 
                            placeholder='Introdu numele tau complet' 
                            name='name'
                            className='form-control rounded-0'
                        />
                    </div>
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
                    <div className='mb-3'>
                        <label 
                        htmlFor="grupa">Grupa</label>
                        <input 
                        type="number" 
                        placeholder='Introdu numarul grupei din care faci parte' 
                        name='grupa'
                        className='form-control rounded-0'
                    />
                    </div>
                    <Link to="/studentHome" className='btn btn-default border w-100'>Inregistrare</Link>
                    <Link to="/login" className='btn btn-default border w-100'>Inapoi la autentificare</Link>
                </form>
            </div>
        </div>
    )
}

export default SignupStudent