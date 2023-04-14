import { React, useState, useEffect } from "react";
import seeds from '../misc/seeds.json'
import { useSearchParams, Link } from "react-router-dom";
import './Search.css'
// import  headerImg from '../assets/img/places/headers/barcelona.jpeg'
import notFoundBg from '../assets/img/404-background.jpg'
import notFoundEarth from '../assets/img/earth.png'

const Search2 = () => {
    const [places, setPlaces] = useState(seeds)
    const [place, setPlace] = useState()
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState({
        "filters.continent": searchParams.get("continent") || [],
        "filters.language": searchParams.get("language") || [],
        "filters.time": searchParams.get("time") || [],
        "filters.activities": searchParams.get("activities") || [],
        "filters.money": searchParams.get("money") || []
    })

    const randomNumber = (max) => {
        let rand = Math.random() * max
        rand = Math.floor(rand);
        return rand;
    }

    useEffect(() => {
        const filterArr = Object.values(query).flat();
        const filterPlaces = places.filter(({filters}) => {
                
            const objFilters = Object.values(filters).flat();
            return filterArr.every(val => objFilters.includes(val));
        })

        setPlace(filterPlaces[randomNumber(filterPlaces.length)])
        // if(searchParams.get("random") === 'true') {
        //     const filterPlaces = places.filter(({filters}) => {
                
        //         const objFilters = Object.values(filters).flat();
        //         return filterArr.every(val => objFilters.includes(val));
        //     })
    
        //     setPlace(filterPlaces[randomNumber(filterPlaces.length)])
        // } else if(filterArr.length > 0) {
            
        //     // const filterPlaces = places.filter(({filters}) => {
                
        //     //     const objFilters = Object.values(filters).flat();
        //     //     return filterArr.every(val => objFilters.includes(val));
        //     // })
    
        //     setPlace(query)
        // }

    },[query])

    return(
        <>
        {console.log("Place => ", place)}      
        {/* {place ?
         <>
        <header style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 100%, rgba(0, 0, 0, 0.4) 100%), url(./places/headers/${place.searchName}.jpeg)`}}>
            <h1>{place.name}</h1>
            <hr/>
        </header>
        <div className="general-info container">
            <div className="row">
                <div className="col-6 image" style={{backgroundImage: `url(./places/info/${place.searchName}.jpeg)`}}>
                </div>
                <div className="col-6 text">
                    <h2>{place.name}</h2>
                    <h4>{place.location.country}</h4>
                    <p>{place.info.shortDescription}</p>
                    <p>Language: <b>{place.info.language}</b></p>
                    <p>Continent: <b>{place.location.continent}</b></p>
                    <p>Expensive: <b>{place.filters.money}</b></p>
                </div>
            </div>
        </div>
        <div className="places-interest container">
            <h2>Places of interest</h2>
            <hr />
            <div className="row mt-4">
                {place.info.hotSpots.map((spot, index) => {
                    return(
                        <div className="col spot" key={spot.name}>
                            <img src={`./places/spots/${place.searchName+index}.jpeg`} alt={spot.name}/>
                            <h5><b>{spot.name}</b></h5>
                            <p>{spot.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </> 
        :
        <>
        <div className="container-fluid not-found" style={{backgroundImage: `url(${notFoundBg})`}}>
            <h3>We have not found that place on earth,<br/> maybe in the space ...</h3>
            <img style={{width: "20%", marginBottom: "2rem"}} src={notFoundEarth} alt=""/>
            <Link className="btn btn-primary" to="/">Back to Placehack</Link>
        </div>
        </>} */}
        
        
        </>
    )
}

export default Search2