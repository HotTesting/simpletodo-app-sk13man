//Lets see what we have

 let URL = 'http://maxcabrera.com/code/todo-list/'
 let webelement = $('input.enter-todo')
 let notes = $$('todo-list .small-12')
 let checkboxes = element.all(by.css('.todo-container [type="checkbox"]'));

 //
describe('suite', function () {
// Initial test
    it('test', function () {
        browser.get(URL)
        expect(browser.getTitle()).toBe('Angular2 Seed')
    })
// Lets create a new note
    it('should create new note', function () {
        browser.get(URL)    
        webelement.sendKeys('13')
        browser.sleep(2000)
        webelement.submit()
     // Lets check created note 
       expect(notes.getText()).toContain('13')
    })
  //Lets delete this notes
    it('Lets delete this note', function() {
        browser.get(URL)
               element($("input[type='checkbox']").click())
// Lets check this note is deleted
expect(notes.getText()).not.toContain('13')
    })
// and lets delete them all
  it('should delete all notes', function () {
        checkboxes.click();
        expect(checkboxes.count()).toBe(0);
    });
})