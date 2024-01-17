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
    const [selectedSortingOption, setSelectedSortingOption] = useState('population');  //state to keep track of sorting option
    const [selectedStatus, setSelectedStatus] = useState({          //state to manage status filter
        isMemberOfUn: false,
        isIndependent: false
    });
    const [selectedRegion, setSelectedRegion] = useState({
        isAmericas: false,
        isAsia: false,
        isAfrica: false,
        isOceania: false,
        isEurope: false,
        isAntarctica: false
    })
    

    useEffect(() => {                       //fetching data
        const fetchData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                const filteredDataRegion = data.filter(country => {
                    return(
                        (!selectedRegion.isAmericas || country.region === "Americas") &&
                        (!selectedRegion.isAsia || country.region === "Asia") &&
                        (!selectedRegion.isAfrica || country.region === "Africa") &&
                        (!selectedRegion.isEurope || country.region === "Europe") &&
                        (!selectedRegion.isOceania || country.region === "Oceania") &&
                        (!selectedRegion.isAntarctica || country.region === "Antarctic")
                    )
                })
                const filteredDataStatus = filteredDataRegion.filter(country => {     // Filter countries based on selectedStatus
                    return (
                        (!selectedStatus.isMemberOfUn || country.unMember) &&
                        (!selectedStatus.isIndependent || country.independent)
                    );
                });
                const finalData = _.orderBy(filteredDataStatus, [selectedSortingOption], ['desc']); // Sort the filtered data based on selectedSortingOption
                setCountries(finalData);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
    }, [selectedSortingOption, selectedStatus, selectedRegion]); //dependencies are them so that the useEffect gets executed whenevr the option changes 
    
    const changeSort = (newOption) => {   //changing sort
        setSelectedSortingOption(newOption);
    };

    const changeStatus = (newStatus) => {     //changing state for status filter
        setSelectedStatus((prev) => ({
            ...prev,
            [newStatus]: !prev[newStatus]
        }));
    }

    const changeRegion = (newRegion) => {     //changing state for region filter
        setSelectedRegion((prev) => ({
            ...prev,
            [newRegion]: !prev[newRegion]
        }))
    }
    
    const list = countries.map(count =>{  //rendereing the countries info
        //capital subregion currencies lngauge continent
        console.log(count.continent)
        return(
            <Display 
                img={count.flags.png}
                capital={count.capital}
                subregion={count.subregion}
                currency={count.currencies}
                language={count.languages}
                continent={count.continents}
                name={count.name.common}
                officalName={count.name.offical}
                population={count.population}
                region={count.region}
                area={count.area}
            />
        )
    })

    // const changePage = () => {
    //     return(
    //         <Country 
    //         img={count.flags.png}
    //         capital={count.capital}
    //         subregion={count.subregion}
    //         currency={count.currencies}
    //         language={count.languages}
    //         continent={count.continents}
    //         name={count.name.common}
    //         officalName={count.name.offical}
    //         population={count.population}
    //         region={count.region}
    //         area={count.area}       
    //     />
    //     )  
    // }

    return(
        <div className="bg-[#1B1D1F] w-4/5 absolute top-[15rem] left-[8rem] rounded-2xl border-[0.063rem] border-[#6C727F] p-12">
            <Navbar noOfCountries={countries.length} />
            <div className="flex flex-row ">
                <div className="mt-5 w-1/4">
                    <Filters onClick={changeSort} changeStatus={changeStatus} changeRegion={changeRegion} selectedSortingOption={selectedSortingOption}/>
                </div>
                <div className="mt-5 w-3/4 ml-6 flex flex-col">
                    <Info />
                    {list}
                </div>
            </div>
        </div>
    )
}