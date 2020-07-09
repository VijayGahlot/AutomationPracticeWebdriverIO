class ElementUtil {
  doClick(element) {
    element.waitForDisplayed();
    element.click();
  }
  doSetValue(element, value) {
    element.waitForDisplayed();
    element.setValue(value);
  }

  doIsDisplayed(element) {
    element.waitForDisplayed();
    return element.isDisplayed();
  }
  doGetText(element) {
    element.waitForDisplayed();
    return element.getText();
  }
  doGetPageTitle(pageTitle) {
    browser.waitUntil(
      function () {
        return browser.getTitle == pageTitle;
      },
      5000,
      "title not captured in time"
    );

    {
      return browser.doGetPageTitle();
    }
  }
}
module.exports = new ElementUtil();
