import { ReactiveFormsPage } from './app.po';

describe('reactive-forms App', () => {
  let page: ReactiveFormsPage;

  beforeEach(() => {
    page = new ReactiveFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
