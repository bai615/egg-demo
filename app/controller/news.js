const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        // const dataList = {
        //     list: [
        //         {id: 1, title: 'this is new 1', url: '/news/1'},
        //         {id: 2, title: 'this is new 2', url: '/news/2'}
        //     ]
        // };
        // await this.ctx.render('new/list.tpl', dataList);
        /////////////////////////////////////////////////////////////////

        const ctx = this.ctx;
        const page = ctx.query.page || 1;
        const newList = await ctx.service.news.list(page);
        // console.log(newList)
        await ctx.render('news/list.tpl', {list: newList});
    }
}

module.exports = NewsController;