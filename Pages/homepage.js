class homePage {
  get logo() {
    return $("#header_logo");
  }
  get findTabs() {
    return $$("ul.sf-menu>li");
  }
  get popularTab() {
    return $("a.homefeatured");
  }
  get PopularActive() {
    return $("li.active>a.homefeatured");
  }

  get activeTab() {
    return $("li.active>a");
  }

  get tabMenu() {
    return $("ul.sf-menu");
  }

  clickOnLogo() {
    this.logo.click();
  }
  isPopularTabActive() {
    this.activeTab.scrollIntoView();
    return this.activeTab.getText() == "POPULAR";
  }

  tabsAvailable() {
    return this.findTabs.filter((element) => {
      let tabs = element.getText();
      console.log("Tab available: ", tabs);
    });
  }
  tabCount() {
    this.tabMenu.scrollIntoView();
    console.log("tab count is: ", this.findTabs.length);
    return this.findTabs.length;
  }
}

module.exports = new homePage();
