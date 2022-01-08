import "./add_student.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

function Add_student() {
  const done= ()=>{
    var name= document.getElementById('name');
    var Fathername= document.getElementById('Fathername');
    var Age= document.getElementById('Age');
    var Rollno= document.getElementById('Rollno');
    var Password= document.getElementById('Password');
    var Dateofbirth= document.getElementById('Dateofbirth');

    
    postdata(name.value, Fathername.value, Age.value, Rollno.value,Password.value, Dateofbirth.value );
    name.value=""
    Fathername.value=""
    Age.value=""
    Rollno.value=""
    Password.value=""
    Dateofbirth.value=""
    // history.push('/get');
  }

  const postdata=async(n,f,a,r,p,d)=>{
    const getres = await axios.post('http://localhost:5000/students',{
      "name":n,
      "Fathername":f,
      "Age":parseInt(a) ,
      "Rollno":r,
      "Password":p,
      "Dateofbirth":d
  })
  console.log(getres.data.name)
  }

  return (
      <div className="mainregister">
     <h2 className="form-title"  >Register Student</h2>
<div className="form">

        <Box
      component="form"
      sx={{
        
        '& > :not(style)': { m: 1, width: '29ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
        id='name'
       className="field"
        // id="outlined-basic" 
        label="Username"
        type="name"
        variant="outlined" />
        <TextField
        id='Fathername'
       className="field"
        // id="outlined-basic" 
        label="Father Name"
        type="name"
        variant="outlined" />
        <TextField
        id='Password'
         className="field"
        // id="outlined-basic" 
        label="Password"
        type="password"
        variant="outlined" />
        <TextField
        id='Age'
         className="field"
        // id="outlined-basic" 
        label="Age"
        type="number"
        variant="outlined" />
        <TextField
        id='Dateofbirth'
         className="field"
        // id="outlined-basic" 
        // label="Date Of Birth"
        type="date"
        variant="outlined" />
        <TextField
         id='Rollno'
         className="field"
        // id="outlined-basic" 
        label="Roll No"
        type="text"
        variant="outlined" />
       
 </Box>
        
        <div className="button">
        <Button  onClick={done} variant="contained">Register</Button>
        </div>
        </div>

      </div>

  );
}

export default Add_student;
