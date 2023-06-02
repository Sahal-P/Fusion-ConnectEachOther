import { useEffect, useState } from 'react'
import signup_logo from './signup_logo.png'
import preAnim from './preAnimation'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../../redux/features/authSlice'

const intitialState = {
    name: '',
    username: '', 
    email: '', 
    phone: '', 
    password: '', 
    password_confirm: '', 
  }

export const SignUp = () => {
    const [formData, setFormData] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(authActions.register({formData, navigate}))
    }

    const handleChange = (e) => {
      e.preventDefault()
      setFormData({...formData, [e.target.name] : e.target.value})
      console.log(formData);
    }
    useEffect(()=>{
        preAnim()
    },[])
  return (
    <>
      <div className="logoContainer" style={{transform: "scale(1, 1)"}}>
        <img
          className="loginlogo"
          src={signup_logo}
          alt='login-logo'
        />
        {/* <img
          className="text"
          src=""
          alt='text-logo'
        /> */}
      </div>
      <div className="acceptContainer" style={{height: "600px"}}>
        <form className='authform' onSubmit={handleSubmit}>
          <h1>REGISTER NOW!</h1>
          <div className="formContainer">
            <div className="formDiv" style={{ transitionDelay: "0.2s" }}>
              <p>NAME</p>
              <input type="text" name='name' onChange={handleChange} required="" />
            </div>
            <div className="formDiv" style={{ transitionDelay: "0.2s" }}>
              <p>EMAIL</p>
              <input type="email" name='email' onChange={handleChange} required="" />
            </div>
            <div className="formDiv" style={{ transitionDelay: "0.2s" }}>
              <p>PHONE NUMBER</p>
              <input type="number" name='phone' onChange={handleChange} required="" />
            </div>
            <div className="formDiv" style={{ transitionDelay: "0.2s" }}>
              <p>USERNAME</p>
              <input type="text" name='username' onChange={handleChange} required="" />
            </div>
            <div className="formDiv" style={{ transitionDelay: "0.2s" }}>
              <p>PASSWSORD</p>
              <input type="password" name='password' onChange={handleChange} required="" />
            </div>
            <div className="formDiv" style={{ transitionDelay: "0.4s" }}>
              <p>CONFIRM PASSWSORD</p>
              <input type="password" name='password_confirm' onChange={handleChange} required="" />
              <a className="forgotPas" href="#">
                FORGOT YOUR PASSWORD?
              </a>
            </div>
            <div className="formDiv" style={{ transitionDelay: "0.6s" }}>
              <button className="acceptBtn" type="submit">
                Register
              </button>
              <span className="register">
                Already have an account?<Link to="/auth/login">Login</Link>
              </span>
            </div>
          </div>
        </form>
      </div>

</>

  )
}
