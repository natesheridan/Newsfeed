import React, {useState} from 'react'
import DetailedView from './DetailedView'

const Article = ({article, index}) => {
    const [detailsShown, setDetailsShown] = useState(false)

    if (!article.multimedia){
        article.multimedia = []
    }


    const toggleDetails = (isShown) => {
        setDetailsShown(!isShown)
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
            width: 'auto',
        },
        date:{},
        section:{},
        title:{},
    }
    const articleContainers = {
        main: {
        },
        media: {
            width: '200px',
            textAlign: 'center',
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
            <>
                <article key={index} style={style} className = 'article'>
                    {article.multimedia.length>0
                    &&<section style={articleContainers.media}>
                        <img src={article.multimedia[0].url} alt={article.multimedia[0].caption} style={articleStyles.img}></img>
                    </section>
                    }
                    <section style={articleContainers.text}>
                        <p style={articleStyles.section}>{article.section}</p>
                        <h1>{article.title}</h1>
                    </section>
                    <section style={articleContainers.buttons}>
                        <a target="_blank" href={article.url}><button>see original article</button></a>
                        <button onClick ={() => toggleDetails(detailsShown)}>more details {detailsShown? <>↑</> : <>↓</> }</button>
                    </section>
                </article>
                {detailsShown && 
                    <DetailedView article={article} index={index}/>
                }
            </>
    )
}

export default Article
