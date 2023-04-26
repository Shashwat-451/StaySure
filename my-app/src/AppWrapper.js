import { Redirect } from 'react-router-dom'
import Login from './Components/login/Login';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
class AppWrapper extends Component{
    render(){
  
    if(user && user.id)
    {
        return <Redirect to="/" />
    }
     
  
     return(
       <div> 
         <Route path="/login" element={<Login/>}/>
       </div>
     );
    }
  }

  export default AppWrapper;