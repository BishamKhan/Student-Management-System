
import "./top&side.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Top() {

      return (

          <div className="top">
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#192b3e'}}>
        <Toolbar>
   
          <Typography onClick={()=> window.location.href= "/"}  variant="h6" component="div" sx={{ flexGrow: 1,cursor:"pointer" }}>
            Student Management School
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Button className="buts" color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
          </div>

          )
        }
export default Top;


