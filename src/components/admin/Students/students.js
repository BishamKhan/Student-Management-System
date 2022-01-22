
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

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'Fathername', headerName: 'Father Name', width: 130 },
        {
          field: 'Age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'Rollno',
          headerName: 'Roll No',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 150,
        },
        
        { field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
          return <Button >Delete</Button>  
          ;}
          ,},
          { field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
            return <Button >Edit</Button> 
            
            
            ;}
            ,}
      ];
      
      const rows = [
        { id: 1, Fathername: 'Snow', name: 'Jon', Age: 35,Rollno:"2020-se-227"},
        { id: 2, Fathername: 'Lannister', name: 'Cersei', Age: 42,Rollno:"2020-se-230" },
        { id: 3, Fathername: 'Lannister', name: 'Jaime', Age: 45 ,Rollno:"2020-se-231"},
        { id: 4, Fathername: 'Stark', name: 'Arya', Age: 16 ,Rollno:"2020-se-236"},
        { id: 5, Fathername: 'Targaryen', name: 'Daenerys', Age: 20 ,Rollno:"2020-se-239"},
        { id: 6, Fathername: 'Melisandre', name: 'Zaid', Age: 150 ,Rollno:"2020-se-193"},
        { id: 7, Fathername: 'Clifford', name: 'Ferrara', Age: 44 ,Rollno:"2020-se-215"},
        { id: 8, Fathername: 'Frances', name: 'Rossini', Age: 36 ,Rollno:"2020-se-191"},
        { id: 9, Fathername: 'Roxie', name: 'Harvey', Age: 65 ,Rollno:"2020-se-197"},
        

        // { <Button  className="field" variant="contained">Login</Button>}
      ];
      

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





//  {
//     field: "action",
//     headerName: "Action",
//     sortable: false,
//     renderCell: (params) => {
//       const onClick = (e) => {
//         e.stopPropagation(); // don't select this row after clicking

//         const api: GridApi = params.api;
//         const thisRow: Record<string, GridCellValue> = {};

//         api
//           .getAllColumns()
//           .filter((c) => c.field !== "__check__" && !!c)
//           .forEach(
//             (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
//           );

//         return alert(JSON.stringify(thisRow, null, 4));
//       };

//       return <Button onClick={onClick}>Click</Button>;
//     }


  
export default Students;