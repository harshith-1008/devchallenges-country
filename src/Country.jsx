import React from "react";

export default function Country(props){
    return(
        <div className="bg-[#1B1D1F] w-3/5 absolute top-[0rem] left-[14rem] rounded-2xl border-[0.063rem] border-[#6C727F] p-12 flex justify-center">
            <img src={props.img} className="absolute top-[-2rem] rounded-xl"></img>
            <div className=" mt-40">
                <div className="flex flex-col justify-center items-center text-[#D2D5DA] mb-10">
                    <h3 className="text-3xl font-semibold">{props.name}</h3>
                    <p>{props.officialName}</p>
                </div>
                <div className="text-[#D2D5DA] flex flex-row justify-between mb-10">
                    <div className="flex flex-row mr-10 p-2 border-[0.063rem] bg-[#282B30] rounded-lg items-center pr-5 pl-5">
                        <p className="mr-3">Population</p>
                        <div className="border-[0.063rem] border-solid border-black mr-3 h-5"></div>
                        <p>{props.population}</p>
                    </div>
                    <div className="flex flex-row p-2 border-[0.063rem] bg-[#282B30] rounded-lg items-center pr-5 pl-5">
                        <p className="mr-3">Area(km²)</p>
                        <div className="border-[0.063rem] border-solid border-black mr-3 h-5"></div>
                        <p>{props.area}</p>
                    </div>
                </div>
                <div className="border-[#6C727F] border-[0.05rem] w-full mb-5 mt-5"></div>
                <div className="flex flex-col text-md">
                    <div className="w-full flex flex-row justify-between">
                        <p className="text-[#6C727F]">Capital</p>
                        <p className="text-[#D2D5DA]">{props.capital}</p>
                    </div>
                    <div className="border-[#6C727F] border-[0.05rem] w-full mb-5 mt-5"></div>
                    <div className="w-full flex flex-row justify-between">
                        <p className="text-[#6C727F]">Subregion</p>
                        <p className="text-[#D2D5DA]">{props.subregion}</p>
                    </div>
                    <div className="border-[#6C727F] border-[0.05rem] w-full mb-5 mt-5"></div>
                    <div className="w-full flex flex-row justify-between">
                        <p className="text-[#6C727F]">Language</p>
                        <p className="text-[#D2D5DA]">{props.language}</p>
                    </div>
                    <div className="border-[#6C727F] border-[0.05rem] w-full mb-5 mt-5"></div>
                    <div className="w-full flex flex-row justify-between">
                        <p className="text-[#6C727F]">Currencies</p>
                        <p className="text-[#D2D5DA]">{}</p>
                    </div>
                    <div className="border-[#6C727F] border-[0.05rem] w-full mb-5 mt-5"></div>
                    <div className="w-full flex flex-row justify-between">
                        <p className="text-[#6C727F]">Continent</p>
                        <p className="text-[#D2D5DA]">{props.continent}</p>
                    </div>
                    <div className="border-[#6C727F] border-[0.05rem] w-full mb-5 mt-5"></div>
                </div>
            </div>

        </div>
    )
}