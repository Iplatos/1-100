import React from 'react';
import p from "./Profile.module.css"
import MyPosts from "./MyPosts/PJst/MyPosts";

const Profile = () =>{
   return     <div >
       <div>
           <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'/>
       </div>
       <div> ava + discription</div>
       <MyPosts/>
   </div>;
}

export default Profile