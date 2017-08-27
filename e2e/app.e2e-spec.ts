import { CasGuiPlaygroundPage } from './app.po';

describe('cas-gui-playground App', () => {
  let page: CasGuiPlaygroundPage;

  beforeEach(() => {
    page = new CasGuiPlaygroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
