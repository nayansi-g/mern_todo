import React from 'react'
import './SignUp.css'
import Headercomp from './Headercomp'
import { useRef } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignIn = () => {
    const email = useRef("");

    const password = useRef("");

    const submitForm = async (e) => {
        e.preventDefault();

        let newUser = {
            email: email.current.value,

            password: password.current.value
        }
        console.log(newUser)
        await axios.post("http://localhost:1000/api/v1/signin", newUser, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            toast.success("successfully signIn")


        })
    }




    return (
        <div className='signin'>
            <ToastContainer />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 column  col-left d-flex justify-content-center align-items-center'>
                        <Headercomp first="Sign" second="In" />
                    </div>
                    <div className='col-lg-8 column d-flex justify-content-center align-items-center'>
                        <div className='d-flex flex-column w-100 p-5'>
                            <input className='p-2 my-3 input-signup'
                                type="email" name='email'
                                placeholder='Enter Your Email' ref={email} />

                            <input className='p-2 my-3 input-signup'
                                type="password" name='password'
                                placeholder='Enter Your Password' ref={password} />

                            <button className='btn-signup p-2' onClick={submitForm}>SignIn</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SignIn;