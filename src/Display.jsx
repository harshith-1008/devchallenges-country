//actual code which displays the countries --
import React from "react";
import Country from "./Country";
import { useState } from "react";

export default function Display(props){
    const [showPage, setShowPage] = useState(false)
    const changePage = () => {
        setShowPage(prev=>!prev)
    //     console.log(props.languages)
    //     return(
    //         <Country 
    //         img={props.img}
    //         name={props.name}
    //         population={props.population}
    //         area={props.area}
    //         officalName={props.officialName}
    //         capital={props.capital}
    //         subregion={props.subregion}
    //         currency={props.currency}
    //         language={props.languages}
    //         continent={props.continents}
    //         region={props.region}        
    //     />
    //     )  
    }

    return(
        <div className="flex flex-row mt-4 justify-items-center items-center text-[#D2D5DA]">
            <div className="w-14 h-8 mr-10"><img src={props.img} className="rounded-md w-14 h-[2rem]"></img></div>
            <div className=" w-[11.5rem] pr-3 hover:underline" onClick={changePage}><p>{props.name}</p></div>
            <div className="w-[11.75rem]"><p>{props.population}</p></div>
            <div className="w-[8rem]"><p>{props.area}</p></div>
            <div className="w-auto"><p>{props.region}</p></div>
            {showPage && <Country 
            img={props.img}
            name={props.name}
            population={props.population}
            area={props.area}
            officalName={props.officialName}
            capital={props.capital}
            subregion={props.subregion}
            // currency={props.currency}
            language={props.languages}
            continent={props.continents}
            region={props.region}        
        />}
        </div>
    )
}