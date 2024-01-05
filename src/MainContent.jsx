import React from "react";
import Navbar from "./Navbar";
import Filters from "./Filters";
import Info from "./Info";
import Display from "./Display";
import { useState } from "react";
import { useEffect } from "react";
import _ from "lodash";

export default function MainContent(){
    const [countries, setCountries] = useState([]);
    const [selectedOption, setSelectedOption] = useState('population')  //state to keep track of sorting option
    
    useEffect(() => {                       //fetching data
        const fetchData = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            const sortedData = _.orderBy(data, [selectedOption], ['desc']);
            setCountries(sortedData);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
    }, [selectedOption]); 
    
    const changeSort = (newOption) => {   //changing sort
        setSelectedOption(newOption);
    };

    const country = countries.map(count =>{  //rendereing the countries info
        return(
            <Display 
                img={count.flags.png}
                name={count.name.common}
                population={count.population}
                region={count.region}
                area={count.area}
            />
        )
    })

    return(
        <div className="bg-[#1B1D1F] w-4/5 absolute top-[15rem] left-[8rem] rounded-2xl border-[0.063rem] border-[#6C727F] p-12 ">
            <Navbar noOfCountries={countries.length}/>
            <div className="flex flex-row ">
                <div className="mt-5 w-1/4">
                    <Filters onClick={changeSort} selectedOption={selectedOption}/>
                </div>
                <div className="mt-5 w-3/4 ml-6 flex flex-col">
                    <Info />
                    {country}
                </div>
            </div>
            
        </div>
    )
}