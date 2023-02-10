import React, { useContext } from "react";
import { Button, TextField, Select, MenuItem } from "@mui/material";
import { multiStepContext } from "../StepContext";
import Residence from "./Residence";

const Finance = () => {
  const { currentStep , setStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <>
     <Residence />
     <h3 className="title">Financial Details</h3>
    <form onSubmit={() => setStep(5)}>
      <div className="fin-container">
      <div className="userdetails" id="income">
        <label className="form__label"> Monthly Income* </label>
        <TextField
          className="form__input"
          type="number"
          variant="standard"
          value={userData["income"]}
          onChange={(e) => 
            (e.target.value.length <= 9) && 
            setUserData({ ...userData, income: e.target.value })}
          placeholder="$0"
          label="Dollars$"
          required
        />
      </div>
      <div className="userdetails" id="pay-freq">
        <label className="form__label">Pay Frequency* </label>
        <Select
          value={userData["pay-frequency"]}
          variant="standard"
          onChange={(e) =>
            setUserData({ ...userData, "pay-frequency": e.target.value })
          }
          required
        >
          <MenuItem value="monthy">Monthly</MenuItem>
          <MenuItem value="four weekly">Four Weekly</MenuItem>
          <MenuItem value="fortnightly">Fortnightly</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
        </Select>
      </div>

      <div className="userdetails" id="paydate">
        <label className="form__label">Next Pay Date* </label>
        <TextField
          type="date"
          name="paydate"
          variant="standard"
          value={userData["paydate"]}
          onChange={(e) =>
            setUserData({ ...userData, paydate: e.target.value })
          }
          required
        />
      </div>

      <div className="userdetails" id="rent">
        <label className="form__label"> Monthly Rent / Mortage Payment* </label>
        <TextField
          className="form__input"
          type="number"
          variant="standard"
          value={userData["rent"]}
          onChange={(e) => 
            (e.target.value.length <= 5) && 
            setUserData({ ...userData, rent: e.target.value })}
          placeholder="$0"
          label="Dollars$"
          required
        />
      </div>

      <div className="userdetails" id="employment">
        <label className="form__label"> Employment Status* </label>
        <Select
          value={userData["employment"]}
          variant="standard"
          onChange={(e) =>
            setUserData({ ...userData, employment: e.target.value })
          }
          required
        >
          <MenuItem value="emplyed full time">Employed Full Time</MenuItem>
          <MenuItem value="self employed">Self Employed</MenuItem>
          <MenuItem value="onbenefits">On-Benefits</MenuItem>
          <MenuItem value="unemployed">Unemployed</MenuItem>
          <MenuItem value="retired">Retired</MenuItem>
          <MenuItem value="homemaker">Home-Maker</MenuItem>
          <MenuItem value="student">Student</MenuItem>
          <MenuItem value="employed part time">Employed Part-Time</MenuItem>
        </Select>
      </div>
      <div className="userdetails" id="occupation">
        <label className="form__label"> Occupation* </label>
        <Select
          value={userData["occupation"]}
          variant="standard"
          onChange={(e) =>
            setUserData({ ...userData, occupation: e.target.value })
          }
          required
        >
          <MenuItem value="managerial">Managerial</MenuItem>
          <MenuItem value="professional">Professional</MenuItem>
          <MenuItem value="semi-professional"> Semi-Professional/Technical</MenuItem>
          <MenuItem value="adminstrational">Clerical/Adminstrational</MenuItem>
          <MenuItem value="skilled trade">Skilled Trade</MenuItem>
          <MenuItem value="care/leisure/service">Care/Leisure/Service</MenuItem>
          <MenuItem value="sales/customer service">
            Sales/Customer Service
          </MenuItem>
          <MenuItem value="process/machine operative">
            Process/Machine Operative
          </MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </div>

      <div className="userdetails" id="accnumber">
        <label className="form__label"> Bank Account Number* </label>
        <TextField
          className="form__input"
          type="number"
          variant="standard"
          value={userData["accnumber"]}
          onChange={(e) =>
            (e.target.value.length <=10 ) && 
            setUserData({ ...userData, accnumber: e.target.value })
          }
          placeholder="8947949615"
          size="10"
          minLength="10"
          maxLenght="10"
          required
        />
      </div>

      <div className="userdetails" id="sortcode">
        <label className="form__label"> Sort Code </label>
        <TextField
          className="form__input"
          type="number"
          variant="standard"
          value={userData["sortcode"]}
          onChange={(e) =>
            (e.target.value.length <=5 ) && 
            setUserData({ ...userData, sortcode: e.target.value })
          }
          placeholder="16546"
          size="5"
          minLength="5"
          maxLenght="5"
          required
        />
      </div>
      </div>
      {currentStep === 4 &&
      <Button
        variant="contained"
        type="submit"
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
    </form>
    </>
  );
};

export default Finance;
