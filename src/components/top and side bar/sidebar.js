
import "./sidebar.css";
import AddStudent from "../admin/add student/add_student"
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';


function Sidebar() {

    return(
        <div className="side">
        <div className="prof">
        <Stack direction="row" spacing={2}>
          <Avatar src="/broken-image.jpg" style={{marginTop:'5px', marginLeft:'5px',marginBottom:'10px'}} />
          <h4 style={{marginTop:'15px', marginLeft:'10px',color:"white"}}>Admin</h4>
          </Stack>
      </div>

       <div >
        <Stack direction="row" spacing={2}>
  <Paper>
    <MenuList className="menu" >
      <MenuItem className="menuitem" onClick={()=> window.location.href= "/login"} style={{ fontWeight:"bold"}}>Profile</MenuItem>
      <MenuItem className="menuitem"  onClick={()=> window.location.href= "/addstudent"}>Add Students</MenuItem>
      <MenuItem className="menuitem" onClick={()=> window.location.href= "/student"}>Students</MenuItem>
      <MenuItem className="menuitem">Subjects</MenuItem>
      <MenuItem className="menuitem">Announcements</MenuItem>
      <MenuItem className="menuitem">Result</MenuItem>
      <MenuItem className="menuitem">Attendance</MenuItem>
      <MenuItem className="menuitem"> About </MenuItem>
      <MenuItem className="menuitem">Logout</MenuItem>
      
    </MenuList>
  </Paper>  
</Stack>
</div>
</div> 

)
}
export default Sidebar;