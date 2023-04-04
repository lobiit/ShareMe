import React from "react";
import logo from '../assets/logo.png';
import {Link, NavLink} from "react-router-dom";
import {RiHomeFill} from "react-icons/ri";
import {categories} from "../utils/data";
const isNotActiveStyle = "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle = "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

// const categories = [
//     {name: 'Animals'},
//     {name: 'Wallpapers'},
//     {name: 'Photography'},
//     {name: 'Gaming'},
//     {name: 'Coding'},
//     {name: 'Other'}
//     ]
const SideBar= ({closeToggle})=>{
    const handleCloseSideBar = () => {
        if(closeToggle) closeToggle(false);
    }
    return(
        <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
            <div className="flex flex-col">
                <Link to="/" className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
                onClick={handleCloseSideBar}>
                    <img src={logo} alt="logo" className="w-full"/>
                </Link>
                <div className="flex flex-col gap-5">
                    <NavLink to="/" className={({isActive})=> isActive? isActiveStyle: isNotActiveStyle}
                    onClick={handleCloseSideBar}>
                        <RiHomeFill/> Home
                    </NavLink>
                    <h3 className="mt-3 px-5 text-base 2xl:text-xl">
                        Discover categories
                    </h3>
                    {categories.slice(0, categories.length - 1).map((category) => (
                        <NavLink
                            to={`/category/${category.name}`}
                            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
                            onClick={handleCloseSideBar}
                            key={category.name}
                        >
                            <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" />
                            {category.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}
export  default  SideBar;
