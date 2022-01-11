import React from 'react'

const Article = ({article, index}) => {
    console.log(article)
    const style = {
        width: '100%',
        padding: '15px',
        margin: '15px',
        borderLeft: '10px solid grey'
    }
    const articleStyles = {
        
    }
    return (
        <article key={index} style={style} className = 'article'>
            <section className="article-media">

            </section>
            <section>
                <h3>{article.section}</h3>
                <h1>{article.title}</h1>
            </section>
        </article>
    )
}

export default Article
