//this component displays the number of contires w.r.t the filters --

import React from "react";

export default function Navbar(props){
    return(
        <div className="flex flex-row justify-between items-center">
            <p className="text-[#6C727F] font-semibold">Found {props.noOfCountries} countries</p>
            <div class="relative">
                <input type="text" className="py-2 pl-10 pr-4 rounded-md w-80 text-sm bg-[#282B30] h-10 text-[#6C727F] placeholder:text-[#6C727F]" placeholder="Search by Name, Region, Subregion"/>
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7" stroke="#6C727F" stroke-width="2"/><path d="M20 20L17 17" stroke="#6C727F" stroke-width="2" stroke-linecap="round"/></svg>
                </div>
            </div>
        </div>
    )
}