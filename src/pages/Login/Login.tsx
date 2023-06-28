import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../redux/userActions/store";
import { loginAsync } from "../../redux/userActions/userActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import sonyLogoText from "../../assets/images/png/pngimg.com - sony_logo_PNG5.png";
import playStationBanner from "../../assets/images/jpg/vecteezy_playstation-ps5-ps4-logo-free-vector_20190708.jpg";
import backgroundImage from "../../assets/images/jpg/wallpaper.jpg";

interface UserFormState {
  email: string;
  password: string;
}

function Login() {
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();

  const navigate = useNavigate();
  const [isShowEmail, setIsShowEmail] = useState<boolean>(true);
  const [loginData, setLoginData] = useState<UserFormState>({
    email: "",
    password: "",
  });

  const handleEmailId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, email: e.target.value });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, password: e.target.value });
  };

  const handleNext = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsShowEmail(false);
    console.log(false);
  };

  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(loginData);


      dispatch(loginAsync(loginData))
      .unwrap()
      .then((res) => {
        // Login successful, perform desired actions
        navigate("/section");
      })
      .catch((error) => {
        // Login failed, handle error
        console.log("Login error:", error);
      });
    
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        background: `url(${backgroundImage})`,
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <form className="bg-white login-form">
        <div
          className="border border-black w-100 py-3"
          style={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={sonyLogoText} style={{ height: "20px" }} />
        </div>
        <div className="w-100">
          <img
            src={playStationBanner}
            style={{ height: "100px", width: "100%" }}
          />
        </div>
        <p className="px-3 py-2 w-100" style={{ fontSize: "13px" }}>
          Sign in to PlayStation with one of your Sony accounts.{" "}
          <span style={{ color: "blue" }}>
            <a>Learn More</a>
          </span>
        </p>
        <div
          className="w-100 d-flex justify-content-center "
          style={{ position: "relative" }}
        >
          <div className={`email-section ${!isShowEmail ? "d-none" : "w-75"}`}>
            <input
              type="email"
              placeholder="Sign-In ID (Email Address)"
              id="login-email"
              onChange={handleEmailId}
              value={loginData.email}
            />
          </div>
          <div className={`password-section ${isShowEmail ? "" : "show"}`}>
            <input
              type="password"
              placeholder="Password"
              id="login-password"
              onChange={handlePassword}
              value={loginData.password}
            />
          </div>
        </div>
        <div className="w-100 d-flex flex-column align-items-center">
          <button
            className={`login-button border-0 ${isShowEmail ? "" : "d-none"}`}
            onClick={(e) => handleNext(e)}
          >
            Next
          </button>
          <button
            className={`login-button border-0 ${isShowEmail ? "d-none" : ""}`}
            onClick={(e) => handleSubmit(e)}
          >
            Sign In
          </button>

          <div className="text-center mt-3" style={{ fontSize: "12px" }}>
            Haven't Account?
          </div>
          <button
            className="w-75 border text-center p-2 mt-3 bg-white"
            style={{ fontSize: "12px" }}
            onClick={(e)=>{navigate("/sign-up")}}
          >
            Create New Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
