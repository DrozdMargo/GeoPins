import React, { useContext } from "react";
import { GraphQLClient } from "graphql-request";
import { GoogleLogin } from "react-google-login";
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

import Context from '../../context';

const ME_QUERY = `{
  me {
    _id
    name
    email
  }
}`;

const Login = ({ classes }) => {
  
  const { dispatch } = useContext(Context);
  
  const onSuccess = async googleUser => {
    const idToken = googleUser.getAuthResponse().id_token;
    const client = new GraphQLClient('http://localhost:4000/graphql', {
      headers: { authorization: idToken }
    });
    const data = await client.request(ME_QUERY);
    
    dispatch({type: 'LOGIN_USER', payload: data.me});
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
