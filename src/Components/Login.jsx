import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const Navigate = useNavigate();
  const SignIn = () => {

    Navigate('/profile')
  }
  return (
    <div>
      <div className="container bg-secondary">
        <div className="row my-5 py-5">
          <div className="col-md-3 col-sm-12"></div>

          <div className="col-md-6 col-sm-12 bg-white rounded">
            <form className='shadow p-4'>

              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" for="form2Example1">Email address</label>
                <input type="email" id="form2Example1" className="form-control" />

              </div>
              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" for="form2Example2">Password</label>
                <input type="password" id="form2Example2" className="form-control" />

              </div>


              <div className="row mb-4">
                <div className="col d-flex justify-content-center">

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                    <label className="form-check-label" for="form2Example31"> Keep me signed in </label>
                  </div>
                </div>

                <div className="col">

                  <a href="/">Forgot password?</a>
                </div>
              </div>
              <div className=" d-grid">
                <button type="button" className="btn btn-primary btn-large mb-4" onClick={() => SignIn()}>Sign in</button>
              </div>
              <div className="row">
                <div className="d-flex">

                </div>
              </div>
              <div className="text-center d-flex">
                <p className='pt-2'>or Continue with:</p>
                <div>


                  <button type="button" className="btn btn-link  btn-floating mx-1">
                    <i className="fa fa-google custom-icon "></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fa fa-linkedin custom-icon"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fa fa-facebook-square custom-icon"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fa fa-instagram custom-icon"></i>
                  </button>
                </div>
              </div>
              <div className='pt-5 text-center'>
                <p>Are you a<b> <a href="/">Athlete ?</a>  </b></p>
                <p>Don't Have Account ? <b> <a href="/employee_registration">Sign up</a> </b> </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
