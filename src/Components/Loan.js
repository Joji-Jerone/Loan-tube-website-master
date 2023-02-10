import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { multiStepContext } from "../StepContext";
import { Select, TextField, MenuItem } from "@mui/material";

const Loan = () => {
  const { currentStep ,setStep, userData, setUserData } = useContext(multiStepContext);


  return (
    <form onSubmit={() => setStep(2)}>
      <h3 className="title"> Loan Details </h3>
      <div className="container">
        <div className="userdetails" id="amount">
          <label className="form__label" for="loan amount">
            Loan Amount*
          </label>
          <TextField
            className="form__label"
            variant="standard"
            type="number"
            required
            value={userData["amount"]}
            onChange={(e) => (e.target.value.length <= 20) && setUserData({ ...userData, amount: e.target.value })}
            placeholder="$10000" 
          />
        </div>

        <div className="userdetails" id="frequency">
          <label className="form__label">Loan Term* </label>
          <Select
            value={userData["frequency"]}
            variant="standard"
            required
            onChange={(e) => (e.target.value > 0) &&
              setUserData({ ...userData, frequency: e.target.value })
            }
            autoWidth
          >
            <MenuItem value="12 months">12 Months</MenuItem>
            <MenuItem value="18 months">18 Months</MenuItem>
            <MenuItem value="2 years">2 years</MenuItem>
            <MenuItem value="3 years">3 years</MenuItem>
            <MenuItem value="4 years">4 years</MenuItem>
            <MenuItem value="5 years">5 years</MenuItem>
            <MenuItem value="6 years">6 years</MenuItem>
            <MenuItem value="7 years">7 years</MenuItem>
            <MenuItem value="8 years">8 years</MenuItem>
            <MenuItem value="10 years">10 years</MenuItem>
            <MenuItem value="12 years">12 years</MenuItem>
            <MenuItem value="15 years">15 years</MenuItem>
            <MenuItem value="20 years">20 years</MenuItem>
          </Select>
        </div>

        <div className="userdetails" id="loanpurpose">
          <label className="form__label">Select Your Loan Purpose* : </label>
            <input
              type="radio"
              id="holiday"
              name="loan"
              value={userData["holiday"]}
              onChange={(e) =>
                setUserData({ ...userData, loanpurpose: e.target.value })
              }
              required
            />
            <label className= "label" htmlFor="holiday">Holiday</label>
            <input
              type="radio"
              id="car"
              name="loan"
              value={userData["car"]}
              onChange={(e) =>
                setUserData({ ...userData, loanpurpose: e.target.value })
              }
            />
            <label className= "label" htmlFor="car">Car</label>
            <input
              type="radio"
              id="debt"
              name="loan"
              value={userData["debt"]}
              onChange={(e) =>
                setUserData({ ...userData, loanpurpose: e.target.value })
              }
            />
            <label className= "label" htmlFor="debt">Debt Consolidation</label>
            <input
              type="radio"
              id="home"
              name="loan"
              value={userData["home"]}
              onChange={(e) =>
                setUserData({ ...userData, loanpurpose: e.target.value })
              }
            />
            <label className= "label" htmlFor="home">Home  Improvement</label>
            <input
              type="radio"
              id="wedding"
              name="loan"
              value={userData["wedding"]}
              onChange={(e) =>
                setUserData({ ...userData, loanpurpose: e.target.value })
              }
            />
            <label className= "label" htmlFor="wedding">Wedding</label>
            <input
              type="radio"
              id="other"
              name="loan"
              value={userData["other"]}
              onChange={(e) =>
                setUserData({ ...userData, loanpurpose: e.target.value })
              }
            />
            <label className= "label" htmlFor="other">Other</label>
        </div>
      </div>
      { 
      currentStep === 1 &&
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
    </form>
  );
};

export default Loan;
