import { Videogular2ShowroomPage } from './app.po';

describe('videogular2-showroom App', () => {
  let page: Videogular2ShowroomPage;

  beforeEach(() => {
    page = new Videogular2ShowroomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
