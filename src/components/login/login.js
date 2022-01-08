import "./login.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {

  const func1=()=>{

  }


  return (
      <div className="mainlogin">
     <h2 className="form-title"  >Log In</h2>
<div className="form">
     <div className="input">
        <Box
      component="form"
      sx={{
        
        '& > :not(style)': { m: 1, width: '29ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
       className="field"
        id="outlined-basic" 
        label="Username"
        type="name"
        variant="outlined" />
        <TextField
         className="field"
        id="outlined-basic" 
        label="Password"
        type="password"
        variant="outlined" />
 </Box>
        </div>
        <div className="button">
        <Button  className="field" variant="contained">Login</Button>
        </div>
        </div>

      </div>

  );
}

export default Login;
