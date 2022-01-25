import "./landingpage_admin.css";
import group from '../../images/group.png'
import teacher from '../../images/teacher.png'
import course from '../../images/course.png'
import fee from '../../images/fee.png'

function Landingpage() {

      return (
        <div className="main">
          <div className="containers">
            <div  className="cont1" style={{backgroundColor:"#7dbef7"}}>
             <a  onClick={()=> window.location.href= "/login"}> 
              <img src={group} alt="image" className='topimage' /> </a>
            <h2  className="contname">Students</h2> 
            </div>
            <div className="cont1" style={{backgroundColor:"#50974e"}}>
            <img src={teacher} alt="image" className='topimage' />
              <h2 className="contname">Teachers</h2> 
              </div>
            <div className="cont1" style={{backgroundColor:"#e7ae53"}}>
            <img src={course} alt="image" className='topimage' />
              <h2 className="contname">Courses</h2>
               </div>
            <div className="cont1" style={{backgroundColor:"#d3524b"}}>
            <img src={fee} alt="image" className='topimage' />
              <h2 className="contname">Fees</h2> 
            </div>
          </div>
          </div>
          )
        }

export default Landingpage;


