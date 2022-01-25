import { BrowserRouter, Route, Switch} from "react-router-dom";
import Landingpage from "./components/admin/landingpage_admin";
import Login from "./components/login/login";
import Top from "./components/top and side bar/topbar"
import Sidebar from "./components/top and side bar/sidebar"
import Students from "./components/admin/Students/students"
import AddStudent from "./components/admin/add student/add_student"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Top/>
    <Sidebar/>

    <Switch>
      <Route exact path='/' component={Landingpage}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/student' component={Students}/>
      <Route exact path='/addstudent' component={AddStudent}/>
      
      </Switch>
      
    </BrowserRouter>

  );
}

export default App;
