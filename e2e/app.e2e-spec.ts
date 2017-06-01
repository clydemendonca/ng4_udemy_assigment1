import { Assignment1Page } from './app.po';

describe('assignment1 App', () => {
  let page: Assignment1Page;

  beforeEach(() => {
    page = new Assignment1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
