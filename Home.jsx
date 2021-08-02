import React, {Component} from 'react'
import Menu from './Menu'
import Profile from './Profile'

export default class  Home extends Component{


    render(){

        return(
            <>
           <Menu/>
           <Profile/>
           </>
        )
    }

}