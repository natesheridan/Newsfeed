
const clean = {
    sectionFilter: (articles , value) => {
        if(value="all"){return articles}
        return articles.filter(story => story.section === value)
    },
    mapAllSections: (articles) => {
        const sectionObj = articles.reduce((acc, article) => {
            if(!acc[article.section]){
                acc[article.section] = "true"
            }

            return acc
        }, {})
        return sectionObj
    }
}
export default clean;