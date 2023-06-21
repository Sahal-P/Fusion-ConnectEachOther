import { useEffect, useState } from "react";
import preAnimImg from "./preAnimImg.png";
import preAnim from "./preAnimation";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../redux/features/authSlice";

const initialState = { email: "", password: "" };

export const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(authActions.login(formData));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  useEffect(() => {
    preAnim();
  }, []);
  return (
    <>
      <div className="logoContainer" style={{ transform: "scale(1, 1)" }}>
        <img className="loginlogo" src={preAnimImg} alt="login-logo" />
        {/* <img
          className="text"
          src=""
          alt='text-logo'
        /> */}
      </div>
      <div className="acceptContainer">
        <form className="authform" onSubmit={handleSubmit}>
          <h1>WELCOME BACK!</h1>
          <div className="formContainer">
            <div className="formDiv" style={{ transitionDelay: "0.2s" }}>
              <p>EMAIL</p>
              <input
                type="email"
                name="email"
                required=""
                onChange={handleChange}
              />
            </div>
            <div className="formDiv" style={{ transitionDelay: "0.4s" }}>
              <p>PASSWSORD</p>
              <input
                type="password"
                name="password"
                required=""
                onChange={handleChange}
              />
              <a className="forgotPas" href="#">
                FORGOT YOUR PASSWORD?
              </a>
            </div>
            <div className="formDiv" style={{ transitionDelay: "0.6s" }}>
              <button className="acceptBtn" type="submit">
                Login
              </button>
              <span className="register">
                Need an account?<Link to="/auth/register">Register</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
