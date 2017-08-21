import { EstudosPage } from './app.po';

describe('estudos App', function() {
  let page: EstudosPage;

  beforeEach(() => {
    page = new EstudosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
