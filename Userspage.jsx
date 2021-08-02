import React, {Component} from "react";
//import React from "react";

export default class Users extends Component {

    state = {

        arrList : [
                {
                    surname: 'thobejane',
                    _name:'simon',
                    age:51,
                    location:'madisha ditoro',
                },
                {
                    surname: 'Kekana',
                    _name:'mpho',
                    age:15,
                    location:'polokwane'
                },
                {
                    surname: 'leolo',
                    _name:'tumelo',
                    age:20,
                    location:'moletlane'
                }
            ]
       

    }

    

    render(){

        return (
            <div classInfor = "simon">
                 <h1>Information </h1>
                 <h3>surnamr  name age location </h3>
                 <h5>========================================= </h5>
                 <h5>{this.state.arrList.map(el=> <li>{el.surname +"    :   "+ el._name +"    :   "+ el.location}</li>)} </h5>
                 <h5>========================================= </h5>
                 
        
            </div>
        )
    }

    getSurname(age)
    {
      
         let message = '';

        if (age >= 18) {

           return message = "You are old enough to code"
           
            
        }
        else{
           return message = "You are not old enough to code"
        }

    }

   
}