module.exports = {
    '@tags': ['test_2'],
    'Verify that users can Search for and navigate to Hoodie page'(browser) {
        const product = 'hoodie';
        const product_item = 'Hoodie with Pocket';
        const product_item_path = 'hoodie-with-pocket';
        
        const page = browser.page.main();
        const search_page = browser.page.search();
        const product_page = browser.page.product();

        page
            .navigate()
            .setSearch(product);

        const mainPageHeader = `#masthead`;
        const searchBar= `.search-field` ;
        browser.assert.visible(mainPageHeader, 'UI: Main Page Visible');
        browser.assert.visible(searchBar, 'UI: Main Search Bar Visible');


        browser
            .keys(browser.Keys.ENTER);

        const search_page_result = `//h2[text()="${product_item}"]`;
        browser.useXpath(); 
        browser.assert.visible(search_page_result, 'UI: Products Results Visible');
        browser.useCss();

        search_page
            .selectProduct(product_item);

        browser.assert.urlContains(product_item_path, 'Params: URL of the Product is Displayed');
        const product_page_ui = `//*[contains(@class, 'product-type-simple')]`;
        const product_page_result = `//*[contains(@class, 'entry-title')]`;
        browser.useXpath();
        browser.assert.visible(product_page_ui, 'UI: Product Page is Visible');
        browser.assert.containsText(product_page_result, product_item, 'UI: Specific Product Page is Visible');
        browser.useCss();
        
        browser.saveScreenshot('tests_output/test_2.png');
    }
}
