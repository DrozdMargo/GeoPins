import React from "react";
import { GoogleLogin } from "react-google-login";
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

require('dotenv').config();

const Login = ({ classes }) => {
  const onSuccess = googleUser => {
    const idToken = googleUser.getAuthResponse().id_token;
    
  };
  
  return (
    <GoogleLogin clientId="484748405974-drdqqdbioov1q721q3dmeurfmbqdq0nb.apps.googleusercontent.com"
                 onSuccess={onSuccess}
                 isSignedIn={true}
    />
)
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
