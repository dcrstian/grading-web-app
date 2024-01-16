import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const containerStyle = {
        background: '#f7a3cd'
    };
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()
    // const navigate = useNavigate()

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     axios.post('http://localhost:3001/login', { email, password })
    //         .then(result => {
    //             console.log(result)
    //             if (result.data === "Success") {
    //                 navigate('/studentHome')
    //             }
    //         })
    //         .catch(err => console.log(err));
    // }
    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={containerStyle}>
            <div className='bg-white p-3 rounded w-200'>
                <h1>Acceseaza contul tau de student</h1>
                <form>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder='Introdu adresa de e-mail'
                            name='email'
                            className='form-control rounded-0'
                        />
                    </div>
                    <div className='mb-3'>
                        <label
                            htmlFor="password">Parola</label>
                        <input
                            type="password"
                            placeholder='Introdu parola'
                            name='password'
                            className='form-control rounded-0'
                        />
                    </div>
                    <Link to="/studentHome" className='btn btn-success w-100'>Intra in cont</Link>
                    <Link to="/register" className='btn btn-default border w-100'>Creeaza un cont de profesor</Link>
                    <Link to="/registerStudent" className='btn btn-default border w-100'>Creeaza un cont de student</Link>
                </form>
                <h2>Esti profesor?</h2>
                <Link to="/professorLogin" className='btn btn-default border w-100'>Acceseaza contul de profesor</Link>
            </div>
        </div>
    )
}

export default Login