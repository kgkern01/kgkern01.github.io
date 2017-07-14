import { GitHomePage } from './app.po';

describe('git-home App', () => {
  let page: GitHomePage;

  beforeEach(() => {
    page = new GitHomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
