import React, { useContext } from "react";
import { Button } from "@mui/material";
import { multiStepContext } from "../StepContext";
import { TextField, Select, MenuItem } from "@mui/material";
import Loan from "./Loan";

const Customer = () => {
  const { currentStep ,setStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <><Loan/> 
    <form onSubmit={() => setStep(3)}>
      <h3 className="title">Personal Details</h3>
      <div className="form">
        <div className="form-body">
          <div className="userdetails" id="firstName">
            <label className="form__label">First Name* </label>
            <TextField
              className="form__input"
              variant="standard"
              type="text"
              value={userData["firstname"]}
              onChange={(e) =>
                setUserData({ ...userData, firstname: e.target.value })
              }
              id="firstName"
              placeholder="First Name"
              required
            />
          </div>

          <div className="userdetails" id="middleName">
            <label className="form__label">Middle Name </label>
            <TextField
              className="form__input"
              variant="standard"
              type="text"
              value={userData["middlename"]}
              onChange={(e) =>
                setUserData({ ...userData, middlename: e.target.value })
              }
              id="middleName"
              placeholder="Middle Name"
            />
          </div>

          <div className="userdetails" id="lastName">
            <label className="form__label">Last Name* </label>
            <TextField
              className="form__input"
              variant="standard"
              type="text"
              value={userData["lastname"]}
              onChange={(e) =>
                setUserData({ ...userData, lastname: e.target.value })
              }
              id="lastName"
              placeholder="Last Name"
              required
            />
          </div>

          <div className="gender" id="genderid">
            <label className="form__label"> Gender* </label> <br />
            <input
              type="radio"
              id="male"
              name="gender"
              value={userData["value"]}
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
              required
            />
            <label for="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value={userData["female"]}
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
            />
            <label for="female">Female</label>
            <input
              type="radio"
              id="others"
              name="gender"
              value={userData["others"]}
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
            />
            <label for="others">Other</label>
          </div>

          <div className="userdetails" id="dob">
            <label className="form__label">Date of birth* </label>
            <TextField
              type="date"
              variant="standard"
              value={userData["dob"]}
              onChange={(e) =>
                setUserData({ ...userData, dob: e.target.value })
              }
              required
            />
          </div>

          <div className="userdetails" id="email">
            <label className="form__label">Email*</label>
            <TextField
              type="email"
              className="form__input"
              variant="standard"
              value={userData["email"]}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              placeholder="@*****.com"
              required
            />
          </div>

          <div className="userdetails" id="mobile">
            <label className="form__label">Mobile Number* </label>
            <TextField
              className="form__input"
              variant="standard"
              type="tel"
              value={userData["mobile"]}
              onChange={(e) =>
                (setUserData({ ...userData, mobile: e.target.value })) && (e.target.value.length <= 10)
              }
              placeholder="07********"
              size="11"
              minlength="11"
              maxlength="11"
              required
            />
          </div>

          <div className="userdetails" id="relationship">
            <label className="form__label">Relationship Status* </label>
            <Select
              value={userData["relationship"]}
              variant="standard"
              onChange={(e) =>
                setUserData({ ...userData, relationship: e.target.value })
              }
              required
            >
              <MenuItem value="married">Married</MenuItem>
              <MenuItem value="livin">Living with partner</MenuItem>
              <MenuItem value="single">Single</MenuItem>
              <MenuItem value="seperated">Seperated</MenuItem>
              <MenuItem value="divorced">Divorced</MenuItem>
              <MenuItem value="widowed">Widowed</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </div>
          <div className="userdetails" id="dependents">
            <label className="form__label">Number Of Dependents* </label>
            <TextField
              className="form__input"
              type="number"
              variant="standard"
              value={userData["dependents"]}
              onChange={(e) =>
                (e.target.value.length <= 1) && 
                setUserData({ ...userData, dependents: e.target.value })
              }
              placeholder="0"
              required
            />
          </div>
        </div>
        
        {
          currentStep === 2 &&
          <Button 
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "rgb(255, 0, 0)",
            color: "#FFFFFF",
            padding: "11px 0px",
            maxWidth: "200px",
            maxHeight: "30px",
            minWidth: "80px",
            minHeight: "40px",
            margin: "20px",
          }}
          >
            Next
          </Button>
        }   

      </div>
    </form>
    </>
  );
};

export default Customer;
