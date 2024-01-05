import React from "react";

export default function Filters(props){

    return(
        <div className="flex flex-col text-white">
            <div className="flex flex-col mb-8">
            <label htmlFor="sort" className="text-[#6C727F] mb-2">Sort by</label>
            <select value={props.selectedOption} onChange={(e) => props.onClick(e.target.value)} id="sort" name="sort" className="w-full text-white bg-[#1B1D1F] border-[0.063rem] border-[#6C727F] appearance-none pl-2 font-thin focus:outline-none">
                <option value="population">Population</option>
                <option value="area">Area</option>
            </select>
            </div>

            <div className="flex flex-col mb-8">
                <h1 className="mb-2">Region</h1>
                    <div className="flex flex-row flex-wrap">
                        <p className="mr-5  mb-1">Americas</p>
                        <p className="mr-5 mb-1">Antartica</p>
                        <p className="mr-5 mb-1">Africa</p>
                        <p className="mr-5 mb-1">Asia</p>
                        <p className="mr-5 mb-1">Europe</p>
                        <p className="mr-4 mb-1">Ocenia</p>
                    </div>  
            </div>

            <div className="flex flex-col text-white text-sm">
                <h1 className="mb-2">Status</h1>
                <label className="mb-1 flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4"/>
                    Member of the United Nations
                </label>
                <label className="mb-1 flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4"/>
                    Independent
                </label>
            </div>
        </div>
    )
}