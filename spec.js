describe('suite', function () {

    it('test', function () {
        browser.get('http://maxcabrera.com/code/todo-list/')
        expect(browser.getTitle()).toBe('Angular2 Seed')
    })
    it('test2', function () {
        browser.get('https://github.com/StartITProtractorJS')
        expect(browser.getTitle()).toBe('StartITProtractorJS/simpletodo-app-sk13man@4e850c3')   
})
})