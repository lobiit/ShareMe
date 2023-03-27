import React, {useState} from "react";
import logo from '../assets/logo.png';
import SideBar from "./Sidebar";
import {HiMenu} from "react-icons/hi";
import {Link} from "react-router-dom";
import {AiFillCloseCircle} from "react-icons/ai";
function  Home(){
    const [toggleSidebar, setToggleSidebar] = useState(false)
    return(
        <div  className="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out">
            <div className="hidden md:flex h-screen flex-initial">
                <SideBar/>
            </div>
            <div className="flex md:hidden flex-row">
                <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)}/>
                <Link to='/'>
                    <img src={logo} alt='logo' className='w-28'/>
                </Link>
            </div>
            {toggleSidebar && (
                <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
                    <div className="absolute w-full flex justify-end items-center p-2">
                        <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={()=> setToggleSidebar(false)}/>
                    </div>
                    <SideBar/>
                </div>
            )}
        </div>
    );
}
export  default  Home;
