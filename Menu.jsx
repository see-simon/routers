import React from 'react'
import {BrowserRouter as Router, Link ,Route,Switch } from "react-router-dom"
import Profile from './Profile'
import About from './About'
import Users from './Userspage'
import Landing from './Home'


const menu =()=>{
    return(
        <>
        <Router>
           <> 
            <nav className = "homeMenu">
                    <li>
                        <Link to ="./">home</Link>  
                    </li>
                    <li>
                        <Link to ="./Userspage">users</Link>  
                    </li>
                    <li>
                        <Link to ="./About">about</Link>  
                    </li>
                    <li>
                        <Link to ="./Profile">profile</Link>  
                    </li> 
                </nav>
            
            <Switch>
                <Route path="/Profile">
                    <Profile/>
                </Route>
                <Route path="/About">
                    <About/>
                 </Route>
                 <Route path="/Userspage">
                    <Users/>
                 </Route>
                 <Route path="/">
                    <Landing/>
                </Route>

            </Switch>
        </>
        </Router>
     </>
    )

}
export default menu
