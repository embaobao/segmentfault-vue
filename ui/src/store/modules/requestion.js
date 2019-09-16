import axios from 'axios'
import cheerio from 'cheerio'





let requstionStore = {
    state: {
        requstionList: []
    },
    getters: {},
    mutations: {
        setRequstionList(state, list) {
            state.requstionList = list
        }
    },
    actions: {
        LoadRequstionList({
            commit
        }) {
            let res = axios.get('http://localhost:8080/api/questions').then(res => {
                commit('setRequstionList', parser(res.data))
            }, err => {

            })

        }

    }
}


export default requstionStore


function parser(body) {
    let requstionList = [];
    try {


        let $ = e => cheerio.load(e)

        let dom = $(body)('.stream-list.question-stream .stream-list__item');


        [].slice.call(dom).forEach((element) => {
            element = $(element)
            let votes = element('.votes').text().trim()
            let answers = element('.answers').text().trim()
            let views = element('.views span').text().trim()
            let authornName = element('.summary .author li a:nth-child(1)').text().trim()
            let authorUrl = element('.summary .author li a:nth-child(1)').attr('href').trim()

            let publishTime = element('.summary .author li a:nth-child(3)').text().trim()
            let title = element('.summary h2.title a').text().trim()
            let url = element('.summary h2.title a').attr('href')

            let tagDom = element('.summary .taglist--inline li a.tag')
            let tags = [];

            [].slice.call(tagDom).forEach(
                tag => {
                    let tagE = $(tag)
                    let name = tagE.text().trim(),
                        id = tag.attribs['data-id'],
                        link = tag.attribs['href'],
                        img=tagE('img').length>0?tagE('img').attr('src'):null;

                    tags.push({
                        id,
                        img,
                        name,
                        link
                    })
                }
            )

            votes = votes.replace(/\D/gi, '')
            answers = answers.replace(/\D/gi, '')

            requstionList.push({
                votes,
                answers,
                authornName,
                authorUrl,
                publishTime,
                views,
                title,
                url,
                tags
            })


        })

    } catch (error) {
        console.log('数据解析失败' + error);
    }

    console.log(requstionList);
    return requstionList

}