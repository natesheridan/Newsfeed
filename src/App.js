
import './App.css';
import getTopStories from './util/api'
import React, {useEffect, useState} from 'react'
import Newsfeed from './components/Newsfeed'
import FilterForm from './components/FilterForm'
import clean from './util/clean'

function App() {
  const [allStories, setAllStories] = useState([])
  const [lastUpdated, setLastUpdated] = useState("")
  const [filteredStories, setFilteredStories] = useState([])

  
  useEffect(()=> {
    onAppLoad()
  }, [])

  const onAppLoad = async () => {
    let nytResponse = await getTopStories("home")
    setLastUpdated(nytResponse.last_updated)
    setFilteredStories(nytResponse.results)
    setAllStories(nytResponse.results)
  }

  const updateShownArticles = (filterType, filter) => {
    let shownArticles = []
    if(filterType ==="section"){
      const updatedArticlesFiltered = clean.sectionFilter(allStories, filter)
      shownArticles = updatedArticlesFiltered
    }
    setFilteredStories(shownArticles)
  }

  return (
    <>
    <h2>NYT Top Stories</h2>
    <p>Last updated: {`${clean.date(lastUpdated)}`}</p>
    {allStories.length>0 && <FilterForm articles={allStories} updateShownArticles={updateShownArticles}/>}
    <Newsfeed articles={filteredStories}/>
    </>
  )
}

export default App;
