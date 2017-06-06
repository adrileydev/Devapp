import { Dev1Page } from './app.po';

describe('dev1 App', () => {
  let page: Dev1Page;

  beforeEach(() => {
    page = new Dev1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('vhs works!');
  });
});
