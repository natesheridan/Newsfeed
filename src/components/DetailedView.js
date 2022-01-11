import React from 'react'
import clean from './../util/clean'

const DetailedView = ({article, index, toggleDetails}) => {

    const style = {
        detailsSections: {
            width: '85%',
            padding: '15px',
            margin: '15px',
            marginTop: '-10px',
            marginLeft: '30px',
            borderLeft: '10px solid #798c8c',
            boxShadow: '0 1px 3px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.30)',
        }
}

    return (
        <section style = {style.detailsSections} className="article-details">
            <h5>Details:</h5>
            <h2>{article.title}</h2>
            <h4>{article.abstract}</h4>
            <h5>{article.byline}</h5>
            <p>Original Ariticle: <a href={article.short_url} target="_blank">{article.short_url}</a></p>
            <h4>Tags</h4>
            {article.des_facet.join(' ⁕ ') || "none"}
            <h4>Tagged Locations</h4>
            {article.geo_facet.join(' ⁕ ') || "none"}
            <h4>Tagged Organizations</h4>
            {article.org_facet.join(' ⁕ ') || "none"}
            <h4>Tagged Mentioned</h4>
            {article.per_facet.join(' ⁕ ') || "none"}
            <h5>Time Details</h5>
            <p>Creation date :  {`${clean.date(article.created_date)}`}</p>
            <p>Publish date :  {`${clean.date(article.published_date)}`}</p>
            <p>Last Updated:  {`${clean.date(article.updated_date)}`}</p>
            <button style={{width: '100%'}} onClick={()=> toggleDetails(true)}>^^^ shrink ^^^</button>
        </section>
    )
}

export default DetailedView



// {
//     "section": "us",
//     "subsection": "",
//     "title": "Why Coronavirus Testing Is Falling Short in Many Schools Across the U.S.",
//     "abstract": "As millions of American students head back to their desks, the virus testing that was supposed to help keep classrooms open safely is itself being tested.",
//     "url": "https://www.nytimes.com/2022/01/11/us/schools-covid-testing.html",
//     "uri": "nyt://article/7ff7c02c-f48b-54a5-a516-b84221704763",
//     "byline": "By Shawn Hubler",
//     "item_type": "Article",
//     "updated_date": "2022-01-11T17:49:46-05:00",
//     "created_date": "2022-01-11T14:46:56-05:00",
//     "published_date": "2022-01-11T14:46:56-05:00",
//     "material_type_facet": "",
//     "kicker": "",
//     "des_facet": [
//         "Tests (Medical)",
//         "Coronavirus Reopenings",
//         "Education (K-12)",
//         "Coronavirus Omicron Variant"
//     ],
//     "org_facet": [],
//     "per_facet": [],
//     "geo_facet": [],
//     "multimedia": [
//         {
//             "url": "https://static01.nyt.com/images/2022/01/11/world/11schools-testing3/merlin_200009937_142fe54f-f61d-475c-b01f-39a4a1edbc7e-superJumbo.jpg",
//             "format": "superJumbo",
//             "height": 1365,
//             "width": 2048,
//             "type": "image",
//             "subtype": "photo",
//             "caption": "Holly Amos, a special education teacher in Gardena, Calif., giving her son a coronavirus test at a school site last week.",
//             "copyright": "Allison Zaucha for The New York Times"
//         }
//     ],
//     "short_url": "https://nyti.ms/33mVEgM"
// }