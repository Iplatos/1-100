import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

export  const Header=()=>{
   return <header className={s.header}>
       <NavLink to={"/profile" }><img
           src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png"/></NavLink>
    </header>
}
