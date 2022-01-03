import "./login.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';

function Login() {

  return (
      <div className="mainlogin">
     <h2 className="form-title"  style={{color:'white'}}  >Log In</h2>

     <div className="input">
       
<TextField 
className="input"
          // id="outlined-password-input"
          label="Email"
          type="email"
          autoComplete="current-email"
        />
     <TextField
          // id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        </div>
        <div className="button">
        <Button variant="contained">Login</Button>
        <Button variant="contained">Signup</Button>
        </div>

      </div>

  );
}

export default Login;
