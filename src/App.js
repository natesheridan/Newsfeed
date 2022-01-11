
import './App.css';
import getTopStories from './util/api'
import React, {useEffect, useState} from 'react'

function App() {
  const [topStories, setTopStories] = useState([])

  
  useEffect(()=> {
    onAppLoad()
  }, [])

  const onAppLoad = async () => {
    let nytResponse = await getTopStories("home")
    setTopStories(nytResponse.results)
  }


  return (
    <>
    </>
  )
}

export default App;
