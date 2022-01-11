import React, {useState, useEffect} from 'react'
import clean from './../util/clean'

const FilterForm = ({updateShownArticles, articles}) => {
    if (!articles){
        articles = [];
    }
    const [sectionValue , setSectionValue] =  useState("")
    const [availableSections, setAvailableSections] = useState([])


    useEffect(()=> {
        const availableSectionsObj = clean.mapAllSections(articles)
        const sectionAvailable = Object.keys(availableSectionsObj)
        setAvailableSections(sectionAvailable)
    }, [sectionValue])

    const generateSectionOptions = (options) =>{
        
        return options.map((sectionOption) => {
            return(
            <option key={`${sectionOption}`} value={`${sectionOption}`}>{`${sectionOption}`}</option>
            )
        })
    }
    const onSectionChange = (event) => {
        setSectionValue(event.target.value)
        updateShownArticles("section", event.target.value)
    }

    return (
        <form action="/action_page.php">
        <label htmlFor="section">Section </label>
        <select onChange={(event) => onSectionChange(event)} defaultValue ="all" id="section" name="section">
            <option value="all" >all</option>
            {generateSectionOptions(availableSections)}
        </select>
        </form>
    )
}

export default FilterForm
