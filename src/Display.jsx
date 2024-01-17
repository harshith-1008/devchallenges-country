//actual code which displays the countries --
import React from "react";

export default function Display(props){
    return(
        <div className="flex flex-row mt-4 justify-items-center items-center text-[#D2D5DA]">
            <div className="w-14 h-8 mr-10"><img src={props.img} className="rounded-md w-14 h-[2rem]"></img></div>
            <div className=" w-[11.5rem] pr-3"><p>{props.name}</p></div>
            <div className="w-[11.75rem]"><p>{props.population}</p></div>
            <div className="w-[8rem]"><p>{props.area}</p></div>
            <div className="w-auto"><p>{props.region}</p></div>
        </div>
    )
}