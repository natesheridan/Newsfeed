
const clean = {
    sectionFilter: (articles , value) => {
        articles.filter(story => story.section === value)
    },
    mapAllSections: (articles) => {
        const sectionObj = articles.reduce((acc, article) => {
            if(!acc[article.section]){
                acc[article.section] = "true"
            }

            return acc
        }, {})
        console.log(sectionObj)
        return sectionObj
    }
}
export default clean;