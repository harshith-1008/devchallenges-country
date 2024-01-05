import React from "react";

export default function Info(){
    return(
        <div className="flex flex-row pb-3 border-b-[0.063rem] border-[#6C727F] text-[#6C727F]">
            <p className=" mr-16">Flag</p>
            <p className="mr-36">Name</p>
            <p className=" mr-28">Population</p>
            <p className="mr-24">Area</p>
            <p className="mr-auto">Region</p>
        </div>
    )
}