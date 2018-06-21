exports.keys = 'egg-demo-cookie-keys';

// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
};

// 添加 news 配置项
exports.news = {
    pageSize: 2,
    //serverUrl: 'https://hacker-news.firebaseio.com/v0',
    serverUrl: 'http://127.0.0.1:8003/v0'
};