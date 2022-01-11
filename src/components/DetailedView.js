import React from 'react'

const DetailedView = ({article, index}) => {
    console.log(article)

    const style = {
    width: '88%',
    padding: '15px',
    margin: '15px',
    marginTop: '-10px',
    marginLeft: '30px',
    borderLeft: '10px solid #798c8c',
    boxShadow: '0 1px 3px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.30)',
}

    return (
        <section style = {style} className="article-details">
            <p>Article Details:</p>
            {article.title}
            <p>more details</p>
            <p> etc etc etc </p>
        </section>
    )
}

export default DetailedView
