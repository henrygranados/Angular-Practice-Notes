import { MasteringAngularPage } from './app.po';

describe('mastering-angular App', () => {
  let page: MasteringAngularPage;

  beforeEach(() => {
    page = new MasteringAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
