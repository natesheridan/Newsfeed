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

    const style = {
        form:{
            marginTop: '2em',
            textAlign: 'center',
        },
        select: {
            display: 'block',
            appearance: `none`,
            border: `0`,
            outline: `0`,
            font: `inherit`,
            textAlign: 'center',
            width: `10em`,
            height: `3em`,
            padding: '0 1em 0 1em',
            background: `linear-gradient(to left, aqua 3em, slate 3em)`,
            color: 'black',
            borderRadius: '0.25em',
            boxShadow: '0 0 1em 0 rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            marginTop: '10px',
        },
        label:{
        },
    }

    return (
        <form style={style.form}>
        <label style={style.label} htmlFor="section">filter by category</label>
        <select style={style.select} onChange={(event) => onSectionChange(event)} defaultValue ="all" id="section" name="section">
            <option value="all" >all</option>
            {generateSectionOptions(availableSections)}
        </select>
        </form>
    )
}

export default FilterForm
