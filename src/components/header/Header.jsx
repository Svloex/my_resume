import React, { useEffect } from "react";
import  { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
let Header =  (props) => {    
    let pathname = new useLocation().pathname
    console.log(pathname)
    pathname = [...pathname]
    pathname.shift()
    pathname = [...pathname].join("")
    console.log(pathname)
    const [tabIndex] = useState(["home","calculator"]);
    const [tabs] = useState(['my_resume/home','my_resume/calculator']);
    useEffect(() => {
         console.log("render")
     },[]);
     let ff = useLocation().pathname
    let buttons = tabs.map((tab, index) => {
        console.log(tab,pathname,new useLocation().pathname==='/')
            return (
                <li key={index} className={ ff === "/" ?  (pathname = "my_resume/home") : tab === pathname,
                tab === pathname ? 'active' : 'inactive'} >
                    <Link to={(tab)}>
                        {tabIndex[index]}
                    </Link>
                </li>
            )
        })
    return <div>
             {buttons}
           </div>
} 
export default Header