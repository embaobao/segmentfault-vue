import axios from 'axios'
import cheerio from 'cheerio'





let store = {
    state: {
        blogList: []
    },
    getters: {},
    mutations: {
        setBlogList(state, list) {
            console.log(list);
            state.blogList = list
        }
    },
    actions: {
        LoadBlogList({
            commit
        }) {
            let res = axios.get('http://localhost:8080/api/blogs').then(res => {
                commit('setBlogList',parser(res.data))
            }, err => {

            })

        }

    }
}


export default store


function parser(body) {
    let requstionList = [];
    try {


        let $ = e => cheerio.load(e)

        let dom = $(body)('.stream-list.blog-stream .stream-list__item');


        [].slice.call(dom).forEach((element) => {

            element = $(element)

            let votes = element('.stream__item-zan-number').text().trim(),
                title = element('.title a').text().trim(),
                url = element('.title a').attr('href'),
                author=element('.author li:nth-child(1) span a:nth-child(1)').text().trim(), 
                authorUrl=element('.author li:nth-child(1) span a:nth-child(1)').attr('href'),
                column=element('.author li:nth-child(1) span a:nth-child(2)').text().trim(), 
                columnUrl=element('.author li:nth-child(1) span a:nth-child(2)').attr('href'),
                bookmark=element('.blog--bookmark__text').text().trim().replace(/\D/gi, '');

                 requstionList.push({
                    votes,
                    title,
                    author,
                    authorUrl,
                    column,
                    columnUrl,
                    url,
                    bookmark
                })
        })

    } catch (error) {
        console.log('数据解析失败' + error);
    }
    return requstionList
}