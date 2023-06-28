// src/pages/SignupPage.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/Signupaction/Signupslice";
import { RootState } from "../../redux/userActions/store";
import sonyLogoText from "../../assets/images/png/pngimg.com - sony_logo_PNG5.png";
import "./Signup.css";
import { BsFillCircleFill } from "react-icons/bs";
import dates from "./date.json";

function Signup() {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [countryName, setCountryName] = useState<string>(
    dates.languages[0].countryName
  );
  const [month, setMonth] = useState<string>(dates.months[0]);
  const [date, setDate] = useState<number>(dates.dates[0]);
  const [year, setYear] = useState<number>(dates.years[0]);
  const [language, setLanguage] = useState<string>(dates.languages[0].language);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(3);
  const registeredUsers = useSelector(
    (state: RootState) => state.registeredUsers.usersData
  );
  const handleSignup = () => {
    dispatch(addUser({ name, email, password }));
    // Clear the form after submitting
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleLanguage = (event: any) => {
    const selectedValue = event.target.value;
    const selectedCountry = dates.languages.find(
      (country) => country.countryName === selectedValue
    );

    if (selectedCountry) {
      const selectedLanguage = selectedCountry.language;
      console.log("Selected Country:", selectedValue);
      console.log("Selected Language:", selectedLanguage);
      setLanguage(selectedLanguage);
      setCountryName(selectedValue);
    }
  };

  console.log(month, date, year);

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <form className="signup-form border">
        <div
          className="border border-black w-100 py-3"
          style={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={sonyLogoText} style={{ height: "17px", margin: "3px 0" }} />
        </div>
        <div
          className="w-100 d-flex flex-column align-items-center"
          style={{ backgroundColor: "#f0f0f0" }}
        >
          <div className="pt-3 pb-2" style={{ fontSize: "20px" }}>
            Create an Account
          </div>
          <div className="mb-2">
            <BsFillCircleFill
              className="me-2"
              style={{ color: "#0A7FE2", fontSize: "13px" }}
            />
            <BsFillCircleFill
              className="me-2"
              style={{ color: "#B4CCDB", fontSize: "9px" }}
            />
            <BsFillCircleFill
              className="me-2"
              style={{ color: "#B4CCDB", fontSize: "9px" }}
            />
            <BsFillCircleFill
              className="me-2"
              style={{ color: "#B4CCDB", fontSize: "9px" }}
            />
            <BsFillCircleFill
              className="me-2"
              style={{ color: "#B4CCDB", fontSize: "9px" }}
            />
            <BsFillCircleFill style={{ color: "#B4CCDB", fontSize: "9px" }} />
          </div>
        </div>

        <div
          className={`language-section ${
            currentPageNumber === 1 ? "show px-5 py-4 " : "hide"
          }`}
        >
          <div>
            <p>
              Your home location is used to verify your identity when you
              contact us. Other players won't be able to see it.
            </p>
            <div style={{ fontSize: "14px" }} className="mb-2">
              Country/Region
            </div>

            <select
              className="p-2 w-100"
              value={countryName}
              style={{ fontSize: "14px" }}
              onChange={(e) => handleLanguage(e)}
            >
              {dates.languages.map((country, index) => (
                <option key={index} value={country.countryName}>
                  {country.countryName}
                </option>
              ))}
            </select>

            <div className="mt-3" style={{ fontSize: "14px" }}>
              Language
            </div>
            <div
              className="p-2 my-1"
              style={{ backgroundColor: "#f0f0f0", fontSize: "14px" }}
            >
              {language}
            </div>
            <p
              className="mt-3"
              style={{ fontSize: "13px", color: "#0000008c" }}
            >
              Items you need to enter vary by the country or region you select.
            </p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="border py-2 px-4" style={{ fontSize: "13px" }}>
              Back
            </div>
            <div
              className="next-button py-2 ps-3 pe-3"
              onClick={() => {
                if (language != "") {
                  setCurrentPageNumber(2);
                }
              }}
            >
              Next
            </div>
          </div>
        </div>
        <div
          className={`date-section ${
            currentPageNumber === 2 ? "show px-5 py-4 " : "hide"
          }`}
        >
          <p style={{ fontSize: "15px" }}>
            Make sure you enter your date of birth correctly. It may be
            necessary later for security purposes. Other players won't be able
            to see it.
          </p>
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <select
                className="px-2 py-2"
                style={{
                  width: "30%",
                  backgroundPosition: "85%",
                  fontSize: "14px",
                }}
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
              >
                {dates.months.map((month) => (
                  <option value={month} style={{ fontSize: "14px" }}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                className="px-2 py-2"
                style={{
                  width: "30%",
                  backgroundPosition: "85%",
                  fontSize: "14px",
                }}
                value={date}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setDate(value);
                }}
              >
                {dates.dates.map((date) => (
                  <option value={date} style={{ fontSize: "14px" }}>
                    {date}
                  </option>
                ))}
              </select>
              <select
                className="px-2 py-2"
                style={{
                  width: "30%",
                  backgroundPosition: "85%",
                  fontSize: "14px",
                }}
                value={year}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setYear(value);
                }}
              >
                {dates.years.map((year) => (
                  <option value={year} style={{ fontSize: "14px" }}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <hr style={{ marginTop: "8%" }} />
            <p
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                paddingTop: "2%",
                paddingBottom: "2%",
              }}
            >
              About your account information
            </p>
            <p style={{ fontSize: "13px" }}>
              The information you use to create your account needs to be
              accurate. It will be used to manage and secure your account, and
              for when you make purchases.
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div
              className="border py-2 px-4"
              style={{ fontSize: "13px" }}
              onClick={(e) => {
                setCurrentPageNumber(1);
              }}
            >
              Back
            </div>
            <div className="next-button py-2 ps-3 pe-3">Next</div>
          </div>
        </div>

        <div
          className={`px-5 py-4 date-section ${
            currentPageNumber === 3 ? "show px-5 py-4 " : "hide"
          }`}
        >
          <div>
            <p style={{ fontSize: "14px" }}>
              It's important that your privacy is protected while enjoying the
              many features that are available to you. Here's a quick guide that
              explains how your privacy is protected.
            </p>

            <div style={{fontSize:"13px", border:"1px solid #c8c8c8", width:"60%", textAlign:"center", padding:"1.5%", margin:"25px auto"}}>Learn About Privacy</div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div
              className="border py-2 px-4"
              style={{ fontSize: "13px" }}
              onClick={(e) => {
                setCurrentPageNumber(2);
              }}
            >
              Back
            </div>
            <div className="next-button py-2 ps-3 pe-3">Next</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
