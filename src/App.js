
import './App.css';
import getTopStories from './util/api'
import React, {useEffect, useState} from 'react'
import Newsfeed from './components/Newsfeed'

function App() {
  const [allStories, setAllStories] = useState([])
  const [filteredStories, setFilteredStories] = useState([])

  
  useEffect(()=> {
    onAppLoad()
  }, [])

  const onAppLoad = async () => {
    let nytResponse = await getTopStories("home")
    setAllStories(nytResponse.results)
    setFilteredStories(nytResponse.results)
  }


  return (
    <>
    <Newsfeed articles={filteredStories}/>
    </>
  )
}

export default App;
