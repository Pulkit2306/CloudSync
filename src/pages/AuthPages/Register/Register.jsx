/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../../../components/AuthComponents/RegisterForm'

const Register = () => {
  return (
    <div className="container-fluid">
    <h1 className="display-1 my-5 text-center"> CREATE YOUR ACCOUNT </h1>
      <div className="row">
        <div className="col-md-5 mx-auto mt-5">
          <RegisterForm />
          <Link to="/login">
            Already a member? Login Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register