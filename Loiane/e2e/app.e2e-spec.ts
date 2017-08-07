import { LoianePage } from './app.po';

describe('loiane App', () => {
  let page: LoianePage;

  beforeEach(() => {
    page = new LoianePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
