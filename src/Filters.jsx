import React from "react";

export default function Filters(props){

    return(
        <div className="flex flex-col text-white">
            <div className="flex flex-col mb-8">
            <label htmlFor="sort" className="text-[#6C727F] mb-2">Sort by</label>
            <select value={props.selectedSortingOption} onChange={(e) => props.onClick(e.target.value)} id="sort" name="sort" className="w-full text-white bg-[#1B1D1F] border-[0.063rem] border-[#6C727F] appearance-none pl-2 font-thin focus:outline-none">
                <option value="population">Population</option>
                <option value="area">Area</option>
            </select>
            </div>

            <div className="flex flex-col mb-8">
                <h1 className="mb-2 text-[#6C727F] items-center">Region</h1>
                    <div className="flex flex-row flex-wrap">
                        <label className="mr-4 mb-1 items-center checkbox-label rounded-md p-[0.15rem] flex justify-center">
                            <input type="checkbox" value="isAmericas" className="mr-1" onChange={(e) => props.changeRegion(e.target.value)}/>
                            Americas
                        </label>
                        <label className="mr-5 mb-1 items-center checkbox-label rounded-md p-[0.15rem] flex justify-center">
                            <input type="checkbox" value="isAntarctica" className="mr-1" onChange={(e) => props.changeRegion(e.target.value)}/>
                            Antarctic
                        </label>
                        <label className="mr-5 mb-1 items-center checkbox-label rounded-md p-[0.15rem] flex justify-center">
                            <input type="checkbox" value="isAfrica" className="mr-1" onChange={(e) => props.changeRegion(e.target.value)}/>
                            Africa
                        </label>
                        <label className="mr-5 mb-1 items-center checkbox-label rounded-md p-[0.15rem] flex justify-center">
                            <input type="checkbox" value="isAsia" className="mr-1" onChange={(e) => props.changeRegion(e.target.value)}/>
                            Asia
                        </label>
                        <label className="mr-5 mb-1 items-center checkbox-label rounded-md p-[0.15rem] flex justify-center">
                            <input type="checkbox" value="isEurope" className="mr-1" onChange={(e) => props.changeRegion(e.target.value)}/>
                            Europe
                        </label>
                        <label className="mr-5 mb-1 items-center checkbox-label rounded-md p-[0.15rem] flex justify-center">
                            <input type="checkbox" value="isOceania" className="mr-1" onChange={(e) => props.changeRegion(e.target.value)}/>
                            Oceania
                        </label>
                    </div>    
            </div>

            <div className="flex flex-col text-white text-sm">
                <h1 className="mb-2 text-[#6C727F]">Status</h1>
                <label className="mb-1 flex items-center">
                    <input type="checkbox" value="isMemberOfUn" onChange={(e) => props.changeStatus(e.target.value)} className="mr-2 h-4 w-4"/>
                    Member of the United Nations
                </label>
                <label className="mb-1 flex items-center">
                    <input type="checkbox" value="isIndependent" onChange={(e) => props.changeStatus(e.target.value)} className="mr-2 h-4 w-4"/>
                    Independent
                </label>
            </div>
        </div>
    )
}