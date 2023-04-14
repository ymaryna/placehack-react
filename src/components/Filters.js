import { render } from "@testing-library/react";
import {React, useState, useEffect} from "react";
import { Form,  Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Filters = () => {
    const [filters, setFilters] = useState({
        continent: [],
        time: [],
        language: [],
        activities: [],
        money: [],
    });
    const navigate = useNavigate();

    const checkClick = (e) => {
    
        const changedValue = e.getAttribute('value');
        
        // if(e.getAttribute('name') === 'continent') {
        //     setFilters({...filters, continent:{...filters.continent, [changedValue]: !filters.continent[changedValue]}});
        // } else if(e.getAttribute('name') === 'time') {
        //     setFilters({...filters, time:{...filters.time, [changedValue]: !filters.time[changedValue]}});
        // } else if(e.getAttribute('name') === 'language') {
        //     setFilters({...filters, language:{...filters.language, [changedValue]: !filters.language[changedValue]}});
        // } else if(e.getAttribute('name') === 'activities') {
        //     setFilters({...filters, activities:{...filters.activities, [changedValue]: !filters.activities[changedValue]}});
        // } else if(e.getAttribute('name') === 'money') {
        //     setFilters({...filters, money:{...filters.money, [changedValue]: !filters.money[changedValue]}});
        // }
    }

    const filterCkick = (e) => {
        
        const preferences = Array.prototype.slice.call(document.getElementById(e.target.parentElement.parentElement.id).getElementsByClassName('preference'))
        
        preferences.map((el) => {
            let input = el.getElementsByTagName('input')[0]
            let label = el.getElementsByTagName('label')[0]

            input.setAttribute('disabled', '')
            input.checked = false
            label.className = "ms-2 filter-card disabled"       
        })

        e.target.previousElementSibling.checked = true
        e.target.previousElementSibling.removeAttribute('disabled')
        e.target.className += ' filter-selected'
    
        checkClick(e.target.previousElementSibling)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let result = ''
        const query = Array.from(e.target.getElementsByTagName('input')).filter((e) => {
            
            if(e.checked) {
                result += `${e.getAttribute('name')}=${e.getAttribute('value')}&`
            }
            return result
        })
        navigate(`/search?${result.substring(0, result.length - 1)}`);
    }

    useEffect(()=> {
        console.log(filters)
    }, [filters])

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="input-box">
                <h6>CONTINENT</h6>
                <div className="preferences-list d-flex" id="continent">
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="continent" value="europe"/>
                        <label className="ms-2 filter-card">Europe</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="continent" value="america"/>
                        <label className="ms-2 filter-card">America</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="continent" value="africa"/>
                        <label className="ms-2 filter-card">Africa</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="continent" value="asia"/>
                        <label className="ms-2 filter-card">Asia</label> 
                    </div>
                    {/* <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="continent" value="oceania"/>
                        <label className="ms-2 filter-card">Oceania</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="continent" value="antartica"/>
                        <label className="ms-2 filter-card">Antartica</label> 
                    </div> */}
                </div>
            </div>
            <div className="input-box">
                <h6>TIME</h6>
                <div className="preferences-list d-flex" id="time">
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="time" value="weekend"/>
                        <label className="ms-2 filter-card">Weekend</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="time" value="week"/>
                        <label className="ms-2 filter-card">Week</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="time" value="plusweek"/>
                        <label className="ms-2 filter-card">+Week</label> 
                    </div>
                    {/* <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="time" value="15days"/>
                        <label className="ms-2 filter-card">15 days</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="time" value="month"/>
                        <label className="ms-2 filter-card">Month</label> 
                    </div> */}
                </div>
            </div>
            <div className="input-box">
                <h6>LANGUAGE</h6>
                <div className="preferences-list d-flex" id="language">
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="language" value="english"/>
                        <label className="ms-2 filter-card">English</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="language" value="spanish"/>
                        <label className="ms-2 filter-card">Spanish</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="language" value="chinese"/>
                        <label className="ms-2 filter-card">Chinese</label> 
                    </div>
                    {/* <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="language" value="hindi"/>
                        <label className="ms-2 filter-card">Hindi</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="language" value="arabic"/>
                        <label className="ms-2 filter-card">Arabic</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="language" value="portuguese"/>
                        <label className="ms-2 filter-card">Portuguese</label> 
                    </div> */}
                </div>
            </div>
            <div className="input-box">
                <h6>ACTIVITES</h6>
                <div className="preferences-list d-flex" id="activities">
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="activities" value="relax"/>
                        <label className="ms-2 filter-card">Relax</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="activities" value="beach"/>
                        <label className="ms-2 filter-card">Beach</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="activities" value="mountain"/>
                        <label className="ms-2 filter-card">Mountain</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="activities" value="tourism"/>
                        <label className="ms-2 filter-card">Tourism</label> 
                    </div>
                    <div className="d-flex preference" onClick={filterCkick}>
                        <input type="checkbox" className="input-category" name="activities" value="adventure"/>
                        <label className="ms-2 filter-card">Adventure</label> 
                    </div>
                </div>
            </div>
            
            <Button variant="primary" type="submit" className="mb-2 mt-4 button-submit">
                Search
            </Button>
        </form>
        </>
    )
}

export default Filters