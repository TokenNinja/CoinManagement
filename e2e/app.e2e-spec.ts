import { TokenNinjaPage } from './app.po';

describe('token-ninja App', function() {
  let page: TokenNinjaPage;

  beforeEach(() => {
    page = new TokenNinjaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
