
import "./students.css";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {useEffect,useState} from 'react';
import Button from '@mui/material/Button';

function Students() {

      const [state, setstate] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/students').then((getres)=>{
            setstate(getres.data);
            console.log(getres.data);
        }).catch((e)=>{
            console.log(e)
        })
    },[]);


    function onupdate(id){

      var inp1= prompt("What do you want to update Enter Field")
      var load
      var inp2;
      switch(inp1){
          case "name":
              inp2=prompt("Enter New Name: ")
              load={"name":inp2}
              break;
          case "Fathername":
              inp2=prompt("Enter New Father Name: ")
              load={"Fathername":inp2}
              break;
          case "Age":
              inp2=parseInt(prompt("Enter New Age: "))
              load={"Age":inp2}
              break;
          case "Rollno":
              inp2=prompt("Enter New Rollno: ")
              load={"Rollno":inp2}
              break;
      }
      const gotdata=  {
          "_id":id,
          "edit":load
      }
      // alert(JSON.stringify(gotdata)) ;
      axios({
          method: 'put',
          url: 'http://localhost:5000/students',
          // headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data:gotdata
        }).then((res)=>{
          if (res != null){
          alert("Updated")}
          console.log(res)
      })
      .catch((e)=>alert(e))
  }


    function del(id){
      axios.delete('http://localhost:5000/students',
      {
          data:{
              "_id": id
          },
          
      })
      .then((res)=>{
          if (res != null){
          alert(JSON.stringify(res.data)+"  Deleted")}
          console.log(res)
      })
      .catch((e)=>alert(e))
  }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 100 },
        { field: 'Fathername', headerName: 'Father Name', width: 110 },
        {
          field: 'Age',
          headerName: 'Age',
          type: 'number',
          width: 60,
        },
        {
          field: 'Rollno',
          headerName: 'Roll No',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 110,
        },
          { field: 'action', headerName: 'Action', width: 160, renderCell: (params) => {
            
            return <div><Button className="buts"  onClick={()=>onupdate(params.id)} >Edit</Button> 
             <Button className="buts"  onClick={()=>del(params.id)} >Delete</Button> 
           </div>
            ;}
            ,}
      ];
      
      const rows = state.map(elem => (
        { id: elem._id, Fathername: elem.Fathername, name: elem.name, Age: elem.Age,Rollno:elem.Rollno} 
      )) 
      

  return (
      <div className="mainadd">
      <h1 className="heading"> Students </h1>
            <div className='table' >
      <DataGrid
        rows={rows}
        columns={columns}
          pageSize={6}
        rowsPerPageOptions={[5]}
      
      />
    </div>

      </div>

  )}

  
export default Students;