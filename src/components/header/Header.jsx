import React, { useEffect } from "react";
import  { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
let Header =  (props) => { 
     let pathname = new useLocation().pathname
     pathname = [...pathname]
     pathname.shift()
     pathname = [...pathname].join("")
    console.log(pathname)
    const [tabIndex] = useState(["home","calculator"]);
    const [tabs] = useState(['https://svloex.github.io/Resume/home','https://svloex.github.io/Resume/calculator','empty','empty']);
    useEffect(() => {
         console.log("render")
       
     },[]);
    

    let buttons = tabs.map((tab, index) => {
        console.log(tab===pathname)
            return (
                <li key={index} className={tab === pathname ? 'active' : 'inactive'} ><Link to={(tab)}>{tabIndex[index]}</Link></li>
            )
        })

    return <div>
             {buttons}
           </div>
} 
export default Header