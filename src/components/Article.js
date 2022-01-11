import React from 'react'

const Article = ({article, index}) => {
    console.log(article)

    if (!article.multimedia){
        article.multimedia = []
    }
    const style = {
        display:'flex',
        width: '92%',
        padding: '15px',
        margin: '15px',
        borderLeft: '10px solid #9ac2d6',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        justifyContent: 'space-between'


    }
    const articleStyles = {
        img:{
            maxWidth: '200px',
            maxHeight: '200px',
            height: '100%',
            width: 'auto'
        }
    }
    const articleContainers = {
        media: {

        },
        text:{
            maxWidth: '550px',
            width: '100%',
        },
        buttons: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'

        }
    }
    return (
        <article key={index} style={style} className = 'article'>
            {article.multimedia.length>0
            &&<section className="article-media">
                <img src={article.multimedia[0].url} alt={article.multimedia[0].caption} style={articleStyles.img}></img>
            </section>
            }
            <section style={articleContainers.text}>
                <h3>{article.section}</h3>
                <h1>{article.title}</h1>
            </section>
            <section style={articleContainers.buttons}>
                <button>more details..</button>
                <a target="_blank" href={article.url}><button>see original article</button></a>
            </section>
        </article>
    )
}

export default Article
