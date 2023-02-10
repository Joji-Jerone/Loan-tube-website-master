import React , {useContext} from 'react';
import './App.css';
import './Components/Customer'
import Customer from './Components/Customer';
import Residence from './Components/Residence';
import Finance from './Components/Finance';
import Password from './Components/Password';
import Agreement from './Components/Agreement';
import Loan from './Components/Loan';
import { Stepper , StepLabel , Step } from "@mui/material"
import { multiStepContext } from './StepContext';
import { Box } from '@mui/system';
import "./Loan Tube logo.png"
import { styled } from "@mui/material/styles";
import StepConnector, {stepConnectorClasses,} from "@mui/material/StepConnector";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KeyIcon from "@mui/icons-material/Key";
import PolicyIcon from "@mui/icons-material/Policy";
import PropTypes from "prop-types";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <AccountBalanceIcon />,
    2: <PersonIcon />,
    3: <HomeIcon />,
    4: <AttachMoneyIcon />,
    5: <KeyIcon />,
    6: <PolicyIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};



function App() {
  const {currentStep} = useContext(multiStepContext)
  function showStep(step) {
    switch(step) {
      case 1 : return <Loan />
      case 2 : return <Customer />
      case 3 : return <Residence />
      case 4 : return <Finance />
      case 5 : return <Password />
      case 6 : return <Agreement />

      default : return <h1>Loan Tube Page Loading</h1>
    }
  }

  const steps = [
    "Loan Details",
    "Personal Details",
    "Residential Details",
    "Financial Details",
    "Password Details",
    "Policy Aggrement",
  ];

  return (
    <div className="App">
      <header className="App-header">
      <img src={require('./Loan Tube logo.png')} alt='LoanTube Logo' width={'200px'} /> 
        </header>
      <div className='wrapper'>
        <div className='wrapper-fluid'>
      <div className='center-stepper'>
        <Box>
        <Stepper
          alternativeLabel
          activeStep={currentStep - 1}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      </div>
      { showStep(currentStep)}
      
    </div>
    </div>
    </div>
  );
}

export default App;
