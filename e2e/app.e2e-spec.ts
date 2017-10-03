import { ArifNislam.Github.IoPage } from './app.po';

describe('arif-nislam.github.io App', () => {
  let page: ArifNislam.Github.IoPage;

  beforeEach(() => {
    page = new ArifNislam.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
