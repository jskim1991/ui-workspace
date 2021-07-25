const { createProxyMiddleware } = require('http-proxy-middleware')

var cookie

// proxy 로 request 시 이벤트
// function relayRequestHeaders(proxyReq, req) {
//     console.debug('💥💥💥 request 💥💥💥')
//     Object.keys(req.headers).forEach(function (key) {
//         console.debug(`${key} : ${req.headers[key]}`)
//     })
//     if (cookie) {
//         console.debug('💥💥💥 cookie in request 💥💥💥')
//         proxyReq.setHeader('cookie', cookie)
//     }
// }

// proxy 로 Response 시 이벤트
// function relayResponseHeaders(proxyRes, req, res) {
//     console.debug('💥💥💥 response 💥💥💥')
//     Object.keys(proxyRes.headers).forEach(function (key) {
//         console.debug(`${key} : ${proxyRes.headers[key]}`)
//         res.append(key, proxyRes.headers[key])
//     })
//     var proxyCookie = proxyRes.headers['set-cookie']
//     if (proxyCookie) {
//         cookie = proxyCookie
//     }
// }

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:8080',
            ws: true,
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // URL ^/api -> 공백 변경
            },
            cookieDomainRewrite: 'localhost',
            debug: true,
        }),
    )
}
