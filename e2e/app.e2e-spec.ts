import { BankDetailAppPage } from './app.po';

describe('bank-detail-app App', function() {
  let page: BankDetailAppPage;

  beforeEach(() => {
    page = new BankDetailAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
