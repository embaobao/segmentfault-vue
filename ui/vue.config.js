const path = require('path')


module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                styles: path.resolve(__dirname, './src/assets/styles'),
                layoutComponents: path.resolve(__dirname, './src/components/layout/'),
                publicComponents: path.resolve(__dirname, './src/components/share/'),
                itemComponents: path.resolve(__dirname, './src/components/item/')
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://segmentfault.com',
                changeOrigin: true,
                onProxyReq(proxyReq, req, res) {
                    proxyReq.setHeader('cookie', 'PHPSESSID=web1~mos477coecdplj2ulnja6tot2j; sf_remember=cb3a6ff5de4d231fe3e401a48fe73ce5; io=FoJqm4mdUwqKqMAkpk8Y');
                    proxyReq.setHeader('referer', 'https://segmentfault.com/');
                },
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}