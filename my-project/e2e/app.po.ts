export class MyProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-project-app h1')).getText();
  }
}
