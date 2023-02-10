import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import { Button, TextField } from "@mui/material";
import Finance from "./Finance";

const Password = () => {
  const { currentStep , setStep, userData, setUserData } = useContext(multiStepContext);
  return (
     <><Finance />
    <form onSubmit={() => setStep(6)}>
      <h3 className="title">Create Your Password</h3>

      <div className="password">
        Before we find a loan for you, let’s create a password <br />
        This means we can save your loan search history for you so you can
        access it anytime. <br />
        Create a memorable password <br />
        Should be minimum 8 characters <br />
        Should contain at least 1 number <br />
        <div className="userdetails">
          <label for="pwd">Password:</label>
          <TextField 
          type="password" id="pwd" name="pwd" 
          onChange={(e) => 
            setUserData({ ...userData, password : e.target.value }) && (e.target.value.length >=8 ) 
          }required />
        </div>
      </div>

      {currentStep === 5 && 
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

export default Password;
