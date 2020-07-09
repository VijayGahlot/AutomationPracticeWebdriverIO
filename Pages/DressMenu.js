class dressMenu {
  get dressTab() {
    return $("#block_top_menu > ul > li:nth-child(2) > a");
  }

  get checkBoxes() {
    return $$("input.checkbox");
  }
  get gridview() {
    return $("#grid");
  }
  get listOption() {
    return $("#list");
  }
  get priceValue() {
    return $$('div[class*="content_price col-xs-5 col-md-12"]');
  }
  get summerDress() {
    return $("#categories_block_left > div > ul > li.last");
  }
  get dressTypes() {
    return $$("div.center-block a.product-name");
  }

  clickOnDresses() {
    this.dressTab.waitForDisplayed();
    this.dressTab.click();
  }

  gridSelected() {
    this.gridview.scrollIntoView();
    console.log("is grid displayed: ", this.gridview.isDisplayedInViewport());
  }

  checkBoxesSelection() {
    //console.log(this.checkBoxes.isEnabled())
    return this.checkBoxes.filter((element) => {
      console.log("is checkbox selected: ", element.isSelected());
    });
  }
  selectListView() {
      this.listOption.scrollIntoView()
      browser.pause(5000)
    this.listOption.click();
  }

  getPriceAvailable() {
    return this.priceValue.filter((element) => {
      element.getText();
      //console.log(element.isDisplayed());
    });
  }
  selectSummerDresses() {
    this.summerDress.click();
  }

  verifySummerDresses() {
    var flag1 = this.dressTypes.filter((element) =>
      element.getText().toLowerCase().includes("summer dress")
    );
    if (flag1.length) {
      return false;
    }

    return true;
  }
}

module.exports = new dressMenu();
