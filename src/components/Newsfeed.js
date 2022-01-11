import React from 'react'
import Article from './Article'

const Newsfeed = ({articles}) => {

    const style = {
        height: '100%',
        minHeight: '20px',
        width: '100%',
        maxWidth: '1000px',
    }

    const generateArticleElements = () => {
        return articles.map((article, i) =>{
            return (
                <Article key={i} index={i} article={article}/>
            )
        })
    }
    return (
        <div style={style} className="newsfeed">
            {generateArticleElements()}
        </div>
    )
}

export default Newsfeed
