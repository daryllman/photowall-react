//import React, { Component } from 'react'  //No longer need {Component} as functional components are used instead
import React from 'react'


function Title(props){
    return ( <h1 > {props.title } </h1>
        )
}

/*
class Title{
    render(){
        return ( <h1 > {props.title } </h1>
            )
    }
}
*/

export default Title